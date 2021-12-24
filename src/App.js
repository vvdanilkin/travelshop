import {useEffect, useState} from "react";
import './App.css';
import Header from './components/Header/Header'
import {Route, Switch} from 'react-router-dom';
import DetailProductPage from "./pages/DetailProductPage";
import Contacts from "./pages/Contacts";
import About from "./pages/About/About";
import Reviews from "./pages/Reviews/Reviews";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Private from "./pages/Private/Private";
import Footer from "./components/Footer/Footer";
import {AppContext} from './contexts/AppContext'
import reviewsDb from "./database/reviewsDb";
import {toursBase} from "./database/tours";


function App() {
    const tours = toursBase
    const [isAuth, setIsAuth] = useState(false)
    const [reviews, setReviews] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        if (localStorage.getItem('cartItems')) {
            const res = JSON.parse(localStorage.getItem('cartItems'))
            setCartItems(res)
        } else {
            localStorage.setItem('cartItems', JSON.stringify([]))
        }

        if (localStorage.getItem('isAuth')) {
            setIsAuth(true)
        }

        const response = reviewsDb
        setReviews(response)

    }, [])

    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    },[cartItems])

    const onAdd = (cartItem) => {
        const exist = cartItems.find(x => x.id === cartItem.id);
        if (exist) {
            return setCartItems(cartItems.map(x => x.id === cartItem.id ? {...exist, qty: exist.qty + 1} : x
                )
            );
        } else {
            return setCartItems([...cartItems, {...cartItem, qty: 1}]);
        }

    };

    const onRemove = (cartItem) => {
        const exist = cartItems.find((x) => x.id === cartItem.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== cartItem.id));
        } else {
            setCartItems(cartItems.map((x) => x.id === cartItem.id ? {...exist, qty: exist.qty - 1} : x
                )
            );
        }

    }

    return (
        <AppContext.Provider value={{isAuth, setIsAuth, reviews, setReviews, cartItems,setCartItems, tours, onAdd, onRemove}}>
            <div className="App">
                <Header/>

                <main className="main">

                    <Switch>

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
                            <Cart/>
                        </Route>
                        <Route path="/" exact={true}>
                            <div className="row">
                                <Main/>
                            </div>
                        </Route>
                        <Route path="/product/:tourId" exact={null}>
                            <DetailProductPage/>
                        </Route>

                    </Switch>
                </main>
                <Footer/>
            </div>
        </AppContext.Provider>
    );
}

export default App;
