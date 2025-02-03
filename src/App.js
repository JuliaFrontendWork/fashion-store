import Header from "./components/hedear/header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Payday from "./components/payday/Payday";
import Favourite from "./components/favourite/Favourite";
import Phone from "./components/dowland/Dowland";
import Jhoin from "./components/join/Join";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Payday />
      <Favourite />
      <Phone />
      <Jhoin />
      <Footer />
    </div>
  );
}

export default App;
