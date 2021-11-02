import React, { useContext } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import EventsContext from '../../Context/Events/eventsContext';
import Loader from '../Loader/Loader';

const Chart = () => {
    const [eventState] = useContext(EventsContext);
    return (
        <>
            {
                eventState.isLoading ? <Loader />
                    :
                    <LineChart
                        width={1000}
                        height={600}
                        data={eventState.data}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    >
                        <Line type="monotone" dataKey="totallength" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date" />
                        <YAxis />
                    </LineChart>
            }
        </>
    )
}

export default Chart
