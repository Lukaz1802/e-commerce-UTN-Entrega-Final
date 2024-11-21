import { useState, useEffect } from "react"
import { Row, Col, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductCard from "../components/ProductCard"
import { getAll } from "../Services/ProductServices"
import classes from '../styles/home.module.css'

const Home = () => {
  const numProductosAMostrar = 8
  const [compra, setCompra] = useState(false)
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAll()
        setProductos(response?.results)
        setLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
    request()
  }, [])

  const handleComprar = () => {
    setCompra(true)
  }

  if (loading) {
    return <div>Cargando...</div>
  }
  if (compra) {
    return <div>Gracias por su compra!</div>
  } else {

    return (
      <div className="container" style={{display:'flex', flexDirection:'column', flexWrap:'wrap', padding:20}}>
        <Image style={{borderRadius:20, marginBottom:20}} src="https://c4.wallpaperflare.com/wallpaper/339/694/383/asus-republic-of-gamers-gaming-laptop-laptop-pc-gaming-hd-wallpaper-preview.jpg" fluid />

        <div>
          <Row xs={1} sm={2} md={3} lg={4} xl={4} className="card-product-custom text-center mx-auto justify-content-center">
            {productos.slice(0, numProductosAMostrar).map((producto) => (
              <Col key={producto.id} className="mb-2">
                <ProductCard {...producto} buy={handleComprar} />
              </Col>
            ))}
          </Row>
          <div className={`text-center`} style={{marginBottom:'50px'}}>
            <button className={`${classes.btnHome} bg-dark`}>
              <Link to='./ProductList'>Ver Todos los productos</Link>
            </button>
          </div>
        </div>
      </div>
    )
  }
}


export default Home
