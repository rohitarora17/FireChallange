import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Slider, Switch } from "antd";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const Home = () => {
  const [finalData, setFinalData] = useState([]);
  const [months, setMonths] = React.useState(2);
  const [startDate, setStartDate] = React.useState(
    moment().subtract(months, "month").format("YYYY-MM-DD")
  );
  const currentDate = React.useState(moment().format("YYYY-MM-DD"));
  const setValues = (max) => {
    setMonths(max);
    setStartDate(moment().subtract(months, "month").format("YYYY-MM-DD"));
    getData();
  };
  const getData = () => {
    axios
      .get(
        `https://eonet.sci.gsfc.nasa.gov/api/v3/events?status=closed&category=wildfires&limit=100&start=${startDate}&end=${currentDate}`
      )
      .then((res) => {
        let allevents = res.data.events.map((event) => {
          let parsedDate = moment(event.closed).format("MM/YYYY");
          return {
            date: parsedDate,
            totallength: res.data.events.filter(
              (duplicateDates) =>
                moment(duplicateDates.closed).format("MM/YYYY") === parsedDate
            ).length,
          };
        });
        setFinalData(
          allevents.filter(
            (el, i) => allevents.findIndex((sub) => sub.date === el.date) === i
          )
        );
      });
  };
  useEffect(() => {
    getData();
    console.log(finalData);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div className="Slider" style={{ width: "50%", marginTop: "2rem" }}>
          <Slider
            min={2}
            max={24}
            onChange={(max) => setValues(max)}
            defaultValue={30}
            disabled={false}
          />
        </div>
        <div className="lineChart" style={{ marginTop: "2rem" }}>
          <LineChart
            width={1000}
            height={600}
            data={finalData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="totallength" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default Home;
