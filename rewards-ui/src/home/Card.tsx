import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Card.css';
import Grid from '@mui/material/Grid';
import Dropdown from 'styleguide/Form/Dropdown';
import { MONTHS, pointsPerTransaction } from '../utils/Utils';
import { SelectChangeEvent } from '@mui/material/Select';
import DataTable from './DataTable';
import { Transaction } from '../utils/Types';
import { Context } from './Context';

const CardComponent: React.FC<{
    name: string | "";
    data: Transaction[];
    noWrap: boolean;
}> = ({ data, name, noWrap }) => {
    const { filteredRows, dispatch } = useContext(Context)
    const [month, setMonth] = useState("0");
    const [tableData, setTableData] = useState<Transaction[]>(data);
    const [transactionAmount, setTransactionAmount] = useState<number>();
    const [totalRewards, setTotalRewards] = useState<number>();
    const updateMonth = (event: SelectChangeEvent) => {
        setMonth(event.target.value)
        let rewards: Transaction[] = event.target.value.toString() === "0" ? pointsPerTransaction(data) : tableData.filter((row) => row?.month === +event.target.value);
        dispatch({ type: 'setFilteredRows', value: rewards })
        getTotalTransactionAmount(rewards)
        getTotalRewards(rewards)
    };
    const getTotalTransactionAmount = (rows) => {
        let amt = rows.reduce((acc, curr) => {
            acc = parseInt(acc) + parseInt(curr.price)
            return acc
        }, [0])
        setTransactionAmount(amt)
    }
    const getTotalRewards = (rows) => {
        let rewards = rows.reduce((acc, curr) => {
            acc = parseInt(acc) + parseInt(curr.points)
            return acc
        }, [0])
        setTotalRewards(rewards)
    }

    useEffect(() => {
        let modifiedData = pointsPerTransaction(data)
        setTableData(modifiedData)
        getTotalRewards(modifiedData)
        getTotalTransactionAmount(modifiedData)
        dispatch({ type: 'setFilteredRows', value: modifiedData })
    }, [data, dispatch])

    useEffect(() => { setMonth("0") }, [name])
    return (
        <Box display="flex" width={1} pt={2}>
            <Box display="flex" width={1} flexDirection={"column"}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Box display="flex" flexDirection={"row"}>
                            <Box><Typography className={"title"} noWrap color="inherit">
                                <Box sx={{ fontWeight: 'bold' }}>  {'Name'}:&nbsp;&nbsp;
                                </Box></Typography></Box>
                            <Box> <Typography
                                noWrap={noWrap}
                                className={'small'}
                            >
                                {name}
                            </Typography></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display="flex" flexDirection={"row"} pt={1}>
                            <Box><Typography className={"title"} noWrap color="inherit">
                                <Box sx={{ fontWeight: 'bold' }}>  {'Transaction Amount'}:&nbsp;&nbsp;
                                </Box></Typography></Box>
                            <Box> <Typography
                                noWrap={noWrap}
                                className={'small'}
                            >
                                {transactionAmount}
                            </Typography></Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Box display="flex" flexDirection={"row"}>
                            <Box><Typography className={"title"} noWrap color="inherit">
                                <Box sx={{ fontWeight: 'bold' }}> {'Total Rewards'}:&nbsp;&nbsp;
                                </Box></Typography></Box>
                            <Box> <Typography
                                noWrap={noWrap}
                                className={'small'}

                            >
                                {totalRewards}
                            </Typography></Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display="flex" flexDirection={"row"} pt={1}>
                            <Box pt={0.5}><Typography className={"title"} noWrap color="inherit">
                                <Box sx={{ fontWeight: 'bold' }}>  {'Filter By Month'}:&nbsp;&nbsp;
                                </Box></Typography></Box>
                            <Box> <Dropdown
                                id="months"
                                labelId="select-month"
                                testId="monthly-rewards"
                                label="Months"
                                name="months"
                                defaultValue={"0"}
                                onChange={updateMonth}
                                options={MONTHS}
                                value={month}
                                variant={"small"}
                                getOptionId={(option) => option.key}
                                getOptionLabel={(option) => option.value}
                            /></Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={10}>
                        <Box pt={2} >
                            <DataTable data={filteredRows} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default React.memo(CardComponent);
