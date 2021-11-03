import React, { useEffect, useState } from 'react';
import { Button, Container, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import { authenticate } from '../services/movieApi';
import { isAuthenticated, login } from '../services/auth';
import { useHistory } from 'react-router';

export default function LoginPage() {

  const [fields, setFields] = useState({ login: "", password: "" });
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated()) {
      history.push("/");
    }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await authenticate(fields.login, fields.password);
    if (response.status === 200 && response.data.auth === true) {
      login(response.data.token);
    }
    history.push("/");
  }

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [fieldName]: value })
  }

  return (
    <Container maxWidth="xs" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mt: 5 }}>
      <Typography variant="h5">
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          label="Usuário"
          variant="outlined"
          name="login"
          value={fields.login}
          onChange={handleChange}
          fullWidth
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
        />
        <Button
          variant="contained"
          size="large"
          type="submit"
          fullWidth
        >
          Entrar
        </Button>
      </Box>
    </Container>
  )
}