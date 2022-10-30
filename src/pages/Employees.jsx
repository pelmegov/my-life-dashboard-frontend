import React from 'react';
import {Header} from "../components";
import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Inject,
    Page,
    Search,
    Toolbar
} from "@syncfusion/ej2-react-grids";
import {employeesData, employeesGrid} from "../data/dummy";

function Employees(props) {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Employees"/>
            <GridComponent
                id="gridcomp"
                dataSource={employeesData}
                allowSorting
                toolbar={['Search']}
                width="auto"
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item}/>
                    ))}
                </ColumnsDirective>
                <Inject services={
                    [Search, Page, Toolbar]
                }/>
            </GridComponent>
        </div>
    );
}

export default Employees;