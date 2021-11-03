import React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useParams } from 'react-router';

import MovieHeader from '../components/MovieHeader';
import { getMovieById, updateMovie } from '../services/movieApi';

const movie = {
  title: "",
  director: "",
  writers: "",
  releaseDate: "",
  timeDuration: ""
}

export default function UpdateMoviePage() {

  const { id } = useParams();
  const [fields, setFields] = useState(movie);

  async function getMovie() {
    const movie = await getMovieById(id);
    setFields(movie.data)
  }

  useEffect(() => {
    getMovie()
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await updateMovie(id, fields);
    console.log(response);
    if (response.status === 200) {
      setFields(movie)
    }
  }

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [fieldName]: value })
  }

  return (
    <div>
      <MovieHeader />
      <Container component="main" sx={{ textAlign: 'left' }} >
        <Box component="form" sx={{ mt: 5 }} onSubmit={handleSubmit}>
          <Typography variant="h4">
            Atualizar Filme
          </Typography>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item sm={12}>
              <TextField label="Título" variant="outlined" fullWidth onChange={handleChange} value={fields.title} name="title" />
            </Grid>
            <Grid item sm={6}>
              <TextField label="Diretor" variant="outlined" fullWidth onChange={handleChange} value={fields.director} name="director" />
            </Grid>
            <Grid item sm={6}>
              <TextField label="Roteiristas" variant="outlined" fullWidth onChange={handleChange} value={fields.writers} name="writers" />
            </Grid>
            <Grid item sm={6}>
              <TextField label="Data de Lançamento" variant="outlined" fullWidth onChange={handleChange} value={fields.releaseDate} name="releaseDate" />
            </Grid>
            <Grid item sm={6}>
              <TextField label="Tempo de Duração" variant="outlined" fullWidth onChange={handleChange} value={fields.timeDuration} name="timeDuration" />
            </Grid>
            <Grid item sm={12}>
              <Button type="submit" variant="contained" fullWidth>
                Atualizar Filme
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}