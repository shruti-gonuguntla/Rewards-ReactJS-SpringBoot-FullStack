import React, { FC } from 'react';
import './index.css';
import { CellValue, Column } from '../../utils/Types';
import Row from './Row/Row';
import { Box } from '@mui/material';

interface Props {
  columns: Array<Column>;
  rows: Array<Array<CellValue>>;
}

const Table: FC<Props> = ({ columns, rows }) => {
  const getHeader = () => {
    return columns.map((c) => (
      <div className='Column' key={c.id}>
        {c.title}
      </div>
    ));
  };

  const createRows = () => {
    return rows.map((r, i) => <Row cells={r} key={`Row:${i}`} />);
  };

  return (
    <Box className='Table' data-testid='Table'>
      <Box className='Header'>{getHeader()}</Box>
      <Box className='Body' data-testid='TableBody'>
        {typeof rows === 'undefined' || rows?.length === 0 ? <Box p={2}>No Data Found</Box> :
          createRows()
        }
      </Box>
    </Box>
  );
};

export default Table;
