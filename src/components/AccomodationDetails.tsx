import { Rating } from '@mui/material';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageIcon from '@mui/icons-material/Image';
import './AccomodationDetails.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

type AccomodationDetailsProps = {
    title: string;
    subtitle: string;
    description: string;
    type: string;
    categorization: number;
    personCount: number;
    imageUrl: string;
    freeCancelation: boolean;
    price: number;
    location: string;
    postalCode: string;
};

const AccomodationDetails = (props: AccomodationDetailsProps) => {

    const { title, subtitle, description, type, categorization, personCount, imageUrl, freeCancelation, price, location, postalCode } = props;

    return (
        <Container fluid>
            <Row>
                <Col><div className="acc-details-hero-image" /></Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <Card.Body>
                        <Card.Title className='acc-details-title'>
                            {title}
                            &nbsp;&nbsp;&nbsp;
                            <Rating className='acc-details-rating' name="read-only" value={categorization} readOnly />
                        </Card.Title>
                        <Card.Text className='acc-details-subtitle'>{subtitle}</Card.Text>
                        <br></br>
                        <Card.Text className='acc-details-cancelation'>
                            <ImageIcon fontSize='medium' sx={{ color: '#F3B08E' }} />
                            &nbsp;&nbsp;&nbsp;
                            <b>{freeCancelation ? 'Free cancellation available' : 'Free cancellation is not available'}</b>
                        </Card.Text>
                        <br></br>
                        <Card.Text className='acc-details-description'>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col sm={1} />
                <Col sm={3} className='acc-details-info-card-wrapper'>
                    <br></br>
                    <MDBCard className='acc-details-info-card'>
                        <MDBCardBody className='acc-details-info-card-body'>
                            <MDBCardTitle className='info-card-title'>Property info</MDBCardTitle>
                            <br></br>
                            <MDBCardText className='info-card-text'>{personCount}</MDBCardText>
                            <MDBCardText className='info-card-text'>{type}</MDBCardText>
                            <MDBCardText className='info-card-text'>EUR {price} per night</MDBCardText>
                            <MDBCardText className='info-card-text'>{location}</MDBCardText>
                            <MDBCardText className='info-card-text'>{postalCode}</MDBCardText>
                            <br></br>
                            <div className='info-card-btn-wrapper'>
                                <MDBBtn className='info-card-btn'>BOOK A STAY &gt;</MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </Col>
            </Row>
        </Container>
    );
}

export default AccomodationDetails;