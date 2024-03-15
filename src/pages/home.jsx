import React, { useState } from 'react';
import '../assets/home.css';
import ItemCard from '../components/itemCard';
import ItemList from '../components/itemList';
import { FaCartPlus, FaPlusCircle, FaMinusCircle   } from "react-icons/fa";

const Home = () => {
    const [isFloatingWindowVisible, setFloatingWindowVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [isMaxQuantityReached, setIsMaxQuantityReached] = useState(false);

    const toggleFloatingWindow = () => {
        setFloatingWindowVisible(!isFloatingWindowVisible);
    };

    const handleCancel = () => {
        setFloatingWindowVisible(false); 
    };

    const handleAddItem = () => {
        
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setIsMaxQuantityReached(false); 
        }
    };

    const increaseQuantity = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        } else {
            setIsMaxQuantityReached(true); 
        }
    };

    return (
        <>
            <div className='home-container'>
                <div id='food-items' className='food-items'>
                    <div className='menu-container'>
                        {/* Simulating ItemCard click */}
                        <ItemCard type='button' onClick={toggleFloatingWindow} />
                        <ItemCard type='button' onClick={toggleFloatingWindow} />
                        <ItemCard type='button' onClick={toggleFloatingWindow} />
                        <ItemCard type='button' onClick={toggleFloatingWindow} />
                        <ItemCard type='button' onClick={toggleFloatingWindow} />
                        <ItemCard type='button' onClick={toggleFloatingWindow} />
                        <ItemCard type='button' onClick={toggleFloatingWindow} />
                        <ItemCard type='button' onClick={toggleFloatingWindow} />
                    </div>
                </div>
                <div id='category-list'>
    <div class="fade-in-container">
        <p class='item-menu'>Best Seller</p>
        <div class='border'></div>
    </div>
    <div class="fade-in-container">
        <ItemList />
    </div>
</div>

            </div>
            {isFloatingWindowVisible && (
                <div className="floating-window">
                    <div className='fw-content'>
                        <div className="itemhaha">
                            <ItemCard />
                        </div>
                        <div className="quando">
                            <p className='quandos'>Quantity</p>
                            <div className="arrowsheez">
                                <button className='lefto' onClick={decreaseQuantity}>{<FaPlusCircle />}</button>
                                <input className='intsek' type="text" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 0)} />
                                <button className='righto' onClick={increaseQuantity}>{<FaMinusCircle />}</button>
                            </div>
                        </div>
                        {isMaxQuantityReached && <p className='pp'>Maximum quantity is reached.</p>}
                        <button className="add-i" onClick={handleAddItem}>
                        <FaCartPlus  className='carti'/>
                        </button>
                        <button className="cancel-b" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
