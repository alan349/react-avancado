import React from 'react';
import { Box, Typography, TextField, Grid, Button, Container } from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';

import addVeiculo from '../services/contentApi';
import Header from '../components/Header';

const validationSchema = yup.object({
    nome: yup.string()
        .min(3, "Mínimo 3 caracteres")
        .max(50, "Máximo 50 caracteres")
        .required("Obrigatório"),
});

async function getVeiculoName() {
    const veiculo = await getVeiculoById(id);
    return veiculo.data.nome;
  }

export default function VeiculoAddPage() {
    const formik = useFormik({
        initialValues: {
            getVeiculoName()
        },
        validationSchema: validationSchema,
        onSubmit: async (values, {resetForm}) => {
            const response = await addVeiculo(values);
            if (response.status === 200) {
                alert('Veiculo cadastrado com sucesso!');
                resetForm({nome: ""})
            }
        },
    });

    return (
        <div>
            <Header />
            <Container component="main" maxWidth="xs" sx={{ textAlign: 'left' }} >
                <Box component="form" sx={{ mt: 4 }} onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item sm={12}>
                            <Typography variant="h4">
                                Dados de Entrega:
                            </Typography>
                            <TextField label="Nome" name="nome" variant="outlined" sx={{ mt: 2 }} fullWidth
                                value={formik.values.nome} onChange={formik.handleChange}
                                error={formik.touched.nome && Boolean(formik.errors.nome)}
                                helperText={formik.touched.nome && formik.errors.nome} />
                            <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
                                Cadastrar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}