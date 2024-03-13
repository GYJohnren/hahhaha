export default function OrderList() {
    return (
        <div className="your_orders-list-item">
            <div className="order-image-container">
                <img
                    className="order-image"
                    src="https://netstorage-kami.akamaized.net/images/3313e069ce4209e6.jpg?imwidth=900"
                />
            </div>
            <h3 className="order-name">Kare-Kare</h3>
            <span className="order-quantity">
                x5
            </span>
            <span className="order-price">$50</span>
        </div>
    );
}
