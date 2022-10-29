import { NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <h1>Lojão Shoes</h1>
      <nav>
        <ul>
          <li><NavLink to='/' end>Home</NavLink></li>
          <li><NavLink to='/about'>Sobre</NavLink></li>
          <li><NavLink to='/products' end>Produtos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar