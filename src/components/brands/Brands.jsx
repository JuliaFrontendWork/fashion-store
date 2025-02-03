import './brands.css'
import HM from '../../image/HM.png'
import obey from'../../image/Obey.png'
import shopify from '../../image/Shopify.png'
import lacosta from '../../image/Lacoste.png'
import levias from '../../image/Levis.png'
import amazon from '../../image/Amazon.png'

const Brands = () => {
    return ( 
    <section className='brands'>
        <div className="container">
            <ul className='brands__list'>
                <li>
                    <a href="#!">
                        <img src={HM} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#!">
                        <img src={obey} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#!">
                        <img src={shopify} alt="" />
                    </a>
                </li> 
                <li>
                    <a href="#!">
                        <img src={lacosta} alt="" />
                    </a>
                </li>    
                <li>
                    <a href="#!">
                        <img src={levias} alt="" />
                    </a>
                </li>    
                <li>
                    <a href="#!">
                        <img src={amazon} alt="" />
                    </a>
                </li>    
            </ul>
        </div>
    </section> 
    );
}
 
export default Brands;