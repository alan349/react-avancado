import './App.css';
// import Form from './components/Form';
// import SignupForm from './components/SignupForm';
// import SignupFormExercicio from './components/SignupFormExercicio';
import React from 'react';
import Container from '@mui/material/Container'
// import MovieHeader from './components/MovieHeader';
// import CreateMoviePage from './pages/CreateMoviePage';
import CheckoutHeader from './components/CheckoutHeader';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <div className="App">
      {/* <MovieHeader /> */}
      <CheckoutHeader />
      <Container component="main" sx={{ textAlign: 'left' }} >
        {/* <CreateMoviePage /> */}
        <CheckoutPage />
      </Container>
    </div>
  );
}

export default App;
