
import './App.css';
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/homepage/shop/shop.component";
import {Route} from "react-router-dom";



function App() {
  return (
    <div>
        <Route exact={true} path="/" component={HomePage}/>
        <Route exact={true} path="/shop" component={ShopPage}/>
        <Route/>
    </div>
  );
}

export default App;
