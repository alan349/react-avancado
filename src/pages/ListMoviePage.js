import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import Container from '@mui/material/Container'
import { useLocation } from 'react-router';

import { getMovies } from '../services/movieApi';

const columns = [
  { field: "title", headerName: "Título do Filme", width: 300 },
  { field: "director", headerName: "Diretor", width: 150 },
  { field: "writers", headerName: "Roteiristas", width: 150 },
  { field: "releaseDate", headerName: "Data de Lançamento", width: 150 },
  { field: "timeDuration", headerName: "Duração", width: 150 },
];

export default function ListMoviePage() {

  const [rows, setRows] = useState([]);
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    getMoviesFromApi();
  }, [])

  async function getMoviesFromApi() {
    const response = await getMovies();
    const data = response.data.map((movie) => {
      movie.id = movie.movieId;
      return movie;
    })
    setRows(data)
  }

  return (
    <Container component="main" sx={{ textAlign: 'left' }} >
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">
          Filmes
        </Typography>
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} checkboxSelection />
        </div>
      </Box>
    </Container>
  )
}