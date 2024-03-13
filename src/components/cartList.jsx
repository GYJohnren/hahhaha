export default function CartList() {
    return (
        <div className="cart-list-item">
            <div className="item-image-container">
                <img
                    className="item-image"
                    src="https://netstorage-kami.akamaized.net/images/3313e069ce4209e6.jpg?imwidth=900"
                />
            </div>
            <h3 className="item-name">Kare-Kare</h3>
            <span className="item-quantity">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <g clip-path="url(#clip0_429_10969)">
                        <circle
                            cx="12"
                            cy="11.999"
                            r="9"
                            stroke="#ffffff"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9 12H15"
                            stroke="#ffffff"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_429_10969">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                5
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <g clip-path="url(#clip0_429_10970)">
                        <circle
                            cx="12"
                            cy="11.999"
                            r="9"
                            stroke="#ffffff"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12 9V15"
                            stroke="#ffffff"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9 12H15"
                            stroke="#ffffff"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_429_10970">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>
            <span className="item-price">$50</span>
        </div>
    );
}
