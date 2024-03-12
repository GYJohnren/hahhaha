import '../assets/home.css';
import Header from '../components/header';
import ItemCard from '../components/itemCard';
import NavBar from '../components/navbar';
const Home = () => {
    return (
        <>
            <NavBar />

            <div id='food-container'>
                <Header />
                <div id='food-items' className='food-items'>
                    <div id='Menu'>
                        <p id='category-name'>Menu</p>
                        <ItemCard />
                    </div>
                </div>
            </div>
            <div id='cart'>
                <div className='taste-header'>
                    <div className='user'>
                        <i className='fa fa-user-circle' id='circle'>
                            Account
                        </i>
                    </div>
                </div>
                <div id='category-list'>
                    <p className='item-menu'>Best Seller</p>
                    <div className='border'></div>
                    <div className='list-card'>
                        <img src='Images/sinigang.jpg' alt='list' />
                        <a href='' className='list-name'>
                            Pork Sinigang
                        </a>
                    </div>
                    <div className='list-card'>
                        <img src='Images/kare-kare.jpeg' alt='list' />
                        <a href='' className='list-name'>
                            Kare-Kare
                        </a>
                    </div>
                    <div className='list-card'>
                        <img src='Images/kaldereta.jpg' alt='list' />
                        <a href='' className='list-name'>
                            Kaldereta
                        </a>
                    </div>
                    <div className='list-card'>
                        <img src='Images/sisig.jpg' alt='list' />
                        <a href='' className='list-name'>
                            Sisig
                        </a>
                    </div>
                    <div className='list-card'>
                        <img src='Images/kalabasa.jpg' alt='list' />
                        <a href='' className='list-name'>
                            kalabasa
                        </a>
                    </div>
                </div>
                <div id='checkout' className='cart-toggle'>
                    <p id='total-item'>Total Item : 4</p>
                    <p id='total-price'>Total Price : ₱ 200</p>
                    <button className='cart-btn'>Order</button>
                </div>
            </div>
        </>
    );
};

export default Home;
