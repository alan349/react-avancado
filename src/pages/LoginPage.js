import React, { useState, useContext } from 'react';
import { Button, Container, TextField, Typography, Box, Alert } from "@mui/material";

import { AuthContext } from '../context/authContext';

export default function LoginPage() {

    const [fields, setFields] = useState({ login: "", password: "" });
    const context = useContext(AuthContext);

    async function handleSubmit(event) {
        event.preventDefault();
        if (await context.login(fields.login, fields.password)) {
            alert("logged");
        }
    }

    function handleChange(event) {
        const fieldName = event.target.name;
        const value = event.target.value;
        setFields({ ...fields, [fieldName]: value })
    }

    return (
        <Container maxWidth="xs" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mt: 5, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                Projeto Final React Avançado
            </Typography>
            <Typography variant="h5" sx={{ mt: 5 }}>
                Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    label="E-mail"
                    variant="outlined"
                    name="login"
                    value={fields.login}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    margin="normal"
                    label="Senha"
                    variant="outlined"
                    name="password"
                    type="password"
                    value={fields.password}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Entrar
                </Button>
                <Alert sx={{ mt: 2, textAlign: "left" }} severity="info">
                    <b>E-mail:</b> eve.holt@reqres.in
                    <br />
                    <b>Senha:</b> cityslicka
                </Alert>
            </Box>
        </Container>
    )
}