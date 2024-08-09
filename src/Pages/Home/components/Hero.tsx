import styles from '../../../assets/css/Home.module.css'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span>Business Process Outsourcing</span>
                    <h1>Elevate Your Sales And Customer Experience</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iure quasi esse ad magnam qui asperiores sit nemo natus repellendus.</p>
                    <button className='primary'>Contact Us</button>
                </div>
            </div>
            <div className={styles.imageBox}>
                <img src="https://placehold.co/150x200" alt="" />
                <img src="https://placehold.co/150x200" alt="" />
                <img src="https://placehold.co/150x200" alt="" />
                <img src="https://placehold.co/150x200" alt="" />
                <img src="https://placehold.co/150x200" alt="" />
            </div>
        </section>
    )
}

export default Hero