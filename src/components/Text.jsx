import React from 'react';

function Text({title, subtitle}) {
    return (
        <>
            <p className='title'>{title}</p>
            <p className='subtitle'>{subtitle}</p>
        </>
    );
}

export default Text;
