import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';


const products = [
    {id: 1, name: 'Хлеб', description: 'Хлеб черныйю', price: '8 uah', image: 'https://w7.pngwing.com/pngs/968/337/png-transparent-graphy-pain-white-bread-bread-baked-goods-food-photography.png' },
    {id: 2, name: 'Батон', description: 'Ну....Батон', price: '11 uah', image: 'https://avatanplus.com/files/photos/mid/5c9113659fc2716996b3c516.png' },

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
    );

}



export default Products;