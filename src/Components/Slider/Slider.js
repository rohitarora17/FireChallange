import React, { useContext } from 'react'
import { Slider } from "antd";
import moment from 'moment';
import EventsContext from '../../Context/Events/eventsContext';
const RangeSlider = () => {
    const [eventState, dispatch] = useContext(EventsContext);
    const setValues = async (max) => {
        let StartDate = moment().subtract(max, "month").format("YYYY-MM-DD");
        dispatch({ type: 'SET_START_DATE', payload: StartDate })
    };

    return (
        <Slider
            min={2}
            max={24}
            onAfterChange={max => setValues(max)}
            defaultValue={12}
            disabled={false}
        />
    )
}

export default RangeSlider
