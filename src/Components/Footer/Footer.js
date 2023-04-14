import React from 'react';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { styled } from '@mui/system';
import Theme from '../../Theme';

const FooterBox = styled(Box)({
  backgroundColor: Theme.palette.primary.main,
  color: Theme.palette.common.white,
});

function Footer() {
  return (
    <FooterBox>
      <Grid container padding={3} justifyContent="space-between">
        <Grid item xs={12} md={4} lg={3}>
          <Stack padding={1} spacing={2} alignItems="flex-start">
            <Typography variant="h3">Services</Typography>
            <Link underline="hover" color="inherit">
              Chatbot
            </Link>
            <Link underline="hover" color="inherit">
              Image recognition
            </Link>
            <Link underline="hover" color="inherit">
              Speech recognition
            </Link>
            <Link underline="hover" color="inherit">
              Natural language generation
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Stack padding={1} spacing={2} alignItems="flex-start">
            <Typography variant="h3">Links</Typography>
            <Link underline="hover" color="inherit">
              About Agency
            </Link>
            <Link underline="hover" color="inherit">
              Contact
            </Link>
          </Stack>
        </Grid>
        <Grid padding={1} item xs={12} md={4} lg={2}>
          <Stack spacing={2} alignItems="flex-start">
            <Typography variant="h3">Follow</Typography>
            <Link
              underline="hover"
              color="inherit"
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Facebook fontSize="small" color="inherit" /> Facebook
            </Link>
            <Link
              underline="hover"
              color="inherit"
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Instagram fontSize="small" color="inherit" /> Instagram
            </Link>
            <Link
              underline="hover"
              color="inherit"
              display="flex"
              alignItems="center"
              gap={1}
            >
              <LinkedIn fontSize="small" color="inherit" /> LinkedIn
            </Link>
            <Link
              underline="hover"
              color="inherit"
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Twitter fontSize="small" color="inherit" /> Twitter
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </FooterBox>
  );
}

export default Footer;
