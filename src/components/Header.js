import React, { useContext } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Container, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

import { AuthContext } from '../context/authContext';

export default function Header() {

    const context = useContext(AuthContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    function handleClickLogout(event) {
        event.preventDefault();
        context.logout();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container component="div">
                    <Toolbar disableGutters >
                        <Typography variant="h6" component="div" sx={{ mr: 10 }}>
                            Projeto Final React Avançado
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <Button id="motorista-button"
                                aria-controls="motorista-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClickMenu}
                                color="inherit"
                            >
                                Motoristas
                            </Button>
                            <Menu
                                id="motorista-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleCloseMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'motorista-button',
                                }}
                            >
                                <MenuItem component={Link} to="/motoristaList">Listar</MenuItem>
                                <MenuItem component={Link} to="/motoristaAdd">Cadastrar</MenuItem>
                            </Menu>
                            <Button id="veiculo-button"
                                aria-controls="veiculo-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClickMenu}
                                color="inherit"
                            >
                                Veículos
                            </Button>
                            <Menu
                                id="veiculo-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleCloseMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'veiculo-button',
                                }}
                            >
                                <MenuItem component={Link} to="/veiculoList">Listar</MenuItem>
                                <MenuItem component={Link} to="/veiculoAdd">Cadastrar</MenuItem>
                            </Menu>
                        </Box>
                        <IconButton onClick={handleClickLogout} sx={{ color: "white" }}>
                            <LogoutIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}