// App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemCard from "./components/ItemCard";
import "react-multi-carousel/lib/styles.css";
import data from "./data/item_data.json";
import SwiperComponent from "./components/swiper.js"; // Import the new SwiperComponent
import CarouselW from "./components/Carousel.js";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselW />
      <div className="px-6">
        <h3 className="font-semibold text-2xl title-smt mt-4">SMARTPHONE</h3>
        <hr class="hr bg-black border-2 border-opacity-50" />
        <SwiperComponent />
      </div>
      <div className="px-6">
        <h3 className="font-semibold text-2xl">LAPTOP</h3>
        <hr class="hr bg-black border-2 border-opacity-50" />
        <SwiperComponent />
      </div>
      <section>
        <h3 className="font-semibold text-2xl px-6">Produk Best Seller</h3>
        <div className="flex px-6">
          <div className="Best-Seller w-full grid grid-cols-6 gap-3">
            {data.map((obj, index) => (
              <ItemCard key={index} data={obj} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
