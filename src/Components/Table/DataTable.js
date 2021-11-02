import React, { useContext } from 'react'
import EventsContext from '../../Context/Events/eventsContext';
import Loader from '../Loader/Loader'
import { Table } from 'antd';
const { Column } = Table;

const DataTable = () => {
    const [eventState] = useContext(EventsContext);
    return (
        <>
            {
                eventState.isLoading ? <Loader />
                    :
                    <div className="TableContainer" style={{
                        display: 'flex',
                        justifyContent: 'flexStart',
                        flexDirection: 'column'
                    }}>
                        <h1 style={{
                            fontWeight: "lighter",
                            fontSize: "revert"
                        }}>
                            Data Table :
                        </h1>
                        <Table dataSource={eventState.data}>
                            <Column title="Month/Year" dataIndex="date" key="date" />
                            <Column title="No. of WildFires" dataIndex="totallength" key="totallength" />
                        </Table>
                    </div>
            }
        </>
    )
}

export default DataTable
