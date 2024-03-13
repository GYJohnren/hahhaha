import "../assets/home.css";
import Header from "../components/header";
import ItemCard from "../components/itemCard";
import ItemList from "../components/itemList";
import NavBar from "../components/navbar";
const Home = () => {
  return (
    <>
    <div className="home-container">

      <div id="food-items" className="food-items">
        <div className="menu-container">
          <p id="category-name">Menu</p>
          <ItemCard />
        </div>
      </div>
      <div id="cart">
        <div id="category-list">
          <p className="item-menu">Best Seller</p>
          <div className="border"></div>
         
          <ItemList />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
