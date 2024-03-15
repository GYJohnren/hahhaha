import React from 'react';

const ItemCard = ({ type, onClick }) => {
    return (
        <div className='item-card' onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className='card-top'>
                <i className='fa fa-star' id='rating'>
                    4.5
                </i>
            </div>
            <img src='https://netstorage-kami.akamaized.net/images/3313e069ce4209e6.jpg?imwidth=900' alt='ulam to' />
            <div className='ppp'>
            <p className='item-name'>Kaldereta</p>
            <p className='item-price'>₱75</p>
            </div>
        </div>
    );
};

export default ItemCard;
