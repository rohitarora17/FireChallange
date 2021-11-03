import React, { useContext, useState, useEffect } from 'react'
//import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { Chart } from "react-google-charts";
import EventsContext from '../../Context/Events/eventsContext';
import './LineChartStyles.css'
import Loader from '../Loader/Loader';

const LineChart = () => {
  const [eventState] = useContext(EventsContext);
  const [graphDataParsed, setGraphDataParsed] = useState([])
  useEffect(() => {
    const GraphData = () => {
      eventState.chartData.length !== 0 ?
        setGraphDataParsed([
          ['Date', 'Fires'],
          ...eventState.chartData.map(event => [event.date, event.totallength])
        ])
        :
        setGraphDataParsed(
          [
            ['Date', 'Fires'],
            [0, 0],
          ]
        )
    }
    GraphData()
  }, [eventState])
  return (
    <>
      {
        // data={[eventState.chartData]}
        eventState.isLoading ? <Loader />
          :
          <Chart
            className='LineChart'
            width={'1200px'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={graphDataParsed}
            options={{
              hAxis: {
                title: 'Date (Month/Year)',
              },
              vAxis: {
                title: 'Total No. of Fires',
              },
              pointSize: 2,
              // explorer: { axis: 'horizontal', action: ['dragToPan'] },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
      }
    </>
  )
}

export default LineChart
