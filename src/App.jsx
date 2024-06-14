import Hero from "./views/hero/Hero";
import FormDataProvider from "/src/data/context/FormDataContext";
import Maker from "./views/maker/Maker";
import Parameters from "./views/parameters/Parameters";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";

export default function App() {
  return (
    <FormDataProvider>
      <Header />
      <Hero />
      <main className="xl:grid grid-cols-10 shadow-md">
        <Parameters />
        <Maker />
      </main>
      <Footer />
    </FormDataProvider> 
  )
}