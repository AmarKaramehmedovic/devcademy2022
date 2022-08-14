import React, { ChangeEvent, useState } from 'react';
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
        accType: ""
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target: { name, value } } = event;
        setFormValues((values) => ({ ...values, [name]: value  }))
    }

    const [checkInDateValue, setCheckInDate] = useState<Date | null>(new Date());
    const [checkOutDateValue, setCheckOutDate] = useState<Date | null>(new Date());

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(checkInDateValue);
        console.log(checkOutDateValue);
        console.log(formValues);
    };

    return (
        // <form onSubmit={handleSubmit}>
        <Box onSubmit={handleSubmit} component="form" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }} noValidate autoComplete="off">
            <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <div className='date-picker'>
                        <DatePicker
                            label="Check in"
                            inputFormat="dd-MM-yyyy"
                            value={checkInDateValue}
                            onChange={(value) => {
                                setCheckInDate(value);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                    <div className='date-picker'>
                        <DatePicker
                            label="Check out"
                            inputFormat="dd-MM-yyyy"
                            value={checkOutDateValue}
                            onChange={(e) =>
                                setCheckOutDate(e)
                            }
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                </LocalizationProvider>
            </div>
            <div>
                <TextField
                    label="How many people?"
                    name="personCount"
                    onChange={handleChange}
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
                    onChange={handleChange}
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
        // </form>
    );
}

export default AdvancedSearch;