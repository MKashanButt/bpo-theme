import styles from '../../../assets/css/Services.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <span>Services</span>
                <h1>Services</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ut voluptate aspernatur accusamus non! Fugit voluptate atque nam sequi officiis enim, tempora minus asperiores ratione facilis delectus expedita vitae illo nisi labore?</p>
                <button className='primary'>Learn More</button>
            </div>
            <div className={styles.image}>
                <img src="https://placehold.co/450x400" alt="" />
            </div>
        </section>
    )
}

export default Hero;