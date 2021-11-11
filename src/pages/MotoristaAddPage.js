import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Grid, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';

import { getVeiculos, addMotorista } from '../services/contentApi';
import Header from '../components/Header';

const validationSchema = yup.object({
    nome: yup.string()
        .min(3, "Mínimo 3 caracteres")
        .max(50, "Máximo 50 caracteres")
        .required("Obrigatório"),
});

export default function VeiculoAddPage() {

    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        getVeiculosFromApi();
    }, [])

    async function getVeiculosFromApi() {
        const response = await getVeiculos();
        const data = response.data;
        setVeiculos(data)
    }

    const formik = useFormik({
        initialValues: {
            nome: "",
            _idVeiculo: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const response = await addMotorista(values);
            if (response.status === 200) {
                alert('Motorista cadastrado com sucesso!');
                resetForm({ nome: "" })
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
                                Cadastrar Motorista:
                            </Typography>
                            <TextField label="Nome" name="nome" variant="outlined" sx={{ mt: 2 }} fullWidth
                                value={formik.values.nome} onChange={formik.handleChange}
                                error={formik.touched.nome && Boolean(formik.errors.nome)}
                                helperText={formik.touched.nome && formik.errors.nome} />
                            <FormControl fullWidth sx={{ mt: 2 }}>
                                <InputLabel id="veiculo-label">Veículo</InputLabel>
                                <Select
                                    labelId="veiculo-label"
                                    id="_idVeiculo"
                                    name="_idVeiculo"
                                    value={formik.values._idVeiculo}
                                    label="Veículo"
                                    onChange={formik.handleChange}
                                >
                                    {veiculos.map(({ _id, nome }) => (
                                        <MenuItem key={_id} value={_id}>{nome}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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