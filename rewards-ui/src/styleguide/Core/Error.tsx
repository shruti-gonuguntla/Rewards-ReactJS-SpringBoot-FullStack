import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export type Props = {
  message: string;
  inline?: boolean;
};

const Error: React.FC<Props> = ({ message, inline }) => {
  return (
    <Box
      p={1}
      height={inline ? 1 : '100vh'}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width={1}
    >
      <Typography
        variant="h2"
        component="h2"
        align="center"
        color="textSecondary"
      >
        {message}
      </Typography>
    </Box>
  );
};

export default Error;
