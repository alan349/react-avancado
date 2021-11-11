import React, { useState } from 'react';
import { Typography, Box, Button, Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import Header from '../components/Header';

export default function MotoristaListPage() {

    const [rows, setRows] = useState([]);
    const [rowsSelected, setRowsSelected] = useState([]);

    const columns = [];

    function handleClickDelete() {
       
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
                        <DataGrid rows={rows} columns={columns}
                            checkboxSelection
                            hideFooter="true"
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