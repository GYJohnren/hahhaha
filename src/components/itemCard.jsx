const ItemCard = () => {
    return (
        <div className='item-card'>
            <div className='card-top'>
                <i className='fa fa-star' id='rating'>
                    4.5
                </i>
            </div>
            <img src='https://netstorage-kami.akamaized.net/images/3313e069ce4209e6.jpg?imwidth=900' alt='ulam to' />
            <p className='item-name'>Kaldereta</p>
            <p className='item-price'>₱75</p>
        </div>
    );
};

export default ItemCard;
