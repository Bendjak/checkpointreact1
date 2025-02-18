import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "Desire"; // Remplacez par votre prénom ou laissez vide pour tester les deux cas

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <h2 className="mt-4">
        Bonjour, {firstName ? firstName : '!' }
      </h2>
      {firstName && (
        <img 
          src="montre.png" 
          alt="profile" 
          className="rounded-circle mt-3" 
        />
      )}
    </Container>
  );
}

export default App;

