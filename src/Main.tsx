import React from 'react';
import Navigation from "./components/Navigation";
import AccomodationCard from "./components/AccomodationCard";
import AccomodationDetails from "./components/AccomodationDetails";
import PlaceCard from './components/PlaceCard';
import Header from './components/Header';
import Footer from './components/Footer';
import CityCard from './components/CityCard';

function Main() {
    const accomodations = [
        {
            "title": "Sugar & Spice Apartments",
            "location": "Split",
            "price": 75,
            "categorization": 3
        }
    ]

    const places = [
        {
            "title": "Treehouse",
            "location": "Hrusice",
            "subtitle": "Renting entire unit"
        },
        {
            "title": "Tiny House",  
            "location": "Hrusice",  
            "subtitle": "Renting entire unit",
        }
    ]

    const cities = [
        {  
            "name": "London",  
            "count": "5102"  
        }
    ]

    return (
        <div className="Main">
            {/* <Navigation></Navigation> */}
            <Header></Header>
            {/* <AccomodationCard
                title={accomodations[0].title}
                location={accomodations[0].location}
                price={accomodations[0].price}
                categorization={accomodations[0].categorization}
            />
            <PlaceCard
                title={places[0].title}
                location={places[0].location}
                subtitle={places[0].subtitle}
            /> */}
            <CityCard
                name={cities[0].name}
                count={cities[0].count}
            />
            <Footer></Footer>
        </div>
    );
}

export default Main;