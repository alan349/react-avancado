import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import Header from '../components/Header';
import { getVeiculos, removeVeiculo } from '../services/contentApi';

export default function MotoristaListPage() {

    const [rows, setRows] = useState([]);
    const [rowsSelected, setRowsSelected] = useState([]);

    const columns = [
        { field: "_id", headerName: "ID", width: 300 },
        { field: "nome", headerName: "Nome Motorista", width: 300 },
    ];

    useEffect(() => {
        getVeiculosFromApi();
    }, [])

    async function getVeiculosFromApi() {
        const response = await getVeiculos();
        const data = response.data.map((movie) => {
            movie.id = movie._id;
            movie.setRows = setRows;
            return movie;
        })
        setRows(data)
    }

    function handleClickDelete() {
        rowsSelected.forEach((rowId) => {
          removeVeiculo(rowId).then(() => {
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
                        Veículos
                    </Typography>
                    <div style={{ height: 400, width: '100%', marginTop: "15px" }}>
                        <DataGrid rows={rows} columns={columns}
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