import React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import checkout from '../services/checkoutApi';

const dataSchema = {
  firstName: "",
  lastName: "",
  cpf: "",
  address: "",
  city: "",
  state: "",
  postalcode: "",
  cardName: "",
  cardNumber: "",
  cardExpirationDate: "",
  cardCVV: "",
}

export default function CheckoutPage() {

  const [fields, setFields] = useState(dataSchema)

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await checkout(fields);
    console.log(response);
    if (response.status === 200) {
      setFields(dataSchema)
    }
    setFields(dataSchema)
  }

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [fieldName]: value })
  }

  return (
    <Box component="form" sx={{ mt: 5 }} onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item sm={12} sx={{ borderBottom: 1, borderColor: 'grey.400', pb: 5 }}>
          <Typography variant="h4">
            Dados de Entrega:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item sm={6}>
              <TextField label="Nome" name="firstName" value={fields.firstName} variant="outlined" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item sm={6}>
              <TextField label="Sobrenome" name="lastName" value={fields.lastName} variant="outlined" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item sm={6}>
              <TextField label="CPF" name="cpf" value={fields.cpf} variant="outlined" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item sm={6}>
              <TextField label="Endereço" name="address" value={fields.address} variant="outlined" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item sm={6}>
              <TextField label="Cidade" name="city" value={fields.city} variant="outlined" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item sm={6}>
              <TextField label="Estado" name="state" value={fields.state} variant="outlined" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item sm={6}>
              <TextField label="CEP" name="postalcode" value={fields.postalcode} variant="outlined" fullWidth onChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="h4">
            Dados de Pagamento:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item sm={6}>
              <TextField label="Nome" name="cardName" value={fields.cardName} variant="outlined" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item sm={6}>
              <TextField label="Número do Cartão" name="cardNumber" value={fields.cardNumber} variant="outlined" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item sm={6}>
              <TextField label="Data de Expiração" name="cardExpirationDate" value={fields.cardExpirationDate} variant="outlined" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item sm={6}>
              <TextField label="CVV" name="cardCVV" value={fields.cardCVV} variant="outlined" fullWidth onChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} sx={{ mt: 5 }}>
          <Button type="submit" variant="contained" fullWidth>
            Checkout
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}