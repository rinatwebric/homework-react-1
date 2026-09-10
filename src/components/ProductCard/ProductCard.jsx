import styles from './ProductCard.module.scss';

export const ProductCard = ({ id, name, image }) => {
  return (
    <div className={styles.card}>
    <img className={styles.image} src={image} alt="" />
    <span className={styles.id}>id: {id}</span>
    <div className={styles.name}>name: {name}</div>
    <button className={styles.button} onClick={() => {
        console.log({ id, name })
    }}>Buy Now</button>
    </div>
  )
}
