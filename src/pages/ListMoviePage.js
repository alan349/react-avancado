import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import Container from '@mui/material/Container'

import MovieHeader from '../components/MovieHeader';
import { getMovies } from '../services/movieApi';
import MovieDeleteButton from '../components/MovieDeleteButton';

const columns = [
  { field: "title", headerName: "Título do Filme", width: 300 },
  { field: "director", headerName: "Diretor", width: 150 },
  { field: "writers", headerName: "Roteiristas", width: 150 },
  { field: "releaseDate", headerName: "Data de Lançamento", width: 150 },
  { field: "timeDuration", headerName: "Duração", width: 150 },
  { field: "delete", headerName: "", width: 25, renderCell: MovieDeleteButton },
];

export default function ListMoviePage() {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    getMoviesFromApi();
  }, [])

  async function getMoviesFromApi() {
    const response = await getMovies();
    const data = response.data.map((movie) => {
      movie.id = movie.movieId;
      movie.setRows = setRows;
      return movie;
    })
    setRows(data)
  }

  const [selectionModel, setSelectionModel] = useState([]);

  useEffect(() => {
    console.log(selectionModel);
  }, [selectionModel])

  return (
    <div>
      <MovieHeader />
      <Container component="main" sx={{ textAlign: 'left' }} >
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4">
            Filmes
          </Typography>
          <div style={{ height: 600, width: '100%' }}>
            <DataGrid rows={rows} columns={columns}
              checkboxSelection
              onSelectionModelChange={(newSelectionModel) => {
                setSelectionModel(newSelectionModel);
              }}
              selectionModel={selectionModel} />
          </div>
        </Box>
      </Container>
    </div>
  )
}