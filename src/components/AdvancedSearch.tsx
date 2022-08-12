import React, { useState } from 'react';
import './AccomodationSearch.css'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Hotel, KingBed, Person } from '@mui/icons-material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MDBBtn } from 'mdb-react-ui-kit';


const AdvancedSearch = () => {
    const accType = [
        {
            value: 'Apartment',
            label: 'Apartment',
        },
        {
            value: 'Room',
            label: 'Room',
        },
        {
            value: 'House',
            label: 'House',
        }
    ];

    const [formValues, setFormValues] = useState({
        personCount: "",
        accType: "",
    });

    const [dateValues, setDateValues] = useState({
        checkInDate: new Date(),
        checkOutDate: new Date()
    });

    const handleChange = (name: string, value: string) => {
        setFormValues((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formValues);
    };

    const [handleCheckInDate, setCheckInDate] = React.useState<Date | null>(new Date());
    const [handleCheckOutDate, setCheckOutDate] = React.useState<Date | null>(new Date());

    return (
        <form onSubmit={handleSubmit}>
        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }} noValidate autoComplete="off">
            <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <div className='date-picker'>
                        <DatePicker
                            label="Check in"
                            value={handleCheckInDate}
                            onChange={(value) => {
                                setCheckInDate(value);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                    <div className='date-picker'>
                        <DatePicker
                            label="Check out"
                            value={handleCheckOutDate}
                            onChange={(value) => {
                                setCheckOutDate(value);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                </LocalizationProvider>
            </div>
            <div>
                <TextField
                    label="How many people?"
                    name="peopleCount"
                    // onChange={handleChange}
                    value={formValues.personCount}
                    id="outlined-start-adornment"
                    type="number"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Person /></InputAdornment>,
                    }}
                />
            </div>
            <div>
                <TextField
                    label="What type of accomodation?"
                    name="accType"
                    // onChange={handleChange}
                    value={formValues.accType}
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    select
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Hotel /></InputAdornment>,
                    }}
                >
                    {accType.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div>
                <MDBBtn type='submit' className='search-btn'>SEARCH</MDBBtn>
            </div>
        </Box>
        </form>
    );
}

export default AdvancedSearch;