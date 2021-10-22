import React from 'react'
// import Grid from '@material-ui/core/Grid'
import Grid from '@mui/material/Grid';
import Product from './Product/Product'
import useStyles from './styles'

const Products = ({products, onAddToCart}) => {
    const classes = useStyles()
    // console.log(products)
    if (!products.length) return <p>Loading...</p>

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => {
                return(
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                         <Product product={product} onAddToCart={onAddToCart}/> 
                     </Grid>
                    )
                })}
            </Grid>            
        </main>
            )
}

export default Products
