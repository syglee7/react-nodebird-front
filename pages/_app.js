import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from "prop-types";
import Head from 'next/head';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
};

App.PropTypes = {
    Component: PropTypes.elementType.isRequired
}

export default App;