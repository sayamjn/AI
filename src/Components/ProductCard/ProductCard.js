import React from 'react';
import { Grid, Typography, Card, CardHeader, CardContent, CardActions, Button } from '@mui/material';

const Products = () => {
  const products = [
    {
      name: 'AI Tool 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '$99.99'
    },
    {
      name: 'AI Tool 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '$149.99'
    },
    {
      name: 'AI Tool 3',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      price: '$199.99'
    }
  ];

  return (
    <Grid container padding={5} spacing={3}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.name}>
          <Card>
            <CardHeader title={product.name} />
            <CardContent>
              <Typography variant='body2' color='text.secondary' component='p'>
                {product.description}
              </Typography>
              <Typography variant='h6' color='text.primary' component='p'>
                {product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' variant='contained' color='primary'>
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
