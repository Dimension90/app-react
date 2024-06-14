import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AdressForm from "./components/AdressForm/AdressForm";

import backgroundImage from "./assets/img/background.svg";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <AdressForm />
      <Footer />
    </>
  );
}

export default App;
