import React, { useContext } from 'react'
//import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { Chart } from "react-google-charts";
import EventsContext from '../../Context/Events/eventsContext';
import Loader from '../Loader/Loader';

const LineChart = () => {
  const [eventState] = useContext(EventsContext);
  console.log(eventState.chartData)
  return (
    <>
      {
        // data={[eventState.chartData]}
        eventState.isLoading ? <Loader />
          :
          <Chart
            width={'600px'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Date','Fires'],
              ...eventState.chartData.map(event=>[event.date,event.totallength])
            ]}
            options={{
              hAxis: {
                title: 'Date (Month/Year)',
              },
              vAxis: {
                title: 'Total No. of Fires',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
      }
    </>
  )
}

export default LineChart
