import '../assets/yourOrders.css';
import OrderList from '../components/orderList';
const AddFood = () => {
    return (
        <>
            <div className='your_orders-container'>
                <div className='your_orders-list-container'>
                    <h1>Your order</h1>
                    <div className='your_orders-list'>
                        <div className='your_orders-list-header'>
                            <h3>Item</h3>
                            <h3>Name</h3>
                            <h3>Quantity</h3>
                            <h3>Price</h3>
                        </div>
                        <OrderList />
                        <OrderList />
                        <OrderList />
                        <OrderList />
                        <OrderList />
                        <OrderList />
                        <OrderList />
                        <OrderList />
                    </div>
                </div>
                <div className='your_orders-summary'>
                    <h3>Total Item: 4</h3>
                    <h3>Total Price: $40</h3>
                    <button disabled>Serving...</button>
                </div>
            </div>
        </>
    );
};

export default AddFood;
