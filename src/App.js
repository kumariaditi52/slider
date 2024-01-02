import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Product';
import Slider from './components/Slider/Slider';
import Testimonials from './components/Testimonials/Testimonial';
import Virtual from './components/Virtual/Virtual';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
    <Virtual />
    <Products />
    <Testimonials />
    <Footer />
    </div>
  );
}

export default App;
