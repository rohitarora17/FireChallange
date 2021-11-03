import React, { useContext } from 'react'
//import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { Chart } from "react-google-charts";
import EventsContext from '../../Context/Events/eventsContext';
import './LineChartStyles.css'
import Loader from '../Loader/Loader';

const LineChart = () => {
  const [eventState] = useContext(EventsContext);
  console.log(eventState.chartData)
  let GraphData = [
    ['Date', 'Fires'],
    ...eventState.chartData.map(event => [event.date, event.totallength])
  ]
  return (
    <>
      {
        // data={[eventState.chartData]}
        eventState.isLoading ? <Loader />
          :
          <Chart
            className='LineChart'
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={GraphData}
            options={{
              hAxis: {
                title: 'Date (Month/Year)',
              },
              vAxis: {
                title: 'Total No. of Fires',
              },
              pointSize: 2,
            }}
            rootProps={{ 'data-testid': '1' }}
          />
      }
    </>
  )
}

export default LineChart
