import React from 'react'
import { Spin, Space } from 'antd';
import './LoaderStyles.css'

const Loader = () => {

    return (
        <div className="loaderContainer">
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    )
}

export default Loader
