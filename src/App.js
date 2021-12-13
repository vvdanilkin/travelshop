import './App.css';
import Header from './components/Header/Header'
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import Navbar from "./components/Navbar/Navbar";


function App() {

  return (
    <div className="App">
      <Header/>

        <main className="main">

         <Switch>
            <Route path="/About" exact={true}>
             <About/>
            </Route>
            <Route path="/Contacts" exact={true}>
              <Contacts/>
            </Route>
             <Route path="/Reviews" exact={true}>
                 <Reviews/>
             </Route>
             <Route path="/Login" exact={true}>
                 <Login/>
             </Route>
             <Route path="/Cart" exact={true}>
                 <Cart/>
             </Route>
             <Route path="/" exact={true}>
                 <Main/>
             </Route>
             </Switch>


        </main>
    </div>
  );
}

export default App;
