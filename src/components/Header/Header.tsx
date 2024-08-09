import styles from './Header.module.css'
import image from '../../assets/images/sq-logo.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={image} alt="" />
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Inudstry News</li>
                        <li>About Us</li>
                        <li><button className='primary'>Contact Us</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header