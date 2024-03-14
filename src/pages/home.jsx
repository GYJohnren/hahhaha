import '../assets/home.css';
import ItemCard from '../components/itemCard';
import ItemList from '../components/itemList';
const Home = () => {
    return (
        <>
            <div className='home-container'>
                <div id='food-items' className='food-items'>
                    <div className='menu-container'>
                        <p id='category-name'>Menu</p>
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>
                </div>
                <div id='cart'>
                    <div id='category-list'>
                        <p className='item-menu'>Best Seller</p>
                        <div className='border'></div>

                        <ItemList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
