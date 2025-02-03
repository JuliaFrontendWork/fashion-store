import './dowland.css'
import phone from '../../image/phone.png'
import googleplay from '../../image/google-play.png'
import applestore from '../../image/app-store.png'


const dowland = () => {
    return ( 
        <section className="app">
            <div className="container">
                <div className="app__content">
                    <div className="content__text">
                        <h1 className='app_title'>DOWNLOAD APP & GET THE VOUCHER!</h1>
                        <p className='app__page'>Get 30% off for first transaction using Rondovision mobile app for now.</p>
                        <div className="store">
                            <img src={applestore} alt="" />
                            <img src={googleplay} alt="" />
                        </div>
                    </div>
                    <div className="app__img">
                        <img src={phone} alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default dowland;