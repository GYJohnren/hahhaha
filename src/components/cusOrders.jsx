
export default function cusOrders({ price, quantity }) {
    return (
      <div className="your_orders-list-item">
        <div className="order-image-container">
          <img
            className="order-image"
            src="https://netstorage-kami.akamaized.net/images/3313e069ce4209e6.jpg?imwidth=900"
            alt="Kare-Kare"
          />
        </div>
        <h3 className="order-name">Kare-Kare</h3>
        <span className="order-quantity">x{quantity}</span>
        <span className="order-price">{price}</span>
      </div>
    );
  }
  