import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return () => unsubscribe()
  }, [])

  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ height: '60px' }}>
      <Container>
        <Navbar.Brand href="/">PC FullHard</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link text-white" style={{ fontSize: '16px', padding: '10px' }}>Inicio</Link>
          <Link to="/ProductList" className="nav-link text-white" style={{ fontSize: '16px', padding: '10px' }}>Productos</Link>
          
          {/* Mostrar Login/Registro si no hay usuario */}
          {!currentUser && 
            <>
              <Link to="/Login" style={{ fontSize: '16px', padding: '10px' }} className="nav-link text-white">Login</Link>
              <Link to="/Register" style={{ fontSize: '16px', padding: '10px' }} className="nav-link text-white">Register</Link>
            </>
          }

          {/* Mostrar Logout si hay un usuario autenticado */}
          {currentUser && 
            <Link to="/Logout" style={{ fontSize: '16px', padding: '10px' }} className="nav-link text-white">Logout</Link>
          }
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
