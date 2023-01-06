import React from 'react';
import {ColumnDirective, ColumnsDirective, KanbanComponent} from "@syncfusion/ej2-react-kanban";

function Cart({ id, kanbanData, kanbanGrid }) {
    return (
        <div>
            <p className="mb-4 text-xl">Board: {id}</p>
            <KanbanComponent
                id={"kanban-" + id}
                dataSource={kanbanData}
                cardSettings={{contentField: 'Summary', headerField: 'Id'}}
                keyField="Status"
            >
                <ColumnsDirective>
                    {kanbanGrid.map((item, index) =>
                        <ColumnDirective key={index} {...item}/>
                    )}
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    );
}

export default Cart;