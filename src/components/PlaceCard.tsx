import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Rating from '@mui/material/Rating';
import ImageIcon from '@mui/icons-material/Image';
import AspectRatio from '@mui/joy/AspectRatio';
import './PlaceCard.css'

type PlaceProps = {
    title: string;
    location: string;
    subtitle: string;
};

const PlaceCard = (props: PlaceProps) => {
    const title = props.title;
    const location = props.location;
    const subtitle = props.subtitle;

    return (
        <Card className='place-card' style={{ width: '18rem' }}>
            <ImageIcon className='place-card-pic' fontSize='large' sx={{ color: 'text.tertiary' }} />
            <Card.Body>
                <Card.Title className='place-card-title'>{title}</Card.Title>
                <Card.Text className='place-card-location'>{location}</Card.Text>
                <Card.Text className='place-card-subtitle'><b>{subtitle}</b></Card.Text>
                <Card.Text className='place-card-buttons'>
                    <a href='#' style={{ color: '#26c1b3' }}>EDIT</a>
                    &nbsp;&nbsp;&nbsp;
                    <a href='#' style={{ color: 'red' }}>DELETE PLACE</a>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PlaceCard;