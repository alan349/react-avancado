import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

import { AuthContext } from '../context/authContext';

export default function MovieHeader() {

  const context = useContext(AuthContext);

  function handleClickLogout(event) {
    context.logout();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container component="div">
          <Toolbar disableGutters >
            <Typography variant="h6" component="div" sx={{ mr: 10 }}>
              Movies
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Button component={Link} to="/listMovie" color="inherit">Listar</Button>
              <Button component={Link} to="/movieCreate" color="inherit">Cadastrar</Button>
              <Button component={Link} to="/movieUpdate" color="inherit">Atualizar</Button>
            </Box>
            <Typography variant="h6">
              Olá {context.user.name}!
            </Typography>
            <IconButton onClick={handleClickLogout} sx={{ color: "white" }}>
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}