import React, { useContext } from 'react'
import EventsContext from '../../Context/Events/eventsContext';
import Loader from '../Loader/Loader'
import { Table } from 'antd';
const { Column } = Table;

const DataTable = () => {
    const [eventState] = useContext(EventsContext);
    console.log()
    return (
        <>
            {
                eventState.isLoading ? <Loader />
                    :
                    <div className="TableContainer" style={{
                        display: 'flex',
                        justifyContent: 'flexStart',
                        flexDirection: 'column',
                        paddingBottom:'1rem'
                    }}>
                        <h1 style={{
                            fontWeight: "lighter",
                            fontSize: "revert"
                        }}>
                            Data Table :
                        </h1>
                        <Table
                            dataSource={eventState.data}
                            pagination={eventState.data.length <= 5 ? false : { defaultPageSize: 5 }}
                        >
                            <Column title="Month/Year" dataIndex="date" key="date" />
                            <Column title="Titles" dataIndex="title" key="title" />
                            <Column title="No. of WildFires" dataIndex="totallength" key="totallength" />
                        </Table>
                    </div>
            }
        </>
    )
}

export default DataTable
