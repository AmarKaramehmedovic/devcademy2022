import React from 'react';
import './AccomodationSearch.css'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { CalendarToday, Hotel, KingBed, Person } from '@mui/icons-material';
import { DatePicker, DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import { MDBBtn } from 'mdb-react-ui-kit';

interface State {
    location: string;
    date1: Date;
    date2: Date;
    personCount: number;
    accType: Object
}

const AccomodationSearch = () => {
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

    const [date1, setDate1] = React.useState<Date | null>(new Date());
    const [date2, setDate2] = React.useState<Date | null>(new Date());

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Fetch updated filter");
    };

    return (
        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }} noValidate autoComplete="off">
            <div>
                <TextField
                    label="Where are you going?"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><KingBed /></InputAdornment>,
                    }}
                />
            </div>
            <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <div className='date-picker'>
                        <DatePicker
                            label="Check in"
                            value={date1}
                            onChange={(newValue) => {
                                setDate1(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                    <div className='date-picker'>
                        <DatePicker
                            label="Check out"
                            value={date2}
                            onChange={(newValue) => {
                                setDate2(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                </LocalizationProvider>
            </div>
            <div>
                <TextField
                    label="How many people?"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Person /></InputAdornment>,
                    }}
                />
            </div>
            <div>
                <TextField
                    label="What type of accomodation?"
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
                <MDBBtn type='button' className='search-btn'>SEARCH</MDBBtn>
            </div>
        </Box>
    );
}

export default AccomodationSearch;