import React from 'react';
import './AccomodationSearch.css'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { KingBed } from '@mui/icons-material';
import { MDBBtn } from 'mdb-react-ui-kit';


const SimpleSearch = () => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Fetch updated filter");
    };

    return (
        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }} noValidate autoComplete="off">
            <div>
                <TextField
                    label="Where are you going?"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '50ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><KingBed /></InputAdornment>,
                    }}
                />
            </div> 
            <div>
                <MDBBtn type='button' className='search-btn'>SEARCH</MDBBtn>
            </div>
        </Box>
    );
}

export default SimpleSearch;