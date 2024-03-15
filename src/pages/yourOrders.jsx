import React, { useState } from "react";
import "../assets/yourOrders.css";
import OrderList from "../components/orderList";

const YourOrders = () => {
  const [isFloatingWindowOpen, setFloatingWindowOpen] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingfee, setShippingFee] = useState(0);
  const [isTrackOrderWindowOpen, setTrackOrderWindowOpen] = useState(false);

  const kareKarePrice = 100;

  const handleProceed = () => {
    setTrackOrderWindowOpen(true);
  };
  const handleTrackOrder = () => {};

  const handleFloatingWindowButtonClick = () => {
    setFloatingWindowOpen(!isFloatingWindowOpen);
  };

  const handleCloseFloatingWindow = () => {
    setFloatingWindowOpen(false);
  };

  const handleStandardDeliveryClick = () => {
    setShippingFee(50);
  };

  const handleExpressDeliveryClick = () => {
    setShippingFee(60);
  };

  const handlePickDeliveryClick = () => {
    setShippingFee(70);
  };

  // Calculate the subtotal based on price and quantity
  const calculateSubtotal = (price, quantity) => {
    const total = price * quantity;
    setSubtotal(total);
  };

  return (
    <>
      <div className="asd">
      <div class="fade-in-container">
          <p class="item-menu">Your Orders</p>
          <div class="border"></div>
          </div>
        </div>
      <div className="asd">
      
        </div>
      <div className="your_orders-container">
        <div className="your_orders-list-container-two">
          <div className="your_orders-list">
            <div className="your_orders-list-header">
              <h3>Item</h3>
              <h3>Name</h3>
              <h3>Quantity</h3>
              <h3>Price</h3>
            </div>

            <OrderList
              price={kareKarePrice}
              quantity={5}
              calculateSubtotal={calculateSubtotal}
            />
            <OrderList
              price={kareKarePrice}
              quantity={5}
              calculateSubtotal={calculateSubtotal}
            />
            <OrderList
              price={kareKarePrice}
              quantity={5}
              calculateSubtotal={calculateSubtotal}
            />
            <OrderList
              price={kareKarePrice}
              quantity={5}
              calculateSubtotal={calculateSubtotal}
            />
            <OrderList
              price={kareKarePrice}
              quantity={3}
              calculateSubtotal={calculateSubtotal}
            />

            <button
              className="buttonsheez"
              onClick={handleFloatingWindowButtonClick}
            >
              Total
            </button>
          </div>
        </div>
        
        <div className="your_orders-list-container">
        <div class="fade-in-container">
          <p class="item-menu">Shipping Information</p>
        
          </div>
          <div className="your_orders-list">
            
            
            <div className="deliveries">
              <div className="standard" onClick={handleStandardDeliveryClick}>
                <div className="left">
                  <h4 className="stan">Standard Delivery</h4>
                  <h5 className="stan">Estimated Delivery</h5>
                </div>
                <div className="right">
                  <p className="es">P50</p>

                  <p className="es">5hrs</p>
                </div>
              </div>
              <div className="express" onClick={handleExpressDeliveryClick}>
                <div className="left">
                  <h4 className="stan">Express Delivery</h4>
                  <h5 className="stan">Estimated Delivery</h5>
                </div>
                <div className="right">
                  <p className="es">P60</p>
                  <p className="es">5hrs</p>
                </div>
              </div>
              <div className="pick" onClick={handlePickDeliveryClick}>
                <div className="left">
                  <h4 className="stan">Store Pick Up</h4>
                  <h5 className="stan">Estimated Delivery</h5>
                </div>
                <div className="right">
                  <p className="es">P40</p>

                  <p className="es">5hrs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFloatingWindowOpen && (
        <div className="floating-www">
          <div className="bag">
            {/* <button className="close-b" onClick={handleCloseFloatingWindow}>
              Close
            </button> */}
            {/* <h1 className="paper">Total</h1> */}
            <div className="toto">
              <div className="tata">
                <h2 className="tutu">Subtotal</h2>
                <h2 className="tutu">Shipping fee</h2>
              </div>
              <div className="tota">
                <p className="sub">{subtotal}</p>
                <p className="shipping">{shippingfee}</p>
              </div>
            </div>
            <h1 className="eyyy">Total</h1>
            <div className="actions">
              <button className="proceed" onClick={handleProceed}>
                Proceed to Checkout
              </button>
              <button className="cancel" onClick={handleCloseFloatingWindow}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {isTrackOrderWindowOpen && (
        <div className="void">
          <div class="fade-in-container">
            <p class="item-menu">Track Your Order</p>
            <div class="border"></div>
          </div>

          <div className="track-order-window">

            
          </div>
        </div>
      )}
    </>
  );
};

export default YourOrders;
