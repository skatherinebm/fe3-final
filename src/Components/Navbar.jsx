import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContextGlobal()

  return (
    <nav style={{background: state.theme.background, color: state.theme.font}}>
      <Link to="/contact" style={{color: state.theme.font}}> Contact</Link>
      <Link to="/favorites" style={{color: state.theme.font}}> Favorites </Link>
      <Link to="/home" style={{color: state.theme.font}}> Home</Link>
       {/* Aqui deberan agregar los liks correspondientes a las rutas definidas
       Deberan implementar ademas la logica para cambiar de Theme con el button  */}
      <button onClick={()=>dispatch({type:"changeTheme"})}>Change theme</button>
    </nav>
  )
}

export default Navbar