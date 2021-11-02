
import React, { useReducer, useEffect } from 'react'
import moment from "moment";
import axios from "axios";
import Reducer from './Reducer';
import EventContext from './eventsContext';
const initialState = {
    startDate: moment().subtract(12, "month").format("YYYY-MM-DD"),
    currentDate: moment().format("YYYY-MM-DD"),
    isLoading: false,
    data: [],
};

const EventsState = ({ children }) => {
    const [eventState, dispatch] = useReducer(Reducer, initialState);
    const getData = async () => {
        dispatch({ type: 'SET_LOADING', payload: true })
        axios
            .get(
                `https://eonet.sci.gsfc.nasa.gov/api/v3/events?status=closed&category=wildfires&limit=1000&start=${eventState.startDate}&end=${eventState.currentDate}`
            )
            .then((res) => {
                let sorted = res.data.events.sort(function (a, b) {
                    return moment(a.closed).diff(moment(b.closed))
                })
                let allevents = sorted.map((event) => {
                    let parsedDate = moment(event.closed).format("MM/YYYY");
                    return {
                        date: parsedDate,
                        title:event.title,
                        totallength: res.data.events.filter(
                            (duplicateDates) =>
                                moment(duplicateDates.closed).format("MM/YYYY") === parsedDate
                        ).length,
                    };
                });

                let finalData = allevents.filter(
                    (el, i) => allevents.findIndex((sub) => sub.date === el.date) === i
                )
                dispatch({ type: 'SET_DATA', payload: finalData })
                dispatch({ type: 'SET_LOADING', payload: false })
            });
    };
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, [eventState.startDate]);
    return (
        <EventContext.Provider value={[eventState, dispatch]}>
            {children}
        </EventContext.Provider>
    )
}

export default EventsState
