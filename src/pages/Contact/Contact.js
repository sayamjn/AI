import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '5rem', textAlign: 'center' }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
        Please fill out the form below to get in touch with us:
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          margin="normal"
          id="name"
          label="Name"
          variant="outlined"
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          sx={{ marginBottom: '2rem' }}
        />
        <Button variant="contained" type="submit">
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactPage;
