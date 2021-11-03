import React from 'react'
import { Spin, Space } from 'antd';
import { loader } from './LoaderStyles.js'

const Loader = () => {

    return (
        <div className="loaderContainer" style={loader.loaderContainer}>
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    )
}

export default Loader
