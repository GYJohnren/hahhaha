const ItemCard = () => {
    return (
        <div id='item-card'>
            <div id='card-top'>
                <i className='fa fa-star' id='rating'>
                    4.5
                </i>
                <i className='fa fa-heart-o add-to-cart'></i>
            </div>
            <img src='Images/kaldereta.jpg' alt='ulam to' />
            <p id='item-name'>Kaldereta</p>
            <p id='item-price'>₱75</p>
        </div>
    );
};

export default ItemCard;
