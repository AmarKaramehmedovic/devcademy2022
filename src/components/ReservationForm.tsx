import React from 'react';
import './ReservationForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MDBBtn } from 'mdb-react-ui-kit';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Col, Container, Row } from 'react-bootstrap';


const ReservationForm = () => {

    const [date1, setDate1] = React.useState<Date | null>(new Date());
    const [date2, setDate2] = React.useState<Date | null>(new Date());

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Fetch updated filter");
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ width: '50ch' }}
        >
            <h3 className='res-title'>Book your stay</h3>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Full Name"
                    sx={{ m: 1, width: '100%' }}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Email address"
                    sx={{ m: 1, width: '100%' }}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Number of guests"
                    sx={{ m: 1, width: '100%' }}
                />
            </div>
            <div className='res-date-picker-wrapper'>
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <div className='res-date-picker1' style={{ width: '50%' }}>
                        <DatePicker
                            label="Check in"
                            value={date1}
                            onChange={(newValue) => {
                                setDate1(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                    <div className='res-date-picker2' style={{ width: '50%' }}>
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
            <Container fluid className='book-btn-wrapper'>
                <Row>
                    <Col sm={6}></Col>
                    <Col sm={6}>
                        <MDBBtn type='button' className='book-btn'>BOOK YOUR STAY</MDBBtn>
                    </Col>
                </Row>
            </Container>
        </Box>
    );
}

export default ReservationForm;