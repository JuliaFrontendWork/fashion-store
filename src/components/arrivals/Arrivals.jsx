import Card from '../card/Card.jsx'
import card1 from '../../image/Hoodies.png'
import card2 from '../../image/Coats.png'
import card3 from '../../image/Tees.png'
import './arrivals.css'

const Arrivals = () => {
    return (
        <section className='arrivals'>
            <div className='container'>
                <div className='arrivals__header'>
                    <h2 className='title-2'>
                        NEW ARRIVALS 
                    </h2>
                </div>
                <div className='arrivals__cards'>
                    <Card title='Hoodies & Sweetshirt' img={card1}/>
                    <Card title='Coats & Parkas' img={card2}/>
                    <Card title='Tees & T-Shirt' img={card3}/>
                </div>
            </div>
        </section>
    );
}
 
export default Arrivals;