import React from 'react';
import Table from '../styleguide/Table/Table'
import {Column, Transaction} from '../utils/Types';

export type Props = { data: Transaction[] };
const DatatablePage: React.FC<Props> = ({data}) => {
    
    const getRows = () => {
        return data.map((row) => {
            return [
                {
                    column: 'description',
                    value: row.description,
                },
                {
                    column: 'price',
                    value: row.price,
                },
                {
                    column: 'rewards',
                    value: row.points || 0,
                },
                {
                    column: 'dateTime',
                    value: row.dateTime,
                }
                
            ];
        })
    };

    const getColumns = (): Array<Column> => {
        return [
            {
                id: 'description',
                title: 'Description',
            },
            {
                id: 'price',
                title: 'Amount',
            },
            {
                id: 'rewards',
                title: 'Rewards',
            },
            {
                id: 'dateTime',
                title: 'Transaction Date',
            },
        ];
    };
    return (<div><Table rows={getRows()} columns={getColumns()} /></div>)
}

export default React.memo(DatatablePage);