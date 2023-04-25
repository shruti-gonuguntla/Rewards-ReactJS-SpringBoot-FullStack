import React,{FC} from 'react';
import {CellValue} from '../../../utils/Types';
import Cell from './Cell';
import {Box} from '@mui/material';

interface Props {
  cells: Array<CellValue>;
}
const Row: FC<Props> = ({cells}) => {
  const createCells = () => {
    return cells.map((c, i) => <Cell value={c.value} key={i} />);
  };
  return <Box className='Row'>{createCells()}</Box>;
};

export default Row;
