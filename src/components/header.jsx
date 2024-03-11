const Header = () => {
    return (
        <div id='header'>
            <div className='search'>
                <input type='text' placeholder='What are you craving for today?' />
                <button className='search-btn'>Search</button>
            </div>
            <div className='util'>
                <i className='fa fa-tags'>Offers</i>
                <i className='fa fa-cart-plus' id='cart-plus'>
                    0 Items
                </i>
            </div>
        </div>
    );
};

export default Header;
