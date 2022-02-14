import { Spin } from 'antd';
import React from 'react';
import { useLoadingContext } from '../contexts/LoadingContext';

export const GlobalLoader = ({ children }) => {
    const { loading } = useLoadingContext();
    return <Spin className="max-height overlayBG" spinning={loading}>{children}</Spin>
}

