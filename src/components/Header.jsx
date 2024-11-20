import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {

  const currentUser = getAuth();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{height:'60px'}}>
        <Container>
          <Navbar.Brand href="/">PC FullHard</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-white" style={{fontSize:'16px', padding:'10px'}}>Inicio</Link>
            <Link to="/ProductList" className="nav-link text-white" style={{fontSize:'16px', padding:'10px'}}>Productos</Link>
            {!currentUser?.currentUser && <Link to="/Register" className="nav-link text-white" style={{fontSize:'16px', padding:'10px'}}>Register</Link>}
            </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;