import "../assets/cart.css";
import CartList from "../components/cartList";
import { FaCartPlus } from "react-icons/fa";
const Cart = () => {
    return (
        <>

        <div className="asdfg">
        <div class="fade-in-container">
        <p class='item-menu'>Best Seller</p>
        <div class='border'></div>
    </div>
            <div className="cart-container">
                
                <div className="cart-list-container">
                    
                    <div className="cart-list">
                        <div className="cart-list-header">
                            <h3>Item</h3>
                            <h3>Name</h3>
                            <h3>Quantity</h3>
                            <h3>Price</h3>
                        </div>
                        <CartList />
                        <CartList />
                        <CartList />
                        <CartList />
                        <CartList />
                        <CartList />
                        <CartList />
                        <CartList />
                    </div>
                </div>
                <div className="cart-summary">
                    <h3>Total Item: 4</h3>
                    <h3>Total Price: $40</h3>
                    <button><FaCartPlus  className='carti'/>Order</button>
                </div>
            </div>
            </div>
        </>
    );
};

export default Cart;
