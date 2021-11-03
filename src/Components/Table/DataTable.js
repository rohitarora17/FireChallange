import React, { useContext } from 'react'
import EventsContext from '../../Context/Events/eventsContext';
import Loader from '../Loader/Loader'
import { Table } from 'antd';
import './DataTableStyles.css'
const DataTable = () => {
    const [eventState] = useContext(EventsContext);
    const pageSizes = [5, 10, 20, 50]
    return (
        <>
            {
                eventState.isLoading ? <Loader />
                    :
                    <div className="TableContainer">
                        <h1 className="table-heading">
                            Wildfires Data:
                        </h1>
                        <Table
                            dataSource={eventState.tableData}
                            pagination={eventState.tableData.length <= 5 ? false : { defaultPageSize: 5, showSizeChanger: true, pageSizeOptions:pageSizes }}
                            columns={[{
                                title: "ID", dataIndex: "id", key: "id"
                            },
                            {
                                title: "Start Date", dataIndex: "startdate", key: "startdate"
                            }, {
                                title: "Closed Date", dataIndex: "closeddate", key: "closeddate"
                            }, {
                                title: "Title", dataIndex: "title", key: "title"
                            }, {
                                // eslint-disable-next-line
                                title: "Source Info", dataIndex: "inciweb", key: "inciweb", render: text => <a target='_blank' href={text}>View</a>,
                            },]}
                        />;
                    </div>
            }
        </>
    )
}

export default DataTable
