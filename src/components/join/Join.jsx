import './join.css'

const Join = () => {
    return ( 
        <section className="join">
            <div className="container">
                <div className="join__content">
                    <h1 className="join__title">
                        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                    </h1>
                    <p className="join__desc">
                        Type your email down below and be young wild generation
                    </p>
                    <form className="join__form" action="#">
                        <input className="join__input" type="email" placeholder="Add your email here"/>
                        <button className="join__btn" type="submit">SEND</button>
                    </form>
                </div>
            </div>
        </section>
     );
}
 
export default Join;