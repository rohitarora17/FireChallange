import React, { useContext } from 'react'
//import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { Chart } from "react-google-charts";
import EventsContext from '../../Context/Events/eventsContext';
import Loader from '../Loader/Loader';

const LineChart = () => {
    const [eventState] = useContext(EventsContext);
    return (
        <>
            {
                eventState.isLoading ? <Loader />
                    :
                    <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data = {eventState.chartData}
                    options={{
                        hAxis: {
                          title: 'Time',
                        },
                        vAxis: {
                          title: 'Popularity',
                        },
                      }}
                      rootProps={{ 'data-testid': '1' }}
                    />
            }
        </>
    )
}

export default LineChart
