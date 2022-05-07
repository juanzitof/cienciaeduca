import Header from "./components/Header/Header";
import Tutorias from "./components/Tutorias/Tutorias";
import Biography from "./components/Biography/Biography";
import Levels from "./components/Levels/Levels";
import Form from "./components/Form/Form";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Tutorias />
      <Biography />
      <Levels />
      <Form />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
