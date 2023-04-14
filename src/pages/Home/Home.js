import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import Image from '../../Assests/Images/5757474.jpg';
import Hero from "../../Components/Hero/Hero";
import Products from "../../Components/ProductCard/ProductCard";
import Details from "../../Components/Details/Details";
import Hero2 from "../../Components/Hero/hero2";


const HomePage = () => {

  return (
    <Container maxWidth="lg">
            <Hero2/>
        <Hero/>
        <Details/>
        <Products/>
      <Grid padding={5} container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" >
            GPT
          </Typography>
          <Typography variant="body1" >
            We help businesses leverage the power of artificial intelligence to drive growth and innovation using chatGPT.
          </Typography>
          <Button variant="contained" color="primary">
            Get started!
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={Image} alt="AI Agency" style={{maxWidth:"100%"}} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
