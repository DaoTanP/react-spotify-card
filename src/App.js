import './css/style.css';
import PersonaCardContainer from './components/PersonaCardContainer';
import React from 'react';

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        Persona 3 Portable Fusion Calculator
      </h1>
      <PersonaCardContainer />
    </>
  );
}

export default App;
