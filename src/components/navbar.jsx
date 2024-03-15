import { Link, useLocation } from 'react-router-dom';
import LOGO from '../assets/Images/mangan-removebg-preview.png';
import { cookies } from '../services/auth';

const NavBar = () => {
    const location = useLocation();

    return (
        <div className='navbar-container'>
            <div className='brand-logo'>
                <img src={LOGO} alt='logo' />
            </div>
            <div className='menu-item'>
                <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to='/cart' className={location.pathname === '/cart' ? 'active' : ''}>Cart</Link>
                <Link to='/your+orders' className={location.pathname === '/your+orders' ? 'active' : ''}>Your Orders</Link>
                {true && (
                    <>
                        
                        <Link to='/orders' className={location.pathname === '/orders' ? 'active' : ''}>Orders</Link>
                    </>
                )}
                <Link to='/account' className={location.pathname === '/account' ? 'active' : ''}>Log out</Link>
            </div>
        </div>
    );
};

export default NavBar;
