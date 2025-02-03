import './promo.css'
import promo from '../../image/header-img.png'

const Promo = () => {
    return ( <section className="Promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">
                        <span className='highlight highlight-W'>
                            <span>LET’S</span>
                        </span> 
                        EXPLORE 
                        <span className='highlight'>
                            <span>UNIQUE</span>
                        </span> 
                        CLOTHES.
                    </div>
                    <div className="promo__desc">
                        Live for Influential and Innovative fashion!
                    </div>
                    <div className=" promo__btn-wrapper">
                        <a className='promo__btn' href="#!">
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className="promo__img">
                    <img src={promo} alt="promo" />
                </div>
            </div>
        </div>
    </section> );
}
 
export default Promo;