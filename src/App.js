
import './App.css';
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/homepage/shop/shop.component";
import {Route} from "react-router-dom";
import Header from "./components/menu-item/header/header.jsx";




function App() {
  return (
    
    <div>
      <Header/>
      <switch>
        <Route exact={true} path="/" component={HomePage}/>
        <Route exact={true} path="/shop" component={ShopPage}/>
      </switch>
    </div>
  );
}

export default App;
