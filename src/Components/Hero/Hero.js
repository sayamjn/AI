import { Box, Button, Grid, Typography } from '@mui/material';
import hero from '../../Assests/Images/3874157.jpg';

function Hero() {
  return (
    <Box
      height="auto"
      width="auto"
      sx={{
        padding: { xs: '20px 0', md: '50px 0' },
        margin: '8px',
        backgroundColor: '#fff',
      }}
    >
      <Grid container direction={{ xs: 'column', md: 'row' }} spacing={{ xs: '2', md: '4' }}>
        <Grid item xs={12} md={8}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            justifyItems="center"
            alignItems={{ xs: 'center', md: 'flex-start' }}
          >
            <Typography variant="h2" sx={{ color: '#1A1A1A', mb: 2, fontWeight: 'bold' }}>
              The Future is Here
            </Typography>
            <Typography variant="body1" sx={{ color: '#1A1A1A', mb: 4 }}>
              Join the world of Artificial Intelligence and Machine Learning with our cutting-edge platform. We offer advanced education, training, and mentorship from industry experts and university professors, all at your fingertips.
            </Typography>
            <Button sx={{ backgroundColor: '#08AEEA', color: '#fff', fontWeight: 'bold', '&:hover': { backgroundColor: '#06a0d2' } }}>Join Now</Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          alignContent="center"
          justifyContent={{ xs: 'center', md: 'flex-end' }}
        >
          <Box>
            <img
              src={hero}
              alt="Banner pic"
              height="auto"
              width="100%"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
