import { signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { getAuth } from "firebase/auth"
import { useEffect } from 'react'

const Logout = () => {
  const navigate = useNavigate()
  const auth = getAuth()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/Login')
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
    }
  }

  useEffect(() => {
    handleLogout()
  }, [])

  return <div>Redirigiendo...</div>
}

export default Logout