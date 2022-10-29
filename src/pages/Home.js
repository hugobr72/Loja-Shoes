import styles from './Home.module.css'
import shoes from '../img/home.jpg'

const Home = () => {
  return (
    <div className={styles.Home}>
    <img src={shoes} alt="shoes" />
    </div>
  )
}

export default Home