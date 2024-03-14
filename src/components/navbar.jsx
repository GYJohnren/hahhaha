import { Link } from 'react-router-dom';
import LOGO from '../assets/Images/mangan-removebg-preview.png';
import { cookies } from '../services/auth';
const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className='brand-logo'>
                <img src={LOGO} alt='logo' />
            </div>
            <div className='menu-item'>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/your+orders'>Your Orders</Link>
                {true && (
                    <>
                        <Link to='/add+food'>Add foods</Link>
                        <Link to='/orders'>Orders</Link>
                    </>
                )}
                <Link to='/account'>Log out</Link>
            </div>
        </div>
    );
};

export default NavBar;
