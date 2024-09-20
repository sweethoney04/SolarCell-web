import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './pages/Detail';
import Category from './pages/Category';
import Form from './pages/Form';
import './i18n';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/category" element={<Category />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
