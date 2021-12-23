import './App.css';
import Header from './components/Header/Header'
import {Route, Switch} from 'react-router-dom';
import DetailProductPage from "./pages/DetailProductPage";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Private from "./pages/Private";
import Footer from "./components/Footer/Footer";
import database from "./database/database";
import {createContext, useEffect, useState} from "react";
import reviewsDb from "./database/reviewsDb";
export const AppContext = createContext(null)



function App() {
const {tours} = database;



const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): []);

useEffect(() => {
     localStorage.setItem('cartItems', JSON.stringify(cartItems));
},[cartItems]);


const onAdd = (tour) => {
    const exist = cartItems.find(x => x.id === tour.id);
    if(exist) {
        setCartItems(cartItems.map(x => x.id === tour.id ?{...exist, qty: exist.qty + 1} : x
        )
        );
    } else {
        setCartItems([...cartItems, {...tour, qty: 1}]);
    }

};

const onRemove = (tour) => {
    const exist = cartItems.find((x) => x.id === tour.id);
    if(exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== tour.id));
    } else {
        setCartItems(cartItems.map((x) => x.id === tour.id ?{...exist, qty: exist.qty - 1} : x
            )
        );
    }

}

const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('isAuth')) {
            setIsAuth(true)
        }
    }, [])

    useEffect(() => {
        console.log('isAuth')
    }, [isAuth])

  return (

    <div className="App">
      <Header/>

        <main className="main">

         <Switch>
             <AppContext.Provider value={{isAuth, setIsAuth}}>
             <Route path="/Private" exact={true}>
                 <Private/>
             </Route>
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
                 <Cart
                     onAdd={onAdd}
                     onRemove={onRemove}
                     cartItems={cartItems}>
                 </Cart>
             </Route>
             <Route path="/" exact={true}>
                 <div className="row">
                     <Main
                         onAdd={onAdd}
                         tours={tours}>
                     </Main>
                 </div>
             </Route>
                 <Route path="/product/:tourId" exact={null}>
                     <DetailProductPage/>
                 </Route>
             </AppContext.Provider>
             </Switch>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
