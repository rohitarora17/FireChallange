import React, { useContext } from 'react'
import Slider from '../../Components/Slider/Slider'
import Chart from "../../Components/Line Chart/Chart";
import EventsContext from '../../Context/Events/eventsContext';
import DataTable from '../../Components/Table/DataTable';

const Home = () => {
  const [eventState] = useContext(EventsContext);
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
        <div className="DataDetails" style={{ margin: '2rem' }}>
          <h1 style={{
            fontWeight: "lighter",
            fontSize: "revert"
          }}>
            {`Data is from ${eventState.startDate} to ${eventState.currentDate}`}
          </h1>
        </div>
        <div className="Slider" style={{ width: "50%" }}>
          <Slider />
        </div>
        <div className="TableChart" style={{
          display: "flex",
          padding: '1rem',
          flexDirection:'column'
        }}>
          <div className="lineChart" style={{ marginTop: "2rem", paddingBottom: '2rem' }}>
            <Chart />
          </div>
          <div className="DataTable" style={{
            display: "flex",
            justifyContent: "flexStart",
            width: "65%",
            marginLeft: "3rem"
          }}>
            <DataTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
