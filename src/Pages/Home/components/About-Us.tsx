import styles from '../../../assets/css/Home.module.css'

const AboutUs = () => {
    return (
        <section className={styles.aboutUs}>
            <div className={styles.content}>
                <span>About Us</span>
                <h2>Deep Experience And Proven Results</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque molestias delectus saepe ab, similique libero. Aperiam ipsam alias aspernatur, quia, enim ullam porro exercitationem consectetur incidunt, maxime sint facere consequuntur molestias?</p>
                <div className={styles.stage}>
                    <div className={styles.item}>
                        <h4>Experience</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, dolor.</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Savings</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, dolor.</p>
                    </div>
                </div>
                <div className={styles.cta}>
                    <button>Discover More</button>
                    <button>
                        <img src="https://placehold.co/50" alt="" />
                        <div className="content">
                            <p>Call Us On:</p>
                            <p>+1 (954) 417 7926</p>
                        </div>
                    </button>
                </div>
            </div>
            <img src="https://placehold.co/350x550" alt="" />
            <div className={styles.list}>
                <div className={styles.item}>
                    <img src="https://placehold.co/50" alt="" />
                    <p>Lorem, ipsum.</p>
                </div>
                <div className={styles.item}>
                    <img src="https://placehold.co/50" alt="" />
                    <p>Lorem, ipsum.</p>
                </div>
                <div className={styles.item}>
                    <img src="https://placehold.co/50" alt="" />
                    <p>Lorem, ipsum.</p>
                </div>
                <div className={styles.item}>
                    <img src="https://placehold.co/50" alt="" />
                    <p>Lorem, ipsum.</p>
                </div>
                <div className={styles.item}>
                    <img src="https://placehold.co/50" alt="" />
                    <p>Lorem, ipsum.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs