import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./scenes/login/Login";
import Header from "./scenes/global/Header";
import Home from "./scenes/home/Home";
import Footer from "./scenes/global/Footer";
import About from "./scenes/about/About";
import CartMenu from "./scenes/global/CartMenu";
import ProducList from "./scenes/producList/ProducList";

const ScrollTotop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <section className="w-full h-full bg-primary pt-10 flex items-center justify-center">
      <div className="w-[90%] h-full shadow-3xl relative before:w-3 before:top-0 before:absolute before: before:left-0 before:h-4">
        <BrowserRouter>
          <Header />
          <ScrollTotop />
          <Routes>
            <Route path="/auth" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/store" element={<ProducList />} />
          </Routes>
          <CartMenu />
          <Footer/>
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;
