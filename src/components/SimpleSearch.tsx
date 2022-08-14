import React, { ChangeEvent, useState } from 'react';
import './AccomodationSearch.css'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { KingBed } from '@mui/icons-material';
import { MDBBtn } from 'mdb-react-ui-kit';


const SimpleSearch = () => {

    const [formValues, setFormValues] = useState({
        location: ""
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target: { name, value } } = event;
        setFormValues((values) => ({ ...values, [name]: value  }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formValues);
    };

    return (
        // <form onSubmit={handleSubmit}>
        <Box onSubmit={handleSubmit} component="form" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }} noValidate autoComplete="off">
            <div>
                <TextField
                    label="Where are you going?"
                    name="location"
                    onChange={handleChange}
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '50ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><KingBed /></InputAdornment>,
                    }}
                />
            </div> 
            <div>
                <MDBBtn type='submit' className='search-btn'>SEARCH</MDBBtn>
            </div>
        </Box>
        // </form>
    );
}

export default SimpleSearch;