import React from 'react'
import { Spin, Space } from 'antd';

const Loader = () => {
    return (
        <div className="loaderContainer" style={{
            display: 'flex',
            position: 'absolute',
            top: '50%',
            left: '50%'
        }}>
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    )
}

export default Loader
