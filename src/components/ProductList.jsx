// src/components/ProductList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProducts } from '../Redux/action';
import { Grid, Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import axios from 'axios'; // Import Axios for API requests

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productList);

  useEffect(() => {
    // Fetch products initially from products.json or an API endpoint
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Simulate fetching products from an API or use local JSON file
      // Replace with actual API endpoint if available
      const response = await axios.get('/products.json');
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Product List
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  ${product.price}
                </Typography>
                <Typography variant="body2" component="p">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={`/product/${product.id}`}
                  size="small"
                  color="primary"
                >
                  View Details
                </Button>
                <Button
                  component={Link}
                  to={`/edit/${product.id}`}
                  size="small"
                  color="primary"
                >
                  Edit Product
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button component={Link} to="/create" variant="contained" color="primary" style={{ marginTop: '2rem' }}>
        Create Product
      </Button>
    </div>
  );
};

export default ProductList;
