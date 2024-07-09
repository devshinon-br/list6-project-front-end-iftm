import React from 'react';
import Text from './Text';
import Card from './Card';

function Container({ title, subtitle, cards }) {
    return (
        <div className='container'>
            <div className='container-text'>
                <Text
                    title={title}
                    subtitle={subtitle}>
                </Text>
            </div>
            <div className='container-items'>
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} icon={card.icon} />
                ))}
            </div>
        </div>
    );
}

export default Container;
