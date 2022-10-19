import React from 'react';

const Card = ({name, gender}) => {
    return (
        <div className='w-16 h-16 bg-[#fff] flex flex-col'>
            <h1>{name}</h1>
            <h1>{gender}</h1>
            
        </div>
    );
}

export default Card;
