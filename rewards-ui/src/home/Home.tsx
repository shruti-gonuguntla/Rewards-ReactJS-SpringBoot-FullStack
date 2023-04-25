import React, { useState, useEffect, useContext, useCallback } from 'react';
import Box from '@mui/material/Box';
import Dropdown from 'styleguide/Form/Dropdown';
import { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from './Card';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Customer, Transaction } from '../utils/Types';
import Loading from '../styleguide/Loading';
import { Context } from './Context'

export type Props = {};

const Home: React.FC<Props> = () => {
    const [selectedCustomer, setSelectedCustomer] = useState<number>(1);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const navigate = useNavigate();
    const {
        dispatch,
        user,
    } = useContext(Context);

    const getCustomerName = useCallback(() => {
        let name = customers?.find((customer) => customer.id === user)?.name as string || ''
        return name
    },
        [customers, user])

    const updateCustomer = (event: SelectChangeEvent) => {
        setSelectedCustomer(parseInt(event.target.value))
        dispatch({ type: 'setUser', value: event.target.value });
    };
    const viewAllCustRewards = () => {
        navigate('/rewards')
    }

    useEffect(() => {
        fetch("http://localhost:8080/api/customers")
            .then((res) => res.json())
            .then((data) => setCustomers(data));
        setSelectedCustomer(1);
        dispatch({ type: 'setUser', value: 1 });
    }, [dispatch]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/customers/${selectedCustomer}/transactions`)
            .then((res) => res.json())
            .then((data) => setTransactions(data));
    }, [selectedCustomer])

    return ((customers?.length === 0 || transactions?.length === 0) ?
        <Box
            p={1}
            height={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            width={1}
        >
            <Loading variant='spinner' />
        </Box>
        : <Box
            display="flex"
            flexDirection="column"
            height={1}
            width={1}
            maxHeight={1}
            position="relative"
            p={2}
            data-testid = {"home"}
        >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <Dropdown
                        id="customers"
                        labelId="select-customers"
                        testId="rewards-by-customer"
                        label="Customers"
                        name="customers"
                        defaultValue={"1"}
                        onChange={updateCustomer}
                        options={customers || []}
                        value={selectedCustomer.toString()}
                        variant={"medium"}
                        getOptionId={(option) => option.id}
                        getOptionLabel={(option) => option.name}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        disableElevation
                        color="primary"
                        variant="outlined"
                        onClick={viewAllCustRewards}
                        data-testid = {"viewAllRewards"}
                    >
                        All Customer Rewards
                    </Button>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Card name={getCustomerName()} data={transactions} noWrap={false} />
                </Grid>
            </Grid>
            <Grid container rowSpacing={1}></Grid>
        </Box>
    )
}
export default React.memo(Home);