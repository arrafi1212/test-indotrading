import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, imageUrl: "slide1-indo.webp" },
    { id: 2, imageUrl: "slide2-indo.webp" },
    { id: 3, imageUrl: "slide3-indo.webp" },
    { id: 4, imageUrl: "slide4-indo.webp" },
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + items.length) % items.length;
    goToSlide(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % items.length;
    goToSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Pindah slide setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen dilepas
  }, [items.length]);

  return (
    <div className="relative mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0">
            <img
              src={item.imageUrl}
              alt={`Slide ${item.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-5 rounded-full text-3xl"
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-5 rounded-full text-3xl"
      >
        &gt;
      </button>
      <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-2 p-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
