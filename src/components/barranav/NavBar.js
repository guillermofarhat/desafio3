import './navBar.css';
import { Container, Nav, Navbar, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";


function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/"><Navbar.Brand href="#home" className='title-home'>Home</Navbar.Brand></Link>
          <Nav className="me-auto">
            <Link to="/Nosotros">Nosotros</Link>
            {/* <Nav.Link>Servicios</Nav.Link> */}
            {/* <Nav.Link>Contacto</Nav.Link> */}
          </Nav>
        </Container>
        <Link to="/Admin"><Button className=' btn btn-success mx-3'>Admin</Button></Link>
        {/* <button className='btn btn-success mx-2' >Carrito</button> */}

      </Navbar>
    </div>
  );
}

export default NavBar;
