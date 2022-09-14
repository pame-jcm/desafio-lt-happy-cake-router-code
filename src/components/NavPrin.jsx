import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgHappyCake from '../images/cake.png';
import imgHappyCakeHome from '../images/home.png';
import imgHappyCakeContact from '../images/contact.png';

const NavPrin = () => {
  return (
    <>
     <Navbar bg="navRed" variant="navRed" >
        <Container>

          <Nav className="me-auto">
            <img
              alt=""
              src={ imgHappyCakeHome }
              width="20"
              height="20"
              className="d-inline-block align-top"
            />
            {' '}
            <Link to="/" className="me-3 text-decoration-none text-white">Home</Link>

            <img
              alt=""
              src={ imgHappyCakeContact }
              width="20"
              height="20"
              className="d-inline-block align-top"
            />
            {' '}
            <Link to="/contact" className="text-decoration-none text-white">Contact</Link>
          </Nav>

          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-white">Happy Cake</Link>
            {' '}
            <img
              alt=""
              src={ imgHappyCake }
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

        </Container>
      </Navbar>
    </>
  )
}

export default NavPrin