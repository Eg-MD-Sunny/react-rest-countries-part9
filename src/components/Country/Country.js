import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,population,region,area,flags} = props.country
    return (
        <div className='country bg-dark bg-gradient bg-opacity-10'>
           <h2>Name: {name.common}</h2>
           <img src={flags.png} alt=""></img>
           <p>Area: {area}</p>
           <p><small>Region: {region}</small></p>
           <p>Population: {population}</p>   
        </div>
    );
};

export default Country;