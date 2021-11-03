import React, { useContext } from 'react'
import Slider from '../../Components/Slider/Slider'
import LineChart from "../../Components/LineChart/Chart";
import EventsContext from '../../Context/Events/eventsContext';
import DataTable from '../../Components/Table/DataTable';
import nasaLogo from "../../Assets/nasa-logo.svg";
import './HomeStyles.css'
const Home = () => {
  const [eventState] = useContext(EventsContext);
  return (
    <>
      <div className="container" >
        <div className="DataDetails">
          <img src={nasaLogo} alt="Nasa Logo"/>
          <h1 className='headingMain'>
            Nasa EONET - Wildfires
          </h1>
        </div>
        <div className="Slider" >
          <Slider />
          <p>{`Data range: ${eventState.currentDate} to ${eventState.startDate}`}</p>
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