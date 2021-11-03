import React, { useContext } from 'react'
import Slider from '../../Components/Slider/Slider'
import LineChart from "../../Components/LineChart/Chart";
import EventsContext from '../../Context/Events/eventsContext';
import DataTable from '../../Components/Table/DataTable';
import nasaLogo from "../../Assets/nasa-logo.svg";
import {Container, Row, Col} from 'react-bootstrap';

import './HomeStyles.css'
const Home = () => {
  const [eventState] = useContext(EventsContext);
  return (
    <>
      <Container>
        <Row><Col>
        <div className="DataDetails">
          <img src={nasaLogo} alt="Nasa Logo"/>
          <h1 className='headingMain'>
            Nasa EONET - Wildfires
          </h1>
        </div>
        </Col>
        </Row>
        <Row><Col>
        <div className="Slider" >
          <Slider />
          <p>{`Data range: ${eventState.currentDate} to ${eventState.startDate}`}</p>
        </div>
        </Col></Row>
        <Row><Col>
        <div className="lineChart">
          <LineChart />
        </div>
        </Col></Row>
        <Row><Col>
        <div className="datatable">
          <DataTable />
        </div>
        </Col></Row>
      </Container>
    </>
  );
};

export default Home;