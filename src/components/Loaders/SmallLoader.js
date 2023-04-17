import React from 'react';
import { Space, Spin } from 'antd';

const SmallLoader = () => (
    <Space direction="vertical" className='flex justify-center items-center min-h-screen' style={{ width: '100%' }}>
        <Space>
            <Spin tip="" size="large">
                <div className="content" />
            </Spin>
        </Space>
    </Space>
);

export default SmallLoader;