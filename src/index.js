import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Components/Router';
// import './globalStyle.css'
import { ConfigProvider } from 'antd';
import GlobalStyle from './Style/global';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider theme={{token : {colorPrimary : '#f9ab00'}}}>
        <GlobalStyle />
        <Router />
    </ConfigProvider>
);


