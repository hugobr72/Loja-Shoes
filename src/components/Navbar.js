import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate  = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === '') {
      return;
    } else {
      navigate(`/search/${inputValue}`);
    }



    setInputValue('');
  };

  return (
    <header>
      <h1>Lojão Shoes</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Pesquise pela marca do tênis...' onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
        <input type="submit" value="Procurar" />
      </form>
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