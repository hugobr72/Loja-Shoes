import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import styles from './Products.module.css';


const Products = () => {

  const data = useFetch('https://loja-shoes.vercel.app/data/shoes.json')
  const [itensPerPage, setItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(data.length / itensPerPage)

  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = data.slice(startIndex, endIndex)




  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage]);


  return (
    <div className={styles.Products}>
      <div className={styles.buttons}>
        <select onChange={(e) => setItensPerPage(e.target.value)} value={itensPerPage}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>

        {Array.from(Array(pages), (data, index) => {
          return <button
            value={index}
            key={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >{index + 1}</button>
        })}
      </div>
      <ul className={styles.list}>

        {currentItens.map((product, index) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <span>R$ {product.oldPrice}</span>
            <h3>R$ {product.price}</h3>
            <Link to={`/products/${product.id}/info`} >Para Mais informações</Link>
          </li>
        ))}


      </ul>


    </div>
  )
}

export default Products