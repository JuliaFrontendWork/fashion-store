import Card from '../card/Card.jsx'
import card1 from '../../image/Trending.png'
import card2 from '../../image/All.png'
import './favourite.css'

const Arrivals = () => {
    return (
        <section className='arrivals'>
            <div className='container'>
                <div className='arrivals__header'>
                    <h2 className='title-2'>
                        Young’s Favourite 
                    </h2>
                </div>
                <div className='arrivals__cards'>
                    <Card title='Hoodies & Sweetshirt' img={card1}/>
                    <Card title='Coats & Parkas' img={card2}/>
                </div>
            </div>
        </section>
    );
}
 
export default Arrivals;