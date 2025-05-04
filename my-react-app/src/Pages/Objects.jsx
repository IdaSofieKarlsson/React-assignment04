//även detta är en testsida som lärarna kan ignorera... 
//för att uppdatera object med flere värden year (och inte bara ersätta 2009 med 2025) så använd spread operator "...car"

import { useState } from "react";

function Objects() {
    const [car, setCar] = useState({year: 2009, brand: "Saab", model: "9-5"});
    
    function handleYearChange(event) {
        setCar( (c) => ({...c, year: event.target.value}));
    };
    function handleBrandChange(event) {
        setCar( (c) => ({...c, brand: event.target.value}));
    };
    function handleModelChange(event) {
        setCar( (c) => ({...c, model: event.target.value}));
    };

    return <div>
            <p>My favorite car is a {car.year} {car.brand} {car.model}.</p>
        
            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.brand} onChange={handleBrandChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br />
        
        </div>;
};

export default Objects;