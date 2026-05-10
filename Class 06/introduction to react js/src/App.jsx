import Footer from "./components/Footer/Footer.jsx";
import { Footer2 } from "./components/Footer/footer";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard/index.jsx";
import "./App.css";
import Button from "./components/Button/index.jsx";

function App() {
  const handleButtonClick = (name) => {
    console.log("Button clicked!", name);
  };
  return (
    <>
      <Header />
      <section className="cards-wrapper">
        <ProductCard
          productName="Shoe"
          des1="durable"
          des2="affordable"
          des3="weather resistant"
          reviews="120"
          price="20$"
          imgUrl="https://img.freepik.com/premium-psd/blue-sport-sneakers-shoes-isolated-transparent-background-png-psd_888962-1190.jpg?semt=ais_hybrid&w=740&q=80"
        />
        <ProductCard
          productName="heaphone"
          des1="durable"
          des2="affordable"
          des3="weather resistant"
          reviews="80"
          price="50$"
          imgUrl="https://img.freepik.com/premium-psd/black-headphones-isolated-transparent-background-png-psd_888962-1191.jpg?semt=ais_hybrid&w=740&q=80"
        />
        <ProductCard
          productName="laptop"
          des1="durable"
          des2="affordable"
          des3="weather resistant"
          reviews="200"
          price="500$"
          imgUrl="https://img.freepik.com/premium-psd/laptop-isolated-transparent-background-png-psd_888962-1192.jpg?semt=ais_hybrid&w=740&q=80"
        />
      </section>

      <section>
        <Button text="save" onClick="handleButtonClick" />
        <Button text="delete" />
      </section>

      <Footer />
    </>
  );
}

export default App;
