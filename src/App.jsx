import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AdressForm from "./components/AdressForm/AdressForm";
import CartProviders from "./components/CartProviders/CartProviders";
import Collections from "./components/Collections/Collections";
import SubmitApplication from "./components/SubmitApplication/SubmitApplication";
import ConnectSection from "./components/ConnectSection/ConnectSection";
import Faq from "./components/Faq/Faq";
import QuestionForm from "./components/QuestionForm/QuestionForm";

import backgroundImage from "./assets/img/background.svg";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <AdressForm />
      <CartProviders />
      <Collections />
      <SubmitApplication />
      <ConnectSection />
      <Faq />
      <QuestionForm />
      <Footer />
    </>
  );
}

export default App;
