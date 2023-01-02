import React from 'react';
import {Header, LineChart} from "../../components";

function Line(props) {
    return (
        <div className="mt-4 md:mt-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Chart" title="Inflation Rate"/>
            <div className="w-full">
                <LineChart />
            </div>
        </div>
    );
}

export default Line;