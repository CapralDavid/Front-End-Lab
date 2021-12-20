import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id: 1, name: 'Хлеб', description: 'Хлеб черныйю', price: '8 uah' },
    {id: 2, name: 'Батон', description: 'Ну....Батон', price: '11 uah' },

];

const Products = () => {
    return(
    <main>
        <Grid container justify= "center" spacing={2}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}

        </Grid>
    </main>
    )

}



export default Products;