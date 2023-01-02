import React from 'react';
import {useStateContext} from "../../contexts/ContextProvider";
import {
    ChartComponent,
    DateTime,
    Inject,
    Legend,
    SplineAreaSeries,
    SeriesCollectionDirective,
    SeriesDirective
} from "@syncfusion/ej2-react-charts";
import {areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis} from "../../data/dummy";
import { Header } from "../../components";

function Area(props) {
    const {currentMode} = useStateContext();

    return (
        <div>
            <Header category="Area" title="Inflation Rate in Percentage"/>

            <ChartComponent
                id="area-char"
                height="420px"
                primaryXAxis={areaPrimaryXAxis}
                primaryYAxis={areaPrimaryYAxis}
                chartArea={{ border: {width: 0}}}
                tooltip={{ enable: true }}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                <SeriesCollectionDirective>
                    {areaCustomSeries.map((item, index) =>
                        <SeriesDirective key={index} {...item} />
                    )}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
}

export default Area;