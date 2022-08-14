import React from 'react';
import { Rating } from '@mui/material';
import './ReservationCard.css'

type ReservationProps = {
    title: string;
    categorization: number;
    type: string;
    price: number;
    location: string;
    postalCode: string;
};

const ReservationCard = (props: ReservationProps) => {

    const { title, categorization, type, price, location, postalCode } = props;


    return (
        <div className="card mb-3 res-card" style={{ maxWidth: '618px' }}>
            <div className="row g-0">
                <div className="col-md-5 res-card-img-wrapper">
                    <img
                        src="img/resImg1.png"
                        alt="Trendy Pants and Shoes"
                        className="img-fluid res-card-img"
                    />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title res-card-title">{title}</h5>
                        <Rating className='res-card-rating' name="read-only" value={categorization} readOnly />
                        <p className="card-text res-card-text">{type}</p>
                        <p className="card-text res-card-text">{location}</p>
                        <p className="card-text res-card-text">{postalCode}</p>
                        <p className="card-text res-card-text">EUR {price} per night</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationCard;