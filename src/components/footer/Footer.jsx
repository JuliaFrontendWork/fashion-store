import './footer.css'
import facebook from '../../image/fb.svg'
import instagram from '../../image/inst.svg'
import tviter from '../../image/tw.svg'
import link from '../../image/in.svg'



const Footer = () => {
    return ( 
        <section className="Footer">
            <div className="container">
                <div className="footer__content">
                    <div className='footer__fachion'>
                        <span className='footer__title'>
                            FASHION
                        </span>
                        <p className='footer__page'>
                            Complete your style with awesome clothes from us.
                        </p>
                        <ul className='footer__social'>
                            <li className='footer__soc'>
                                <a href="#!">
                                    <img src={facebook} alt="" />
                                </a>
                            </li>
                            <li className='footer__soc'>
                                <a href="#!">
                                    <img src={instagram} alt="" />
                                </a>
                            </li>
                            <li className='footer__soc'>
                                <a href="#!">
                                    <img src={tviter} alt="" />
                                </a>
                            </li>
                            <li className='footer__soc'>
                                <a href="#!">
                                    <img src={link} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <nav className='footer__nav'>
                        <ul className='footer__company'>
                            <li className='footer__link title2'>
                                <a href="#!">
                                    Company
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a href="#!">
                                    About
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a href="#!">
                                    Contact us
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a href="#!">
                                    Support
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a href="#!">
                                    Careers
                                </a>
                            </li>
                        </ul>
                        <ul className='footer__company'>
                            <li className='footer__link title2'>
                                <a href="#!">
                                    Quick Link
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a href="#!">
                                    Share Location
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a href="#!">
                                    Orders Tracking
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a href="#!">
                                    Size Guide
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a href="#!">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                        <ul className='footer__company'>
                            <li className='footer__link title2'>
                                <a href="#!">
                                    Legal
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a href="#!">
                                    Terms & conditions
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a href="#!">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </nav>       
                </div>
            </div>
        </section>
     );
}
 
export default Footer;