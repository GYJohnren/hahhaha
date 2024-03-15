import "../assets/orders.css";
import OrderList from "../components/orderList";
import { MdFoodBank, MdOutlineAttachMoney } from "react-icons/md";
const Orders = () => {
  return (
    <>
      <div className="orders">
        <div class="fade-in-container">
          <p class="item-menu">Order Management</p>
          <div class="border"></div>
        </div>
        <div className="totalll">
          <div className="total-orders">
            <h1 className="textT">Total Orders</h1>
            <h1 className="textTT">20</h1>
            <MdFoodBank className="food" />
          </div>
          <div className="total-income">
            <h1 className="textT">Total Income</h1>
            <h1 className="textTT">20</h1>
            <MdOutlineAttachMoney className="income" />
          </div>
        </div>
        <div class="fade-in-container">
          <p class="item-menu">Orders</p>
          <div class="border"></div>
        </div>
        <div className="ordershiz">
          <div className="your_orders-list">
            <div className="order-header">
              <h3>Item</h3>
              <h3>Name</h3>
              <h3>Quantity</h3>
              <h3>Price</h3>
            </div>
            <div className="sheesh">
              <OrderList />
              <OrderList />
              <OrderList />
              <OrderList />
              <OrderList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
