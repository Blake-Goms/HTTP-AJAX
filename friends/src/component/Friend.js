import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function({name, age, email}) {
    return(
        <div className='card-container'>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <h2>{age}</h2>
            </div>
            <div>
                <h2>{email}</h2>
            </div>
        </div> 
    )
}
