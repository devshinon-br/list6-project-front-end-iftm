import React from 'react';

function Card({title, icon}) {
    return (
        <div className='card text-uppercase'>
            <h2>{title}</h2>
            <p>{icon}</p>
        </div>
    );
}

export default Card;
