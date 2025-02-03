import './payday.css'
import payday from "../../image/promo-img.png"

const Payday = () => {
    return ( 
        <section className="payday">
            <div className="container2">
                <div className="payday__content">
                    <div className="promo__img">
                        <img src={payday} alt="" />
                    </div>
                    <div className="payday__text">
                         <div className="payday_title">
                            <span className='highlight highlight-W highlight-d'>
                                <span>PAYDAY</span> 
                            </span>
                            SALE NOW
                        </div>
                        <div className="payday__desc">
                            Spend minimal $100 get 30% off
                            voucher code for your next purchase
                        </div>
                        <h3 className='payday__date'>
                            1 June - 10 June 2021
                        </h3>
                        <p className='payday__terms'>
                            *Terms & Conditions apply
                        </p>
                        <div className=" payday__btn-wrapper">
                            <a className='payday__btn' href="#!">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Payday;