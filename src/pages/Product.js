import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './Product.module.css';

const Product = () => {

  const { id } = useParams();

  const [data, setData] = useState([]);
  const [index] = useState(Number(id) + 1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://loja-shoes.vercel.app/data/shoes.json')
        .then((response) => response.json())
        .then(data => data);
      setData(result);
    }
    fetchData()
  }, [])
  let produto = data.slice(id, index)
  console.log(data)

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