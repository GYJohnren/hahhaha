const NavBar = () => {
    return (
        <div id='menu'>
            <div className='brand-logo'>
                <img src='Images/mangan-removebg-preview.png' alt='logo' />
            </div>
            <div className='menu-item'>
                <a href='#'>Home</a>
                <a href='#'>Notification</a>
                <a href='#'>Your Orders</a>
                <a href='#'>Help</a>
            </div>
        </div>
    );
};

export default NavBar;
