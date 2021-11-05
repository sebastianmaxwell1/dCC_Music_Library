import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';



const NavigationBar = () => {
return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand path="/home">dCC Music</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link  to="/">Home</Nav.Link>
                        <Nav.Link  to="/songs">Songs</Nav.Link>
                        <Nav.Link  to="/album">Albums</Nav.Link>
                        <Nav.Link  to="/artist">Artist</Nav.Link>
                        <Nav.Link  to="/genre">Genres</Nav.Link>
                    </Nav>
            </Container>
  </Navbar>

);
};

export default NavigationBar;
