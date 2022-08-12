import React, { useState } from 'react';
import './ReservationForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MDBBtn } from 'mdb-react-ui-kit';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Col, Container, Row } from 'react-bootstrap';


const ReservationForm = () => {

    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        personCount: ""
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
                    name="accType"
                    // onChange={handleChange}
                    sx={{ m: 1, width: '100%' }}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Email address"
                    name="accType"
                    // onChange={handleChange}
                    sx={{ m: 1, width: '100%' }}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Number of guests"
                    name="accType"
                    // onChange={handleChange}
                    sx={{ m: 1, width: '100%' }}
                />
            </div>
            <div className='res-date-picker-wrapper'>
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <div className='res-date-picker1' style={{ width: '50%' }}>
                        <DatePicker
                            label="Check in"
                            value={handleCheckInDate}
                            onChange={(value) => {
                                setCheckInDate(value);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                    <div className='res-date-picker2' style={{ width: '50%' }}>
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
            <Container fluid className='book-btn-wrapper'>
                <Row>
                    <Col sm={6}></Col>
                    <Col sm={6}>
                        <MDBBtn type='submit' className='book-btn'>BOOK YOUR STAY</MDBBtn>
                    </Col>
                </Row>
            </Container>
        </Box>
        </form>
    );
}

export default ReservationForm;