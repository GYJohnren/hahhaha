import { Link } from "react-router-dom";
import LOGO from "../assets/Images/mangan-removebg-preview.png"
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
                <Link to='/account'>Account</Link>
            </div>
        </div>
    );
};

export default NavBar;
