import React from 'react';
import Container from '@mui/material/Container'
import { useParams } from 'react-router';

export default function UpdateMoviePage() {

  const { id, slug } = useParams();

  return (
    <Container component="div" sx={{ textAlign: 'left' }} >
      {id} {slug}
    </Container>
  )
}