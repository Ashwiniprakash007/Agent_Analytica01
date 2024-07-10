import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { setProducts } from '../Redux/action';
import axios from 'axios';
import { Typography, Button, Container, CardContent } from '@mui/material';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.productList.find((product) => product.id === parseInt(productId))
  );

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('/products.json');
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    if (!product) {
      getProducts();
    }
  }, [dispatch, product]);

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
       <CardContent>
      <Typography variant="h4" component="h1" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        ${product.price}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {product.description}
      </Typography>
      <Button component={Link} to="/" variant="contained" style={{ marginLeft: '1rem' }}>
        Back
      </Button>
      </CardContent>
    </Container>
  );
};

export default ProductDetail;
