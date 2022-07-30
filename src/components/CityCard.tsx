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
    const name = props.name;
    const count = props.count;

    return (
        <MDBCard background='dark' className='text-white'>
            <MDBCardImage overlay src='https://www.integral-zagreb.hr/sites/default/files/styles/1920_auto_/public/uploads/products/gallery/2022-07/london-putovanje-4.jpg' />
            <MDBCardOverlay>
                <MDBCardTitle>{name}</MDBCardTitle>
                <MDBCardText>{count} properties</MDBCardText>
            </MDBCardOverlay>
        </MDBCard>
    );
}

export default CityCard;