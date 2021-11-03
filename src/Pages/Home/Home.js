import React, { useContext } from 'react'
import Slider from '../../Components/Slider/Slider'
import LineChart from "../../Components/LineChart/Chart";
import EventsContext from '../../Context/Events/eventsContext';
import DataTable from '../../Components/Table/DataTable';
import { HomeStyles } from './HomeStyles.js'
const Home = () => {
  const [eventState] = useContext(EventsContext);
  return (
    <>
      <div className="container" style={HomeStyles.container}>
        <div className="DataDetails" style={HomeStyles.DataDetails}>
          <h1 className='headingMain' style={HomeStyles.headingMain}>
            {`Data is from ${eventState.startDate} to ${eventState.currentDate}`}
          </h1>
        </div>
        <div className="Slider" style={HomeStyles.Slider}>
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