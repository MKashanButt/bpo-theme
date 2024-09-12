import styles from './Header.module.css'
import image from '../../assets/images/sq-logo.png'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={image} alt="" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/' className={location.pathname === '/' ? 'active-url' : ''}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/services' className={location.pathname === '/services' ? 'active-url' : ''}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to='/industry-news' className={location.pathname === '/industry-news' ? 'active-url' : ''}>
                                Inudstry News
                            </Link>
                        </li>
                        <li>
                            <Link to='/about-us' className={location.pathname === '/about-us' ? 'active-url' : ''}>
                                About Us
                            </Link>
                        </li>
                        <li><button className='primary'>Contact Us</button></li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header