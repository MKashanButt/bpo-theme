import styles from '../../../assets/css/Services.module.css';

const ServicesStage = () => {
    return (
        <section className={styles.services}>
            <div className={styles.header}>
                <h2>Quality teams for unparalleled outcomes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestias corrupti nemo non, ipsam assumenda iste quod. Nesciunt, nemo ullam, quaerat vero voluptas tempora tempore eos magni perferendis eligendi architecto adipisci ipsum</p>
            </div>
            <div className={styles.stage}>
                <div className={styles.item}>
                    <img src="https://placehold.co/100x100" alt="" />
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita dicta fuga natus quasi dolor laboriosam qui odio mollitia saepe.</p>
                    <button>Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={styles.icon}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
                <div className={styles.item}>
                    <img src="https://placehold.co/100x100" alt="" />
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita dicta fuga natus quasi dolor laboriosam qui odio mollitia saepe.</p>
                    <button>Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={styles.icon}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
                <div className={styles.item}>
                    <img src="https://placehold.co/100x100" alt="" />
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita dicta fuga natus quasi dolor laboriosam qui odio mollitia saepe.</p>
                    <button>Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={styles.icon}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
                <div className={styles.item}>
                    <img src="https://placehold.co/100x100" alt="" />
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita dicta fuga natus quasi dolor laboriosam qui odio mollitia saepe.</p>
                    <button>Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={styles.icon}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={styles.controls}>
                <button className='primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.controlIcon} viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" /></svg>
                </button>
                <button className='primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.controlIcon} viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" /></svg>
                </button>
            </div>
        </section>
    )
}

export default ServicesStage