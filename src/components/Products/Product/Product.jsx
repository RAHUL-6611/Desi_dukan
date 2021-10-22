import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'
// import {Typography, IconButton} from '@material-ui/core'
import useStyles from './styels'
import { AddShoppingCart } from '@material-ui/icons'

const Product = ({product,onAddToCart}) => {
    const classes = useStyles()
    const handleAddToCart = () => onAddToCart(product.id, 1)

    return (
        // just a div
        <Card className={classes.root}>
            {/* image */}
            <CardMedia className={classes.media} image={product.image.url} title={product.name}/> 
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                         {product.name} </Typography>    
                    <Typography gutterBottom variant="h5" component="h2">
                         {product.price.formatted}</Typography>    
                </div>
                {/* understand this thing */}
                <Typography dangerouslySetInnerHTML={{ __html : product.description }} variant="body2" color="textSecondary" component="p" />    
            </CardContent>           
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart"
                 onClick={handleAddToCart} 
                 >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
