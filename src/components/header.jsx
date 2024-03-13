const Header = () => {
    return (
        <div id='header'>
            <div className='search'>
                <input type='text' placeholder='What are you craving for today?' />
                <button className='search-btn'>Search</button>
            </div>
           
        </div>
    );
};

export default Header;
