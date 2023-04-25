import React,{FC} from 'react';
import {Box} from '@mui/material';

interface Props {
  value: string | number;
}
const Cell: FC<Props> = ({value}) => {
  return <Box className='Cell'>{`${value}`}</Box>;
};

export default Cell;
