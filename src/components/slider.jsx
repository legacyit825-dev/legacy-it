import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const slides = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "slides.webDevelopment",
    path: "/services/web-development",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "slides.mobileDevelopment",
    path: "/services/mobile-app-development",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "slides.graphicDesign",
    path: "/services/graphic-designing",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "slides.videoEditing",
    path: "/services/video-editing",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "slides.digitalMarketing",
    path: "/services/digital-marketing",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation()

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[calc(100vh-90px)] object-cover"
            />

            {/* Caption */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2>
                <Link
                  to={slide.path}
                  className="text-white text-2xl md:text-4xl font-bold hover:text-sky-400 transition-colors duration-300 cursor-pointer"
                >
                  {t(slide.title)}
                </Link>
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute hidden md:block left-3 top-1/2 -translate-y-1/2 text-white p-3 md:text-6xl text-4xl "
      >
        <GrFormPrevious />
      </button>

      <button
        onClick={nextSlide}
        className="absolute hidden md:block right-3 top-1/2 -translate-y-1/2 text-white md:text-6xl text-4xl p-3"
      >
        <GrFormNext />

      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${current === index ? "bg-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
