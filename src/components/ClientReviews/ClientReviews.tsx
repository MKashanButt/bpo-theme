import styles from './ClientReviews.module.css'

const ClientReviews = () => {
    return (
        <section className={styles.clientReviews}>
            <span>Client Reviews</span>
            <h2>Client Reviews</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ipsum.</p>
            <div className={styles.review}>
                <img src="https://placehold.co/50" alt="" />
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi dignissimos dolor facilis sequi accusamus expedita quam amet nesciunt autem.</p>
            </div>
        </section>
    )
}

export default ClientReviews