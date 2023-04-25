import React, { useMemo } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export type Props = {
    variant?: 'page' | 'component' | 'spinner';
    spinnerSize?: number;
};

const config = {
    page: {
        height: '100vh',
        width: 1,
        lines: 12,
        p: 1,
    },
    component: {
        height: 1,
        width: 1,
        lines: 12,
        p: 0,
    },
    spinner: {
        height: 1,
        width: 1,
        lines: 0,
        p: 0,
    },
};

const Loading: React.FC<Props> = ({ variant = 'page', spinnerSize = 56 }) => {
    const { height, width, lines, p } = config[variant];

    const items = useMemo(() => {
        const itemHeight = `${100 / lines}%`;
        return new Array(lines).fill(1).map((_, index) => ({
            id: index,
            height: itemHeight,
        }));
    }, [lines]);

    if (variant === 'spinner') {
        return (
                <Box
                    position="absolute"
                    height={height}
                    width={height}
                    top={0}
                    left={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <CircularProgress color="primary" size={spinnerSize} thickness={4} />
                </Box>
        );
    }

    return (
        <Box p={p} height={height} width={width}>
            {items.map(item => (
                <Skeleton
                    key={item.id}
                    animation="wave"
                    variant="text"
                    height={item.height}
                    width="100%"
                />
            ))}
        </Box>
    );
};

export default React.memo(Loading);
