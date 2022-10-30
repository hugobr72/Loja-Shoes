import { Link } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams} from 'react-router';
import { useFetch } from '../hooks/useFetch';
import styles from './Search.module.css'


const Search = () => {
  const { name } = useParams();
  const nameLower = name.toLowerCase();
  let cont = 0

  const data = useFetch('https://loja-shoes.vercel.app/data/shoes.json');

  const products = data.map((p) => (
    p.name.toLowerCase().includes(nameLower) && p
  ))

  products.forEach((product) => { 
    if(product === false) cont += 1
    if (cont === 41 )return  
  })


  const [itensPerPage, setItensPerPage] = useState(25)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(products.length / itensPerPage)

  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = products.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage]);

  

  
  return (
    <div className={styles.Search}>

      <div className={styles.buttons}>

        {cont !== 41 && Array.from(Array(pages), (data, index) => {
          return <button
            value={index}
            key={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >{index + 1}</button>
        })}
      </div>
      <br />
      <ul className={styles.list}>
      {currentItens.map((product, index) => (
        product &&
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <span>R$ {product.oldPrice}</span>
          <h3>R$ {product.price}</h3>
          <Link to={`/products/${product.id}/info`} >Para Mais informações</Link>
        </li>
      ))}
      </ul>
      {cont === 41 && <h2>Não foi encontrado nenhuma marca com o nome de {name}...</h2>}
    </div>
  )
}

export default Search