import { useState } from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import styles from './Product.module.css';

const Product = () => {
  const { id } = useParams();
  const [index] = useState(Number(id) + 1);
  const fethData = useFetch('https://loja-shoes.vercel.app/data/shoes.json')
  let produto = fethData.slice(id, index)

  return (
    <div className={styles.Product}>
      {produto.map((item, index) => <li key={item.id}>
        <img src={item.image} alt="" />
        <h2>{item.name}</h2>
        <span>R$ {item.oldPrice}</span>
        <h3>R$ {item.price}</h3>
      </li>)}
    </div>
  )
}

export default Product