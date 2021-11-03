import React, { useContext } from 'react'
import { Slider } from "antd";
import moment from 'moment';
import EventsContext from '../../Context/Events/eventsContext';
const RangeSlider = () => {
    // eslint-disable-next-line
    const [eventState, dispatch] = useContext(EventsContext);
    const setValues = async (max) => {
        let StartDate = moment().subtract(max, "month").format("YYYY-MM-DD");
        dispatch({ type: 'SET_START_DATE', payload: StartDate })
    };
    const marks = {
        2: 'Start',
        24: 'Stop',
      };

    function formatter(value) {
        return `${value} months`;
    }
    return (
        <div className="sliderContainer" >
            <Slider
                min={2}
                max={24}
                marks={marks}
                onAfterChange={max => setValues(max)}
                defaultValue={12}
                disabled={false}
                tipFormatter={formatter}
            />
        </div>
    )
}

export default RangeSlider
