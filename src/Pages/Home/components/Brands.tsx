import styles from '../../../assets/css/Home.module.css'

const Brands = () => {
    return (
        <section className={styles.brands}>
            <h2>Trusted By Many Brands</h2>
            <div className={styles.imageBox}>
                <img src="https://placehold.co/200x150" alt="" />
                <img src="https://placehold.co/200x150" alt="" />
                <img src="https://placehold.co/200x150" alt="" />
                <img src="https://placehold.co/200x150" alt="" />
            </div>
        </section>
    )
}

export default Brands