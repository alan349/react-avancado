import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

export default function MovieHeader() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container component="div">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              Movies
            </Typography>
            <Button component={Link} to="/listMovie" color="inherit">Listar</Button>
            <Button component={Link} to="/movieCreate" color="inherit">Cadastrar</Button>
            <Button component={Link} to="/movieUpdate" color="inherit">Atualizar</Button>
            <Button component={Link} to="/logout" color="inherit">Logout</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}