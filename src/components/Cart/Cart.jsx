import React from 'react'
import { Container, Typography, Button, Grid} from '@mui/material';
import { Link } from 'react-router-dom'

import CartItem from './CartItem/CartItem'
import useStyles from './styles'

const Cart = ({cart, onUpdateCartQty, onEmptyCart, onRemoveFromCart}) => {
    
    const classes = useStyles()

    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (

        <Typography variant="subtitle">Oops! You have any items in the Cart.
            <Link className={classes.link} to="/">Try adding some items!</Link>
        </Typography>
    )

    if (!cart.line_items) return 'Loading';

    const renderCart = () => (
    <>
    <Grid container spacing={3}>
        {cart.line_items.map((lineItem)=>{
            return (
                <Grid item xs={12} sm={4} key={lineItem.id}>
                    <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                </Grid>
            )
        })}
    </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button"
                 variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                <Button className={classes.checkoutButton} size="large" type="button" variant="contained"
                 color="primary" component={Link} to="/checkout">Checkout</Button>
            </div>
        </div>
    </>    
    )


    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} gutterBottom variant="h3">Your Shopping Cart</Typography>
            {!cart.line_items.length ? renderEmptyCart() : renderCart()}
        </Container>
    )
}

export default Cart;
