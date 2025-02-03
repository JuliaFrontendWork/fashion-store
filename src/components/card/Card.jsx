import styles from './Card.module.css'
import arrow from '../../image/Arrow.svg'

const Card = (property) => {


    return ( 
        <div className={styles.card}>
            <a href="#!" className={styles.card__link}></a>
            <img className={styles.card__img} src={property.img} alt="" />
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>
                        {property.title}
                    </div>
                    <div className={styles.card__muted}>
                        Explore Now!
                    </div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Card;