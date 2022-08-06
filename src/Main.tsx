import React from 'react';
import Navigation from "./components/Navigation";
import AccomodationCard from "./components/AccomodationCard";
import AccomodationDetails from "./components/AccomodationDetails";
import PlaceCard from './components/PlaceCard';
import Header from './components/Header';
import Footer from './components/Footer';
import CityCard from './components/CityCard';
import AccomodationSearch from './components/AccomodationSearch';
import SimpleSearch from './components/SimpleSearch';
import AdvancedSearch from './components/AdvancedSearch';
import ReservationForm from './components/ReservationForm';
import ReservationCard from './components/ReservationCard';

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

    const accomodationsDetails = [
        {  
            "title": "Poseidon Hotel Suites",  
            "subtitle": "Stay in the heart of Mýkonos City",  
            "description": "This property is 3 minutes walk from the beach. Overlooking Mykonos Windmills, the Poseidon Hotel Suites is only 50 m from Megali Ammos Beach. The 3-star hotel offers a freshwater pool, and bright rooms with air conditioning and fan. Each of the Cycladic rooms opens to a private balcony with across to Mykonos Town, the sea and Delos. A fridge, satellite TV and safe are standard. Free two-way transfer from the airport or port is offered. Poseidon provides free Wi-Fi in public areas, and on-site parking is also free. Guests can hire Poseidon’s motor yacht and discover the magnificent beaches of Mykonos. At the breakfast room and its cool patio, guests can taste homemade local delicacies, fresh fruit and good quality coffee. The Alley Bay serves exclusive cocktails, a few steps from the Poseidon. The Poseidon is just 200 m from the famous Mykonos Windmills. Right next to the hotel, guests will find small sandy coves and a pathway that leads to the picturesque chapel of Agios Charalambis. This is our guests' favourite part of Mýkonos City, according to independent reviews. Couples particularly like the location — they rated it 9.6 for a two-person trip.",  
            "type": "Room",
            "categorization": 5,
            "personCount": 2,  
            "imageUrl": "",  
            "freeCancelation": true,  
            "price": 500,  
            "location": "Mýkonos City",  
            "postalCode": "846 00"  
        }
    ]

    return (
        <div className="Main">
            <Navigation />
            <Header />
            <AccomodationSearch />
            <SimpleSearch />
            <AdvancedSearch />
            <ReservationForm />
            <ReservationCard
                title={accomodationsDetails[0].title}
                categorization={accomodationsDetails[0].categorization}
                type={accomodationsDetails[0].type}
                price={accomodationsDetails[0].price}
                location={accomodationsDetails[0].location}
                postalCode={accomodationsDetails[0].postalCode}
            />
            <AccomodationCard
                title={accomodations[0].title}
                location={accomodations[0].location}
                price={accomodations[0].price}
                categorization={accomodations[0].categorization}
            />
            <PlaceCard
                title={places[0].title}
                location={places[0].location}
                subtitle={places[0].subtitle}
            />
            <CityCard
                name={cities[0].name}
                count={cities[0].count}
            />
            <AccomodationDetails
                title={accomodationsDetails[0].title}
                subtitle={accomodationsDetails[0].subtitle}
                description={accomodationsDetails[0].description}
                type={accomodationsDetails[0].type}
                categorization={accomodationsDetails[0].categorization}
                personCount={accomodationsDetails[0].personCount}
                imageUrl={accomodationsDetails[0].imageUrl}
                freeCancelation={accomodationsDetails[0].freeCancelation}
                price={accomodationsDetails[0].price}
                location={accomodationsDetails[0].location}
                postalCode={accomodationsDetails[0].postalCode}
            />
            <Footer />
        </div>
    );
}

export default Main;