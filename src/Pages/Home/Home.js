import React, { useContext } from 'react'
import Slider from '../../Components/Slider/Slider'
import LineChart from "../../Components/LineChart/Chart";
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
          <div className="lineChart">
            <LineChart />
          </div>
          <div className="datatable">
            <DataTable />
          </div>
        </div>
    </>
  );
};

export default Home;