
import './App.css';
import HomePage from "./pages/homepage/homepage";
import {Route} from "react-router-dom";


const HatsPage = () =>(
  <div>
    <h1>hats page</h1>
  </div>
)



const homepage = (props) =>{
  console.log(props);
  return(
  <div>
    <h1>homepage</h1>
  </div>

  );
}



function App() {
  return (
    <div>
        <Route exact={true} path="/homepage" component={homepage}/>
        <Route exact={true} path="/" component={HomePage}/>
        <Route exact={true} path="/hats" component={HatsPage}/>
    </div>
  );
}

export default App;
