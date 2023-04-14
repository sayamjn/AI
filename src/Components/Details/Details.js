import React from 'react'
import { Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../Theme';

const StyledButton = styled(Button)({
  marginTop: '16px',
  marginRight: '8px',
  [theme.breakpoints.up('md')]: {
    marginRight: '16px',
  },
});

const Details = () => {
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Ai Gallery
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        paragraph
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        vitae aperiam! Excepturi repudiandae accusamus, aliquid distinctio
        autem consequuntur ipsam quisquam.
      </Typography>

      {/* Buttons */}
      <Grid container justifyContent="center">
        <Grid item>
          <StyledButton variant="contained" color="primary">
            See more innovations
          </StyledButton>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Contact
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Details