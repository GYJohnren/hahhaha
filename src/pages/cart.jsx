import "../assets/cart.css";
import CartList from "../components/cartList";
const Cart = () => {
    return (
        <>
            <div className="cart-container">
                <div className="cart-list-container">
                    <h1>Cart Items</h1>
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
                    <button>Order</button>
                </div>
            </div>
        </>
    );
};

export default Cart;
