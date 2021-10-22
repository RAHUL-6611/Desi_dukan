import React, {useState, useEffect} from 'react'
import {Navbar, Products, Cart, Checkout} from './components'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import { CssBaseline } from '@material-ui/core'
import CssBaseline from '@mui/material/CssBaseline';
import {commerce} from './lib/commerce'

const App = () => {
    console.log(commerce)
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [mobileOpen, setMobileOpen] = useState(false)

    const fetchProducts = async () =>{
        const { data } = await commerce.products.list()

        setProducts(data)
    }

    const fetchCart = async () =>{
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity)

        setCart(item.cart);
    }

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, {quantity})
        
        setCart(response.cart)
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId)
    
        setCart(response.cart);
    }

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
    
        setCart(response.cart);
    }

    useEffect(() =>{
        fetchProducts();
        fetchCart();
    }, [])

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
    // console.log(products)

    return (
        <Router>
             <div style={{display: 'flex'}}>
             <CssBaseline/>
            <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle}/>
        <Switch>
            <Route exact path="/">
                <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty/>
            </Route>
            <Route exact path="/cart">
                <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onEmptyCart={handleEmptyCart} onRemoveFromCart={handleRemoveFromCart}/>
            </Route>
            <Route exact path="/checkout">
                <Checkout cart={cart}/>
            </Route>
        </Switch>
    </div>
        </Router>
    )
}

export default App
