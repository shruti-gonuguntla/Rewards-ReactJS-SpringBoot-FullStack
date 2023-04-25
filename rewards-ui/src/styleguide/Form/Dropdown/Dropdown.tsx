import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface Field {
    id?: string;
    labelId?: string;
    testId?: string;
    disabled?: boolean;
    label?: string;
    name: string;
    onChange: (value: any, name: string) => void;
    placeholder?: string;
    required?: boolean;
    requiredText?: string;
    value: any;
    variant: "small" | "medium";
}

export interface Props extends Field {
    onChange: (value: any | undefined, name: string) => void;
    options: any[];
    value: string | undefined;
    defaultValue?: string | undefined;
    getOptionId: (option: any) => string;
    getOptionLabel: (option: any) => string;
}

const DropDown: React.FC<Props> = ({
    id,
    labelId,
    testId,
    label,
    name,
    onChange,
    options,
    value,
    defaultValue,
    variant,
    getOptionId,
    getOptionLabel
}) => {

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event, name);
    };
    return (
        <Box minWidth={"80px"}>
            <FormControl fullWidth size={variant}>
                <InputLabel id={id}>{label}</InputLabel>
                <Select
                    labelId={id}
                    id={labelId}
                    data-testid={testId}
                    data-cy={`input-${testId}`}
                    value={value}
                    defaultValue={defaultValue}
                    label={label}
                    onChange={handleChange}
                >
                    {options.map(option => (<MenuItem key={getOptionLabel(option)} data-cy={`select-option-${getOptionLabel(option)}`}
                        value={getOptionId(option)}>{getOptionLabel(option)}</MenuItem>))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default React.memo(DropDown);