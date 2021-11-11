import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import Header from '../components/Header';
import { getMotoristas, removeMotorista, getMotoristaVeiculo } from '../services/contentApi';

export default function MotoristaListPage() {

    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [rowsSelected, setRowsSelected] = useState([]);

    const columns = [
        { field: "_id", headerName: "ID", width: 300 },
        { field: "nome", headerName: "Nome Motorista", width: 300 },
        // { field: "_idVeiculo", headerName: "ID Veiculo", width: 300 },
        { field: "veiculo", headerName: "Veiculo", width: 300 },
    ];

    useEffect(() => {
        getMotoristasFromApi();
    }, [])

    async function getMotoristaVeiculoFromApi(_id, _idVeiculo) {
        const motoristaVeiculo = await getMotoristaVeiculo({ "_id": _id, "_idVeiculo": _idVeiculo });
        return motoristaVeiculo.data.veiculo.nome;
    }

    async function getMotoristasFromApi() {
        const response = await getMotoristas();
        const data = await Promise.all(response.data.map(async(motorista) => {
            motorista.id = motorista._id;
            motorista.setRows = setRows;
            motorista.veiculo = await getMotoristaVeiculoFromApi(motorista._id, motorista._idVeiculo);
            return motorista;
        }))
        setLoading(false);
        setRows(data)
    }

    function handleClickDelete() {
        rowsSelected.forEach((rowId) => {
            removeMotorista(rowId).then(() => {
                setRows((rows) => rows.filter((row) => row.id !== rowId));
            });
        })
    }

    return (
        <div>
            <Header />
            <Container component="main" sx={{ textAlign: 'left' }} >
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4">
                        Motoristas
                    </Typography>
                    <div style={{ height: 400, width: '100%', marginTop: "15px" }}>
                        <DataGrid rows={rows} columns={columns} loading={loading}
                            checkboxSelection
                            onSelectionModelChange={(newSelectionModel) => {
                                setRowsSelected(newSelectionModel);
                            }}
                            rowsSelected={rowsSelected} />
                    </div>
                    <Button variant="contained" onClick={handleClickDelete} sx={{ mt: 2 }}>
                        Remover Item(s)
                    </Button>
                </Box>
            </Container>
        </div>
    )
}