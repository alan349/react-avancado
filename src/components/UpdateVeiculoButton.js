import React, { useState } from 'react';
import { IconButton, Dialog, Box, Typography, TextField, Button, DialogContent } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { updateVeiculo } from '../services/contentApi';

const validationSchema = yup.object({
    nome: yup.string()
        .min(3, "Mínimo 3 caracteres")
        .max(50, "Máximo 50 caracteres")
        .required("Obrigatório"),
});

export default function UpdateVeiculoButton(props) {
    const { id, row } = props;
    const nome = row.nome;
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const formik = useFormik({
        initialValues: {
            nome: nome
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            values._id = id;
            const response = await updateVeiculo(values);
            if (response.status === 200) {
                row.setRows((curr) => curr.map((row) => {
                    if(row.id === id){
                        row.nome = values.nome;
                    }
                    return row;
                }));
                setIsDialogOpen(false);
            }
        },
    });

    function handleDialog(e) {
        e.stopPropagation();
        setIsDialogOpen(true);
    }
    function handleCancel(e) {
        e.stopPropagation();
        setIsDialogOpen(false);
    }

    return (
        <div>
            <Dialog open={isDialogOpen}>
                <DialogContent>
                    <Box component="form" onSubmit={formik.handleSubmit}
                        sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", p: 5 }}>
                        <Typography variant="h6">
                            Você tem certeza que deseja alterar este veiculo?
                        </Typography>
                        <TextField autoFocus label="Nome" name="nome" variant="outlined" sx={{ mt: 2 }} fullWidth
                            value={formik.values.nome} onChange={formik.handleChange}
                            error={formik.touched.nome && Boolean(formik.errors.nome)}
                            helperText={formik.touched.nome && formik.errors.nome} />
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", mt: 5, width: 1 }}>
                            <Button variant="contained" type="submit">
                                Sim
                            </Button>
                            <Button variant="outlined" onClick={handleCancel}>
                                Não
                            </Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
            <IconButton onClick={handleDialog}>
                <EditIcon />
            </IconButton>
        </div>
    );
};