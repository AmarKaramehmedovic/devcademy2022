import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Rating from '@mui/material/Rating';
import ImageIcon from '@mui/icons-material/Image';
import AspectRatio from '@mui/joy/AspectRatio';
import './AccomodationCard.css';

type AccomodationProps = {
    title: string;
    location: string;
    price: number;
    categorization: number;
};

const AccomodationCard = (props: AccomodationProps) => {

    const { title, location, price, categorization } = props;

    return (
        <Card className='acc-card' style={{ width: '18rem' }}>
            <Card.Img className='acc-card-pic' variant="top" src='/img/accImg1.png' />
            <Card.Body>
                <Card.Title className='acc-card-title'>{title}</Card.Title>
                <Card.Text className='acc-card-location'>{location}</Card.Text>
                <Card.Text className='acc-card-price'><b>EUR {price}</b></Card.Text>
                <Rating className='acc-card-rating' name="read-only" value={categorization} readOnly />
            </Card.Body>
        </Card>
    );
}

export default AccomodationCard;