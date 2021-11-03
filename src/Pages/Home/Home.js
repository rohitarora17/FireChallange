import React, { useContext } from 'react'
import Slider from '../../Components/Slider/Slider'
import LineChart from "../../Components/LineChart/Chart";
import EventsContext from '../../Context/Events/eventsContext';
import DataTable from '../../Components/Table/DataTable';
import './HomeStyles.css'
const Home = () => {
  const [eventState] = useContext(EventsContext);
  return (
    <>
      <div className="container" >
        <div className="DataDetails">
          <h1 className='headingMain'>
            {`Data is from ${eventState.startDate} to ${eventState.currentDate}`}
          </h1>
        </div>
        <div className="Slider" >
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