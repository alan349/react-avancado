import React, { useContext } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Container, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

import { AuthContext } from '../context/authContext';

export default function Header() {

    const context = useContext(AuthContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleClickMenu2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleCloseMenu2 = () => {
        setAnchorEl2(null);
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
                            <Button id="veiculo-button"
                                aria-controls="veiculo-menu"
                                aria-haspopup="true"
                                aria-expanded={open2 ? 'true' : undefined}
                                onClick={handleClickMenu2}
                                color="inherit"
                            >
                                Veículos
                            </Button>
                            <Menu
                                id="veiculo-menu"
                                anchorEl={anchorEl2}
                                open={open2}
                                onClose={handleCloseMenu2}
                                MenuListProps={{
                                    'aria-labelledby': 'veiculo-button',
                                }}
                            >
                                <MenuItem component={Link} to="/veiculo/list">Listar</MenuItem>
                                <MenuItem component={Link} to="/veiculo/add">Cadastrar</MenuItem>
                            </Menu>
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
                                <MenuItem component={Link} to="/motorista/list">Listar</MenuItem>
                                <MenuItem component={Link} to="/motorista/add">Cadastrar</MenuItem>
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