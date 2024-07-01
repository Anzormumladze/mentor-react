import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Task Manager
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/tasks">
          View Tasks
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
