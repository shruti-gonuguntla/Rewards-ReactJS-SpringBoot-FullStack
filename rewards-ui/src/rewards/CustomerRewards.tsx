import React, { useState, useEffect } from 'react';
import { CustRewards, Column } from 'utils/Types';
import Table from '../styleguide/Table/Table';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export type Props = {};

const CustomerRewards: React.FC<Props> = () => {

    const [rewards, setRewards] = useState<CustRewards[]>([]);
    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/rewards")
            .then((res) => res.json())
            .then((data) => setRewards(data));
    }, []);

    const getRows = () => {
        return rewards.map((row) => {
            return [
                {
                    column: 'customer',
                    value: row.customerName,
                },
                {
                    column: 'rewards',
                    value: row.rewardPoints,
                },
            ];
        })
    };

    const getColumns = (): Array<Column> => {
        return [
            {
                id: 'customer',
                title: 'Customer',
            },
            {
                id: 'rewards',
                title: 'Rewards',
            },
        ];
    };
    return (
        <Box p={2}>
            <Box display="flex" justifyContent="flex-start">
                <Button
                    disableElevation
                    color="primary"
                    variant="outlined"
                    onClick={() => navigate(-1)}
                    data-testid = "backButton"
                >
                    Back
                </Button>
            </Box>
            <Box pt={1}>
                <Table rows={getRows()} columns={getColumns()} />
            </Box>
        </Box>
    )
}
export default React.memo(CustomerRewards);