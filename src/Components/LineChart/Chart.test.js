import { render } from "@testing-library/react";
import React from "react"
import Chart from "./Chart";
import EventsState from '../../Context/Events/EventsState'
describe("Chart", () => {
    it("When isLoading is true then Loader should be displayed", () => {
        render(<EventsState><Chart /></EventsState>)
    })
})