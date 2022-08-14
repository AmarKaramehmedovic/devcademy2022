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

    const [formValues, setFormValues] = React.useState({
        location: "",
        personCount: "",
        accType: ""
    });

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { target: { name, value } } = event;
        setFormValues((values) => ({ ...values, [name]: value  }))
    }

    const [checkInDateValue, setCheckInDate] = React.useState<Date | null>(new Date());
    const [checkOutDateValue, setCheckOutDate] = React.useState<Date | null>(new Date());

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
                <TextField
                    label="Where are you going?"
                    name="location"
                    id="outlined-start-adornment"
                    onChange={handleChange}
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
                            inputFormat="dd-MM-yyyy"
                            value={checkInDateValue}
                            onChange={(e) =>
                                setCheckInDate(e)
                            }
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
                    id="outlined-start-adornment"
                    onChange={handleChange}
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
                    id="outlined-start-adornment"
                    onChange={handleChange}
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

export default AccomodationSearch;