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

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { target: { name, value } } = event;
        setFormValues((values) => ({ ...values, [name]: value }))
    }

    const [checkInDateValue, setCheckInDate] = useState<Date | null>(new Date());
    const [checkOutDateValue, setCheckOutDate] = useState<Date | null>(new Date());

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formValues);
        console.log(checkInDateValue);
        console.log(checkOutDateValue);
    };

    return (
        // <form onSubmit={handleSubmi</form>t}>
        <Box onSubmit={handleSubmit}
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
                    name="fullName"
                    onChange={handleChange}
                    sx={{ m: 1, width: '100%' }}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Email address"
                    name="email"
                    onChange={handleChange}
                    sx={{ m: 1, width: '100%' }}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Number of guests"
                    name="personCount"
                    onChange={handleChange}
                    sx={{ m: 1, width: '100%' }}
                />
            </div>
            <div className='res-date-picker-wrapper'>
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <div className='res-date-picker1' style={{ width: '50%' }}>
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
                    <div className='res-date-picker2' style={{ width: '50%' }}>
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
            <Container fluid className='book-btn-wrapper'>
                <Row>
                    <Col sm={6}></Col>
                    <Col sm={6}>
                        <MDBBtn type='submit' className='book-btn'>BOOK YOUR STAY</MDBBtn>
                    </Col>
                </Row>
            </Container>
        </Box>
        // </form>
    );
}

export default ReservationForm;