import React from 'react'
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer className="text-center text-white p-3" id='footer'>
      <Container>
         &copy; {new Date().getFullYear()} Copyright{' '}
        USO | UTI
        <br />
        Todos los derechos reservados.
      </Container>
    </footer>
  );
}

export default Footer;