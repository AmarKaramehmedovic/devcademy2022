import React from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardOverlay,
    MDBCardImage
} from 'mdb-react-ui-kit';
import './CityCard.css'

type CityProps = {
    name: string;
    count: string;
};

const CityCard = (props: CityProps) => {

    const { name, count } = props;

    return (
        <MDBCard className='text-white city-card'>
            <MDBCardImage className='city-card-img' overlay src='img/london.jpg' />
            <MDBCardOverlay>
                <MDBCardTitle>{name}</MDBCardTitle>
                <MDBCardText>{count} properties</MDBCardText>
            </MDBCardOverlay>
        </MDBCard>
    );
}

export default CityCard;