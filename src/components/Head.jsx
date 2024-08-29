import { useEffect, useState, useRef } from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { FaExpand } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import video480 from "../assets/head480.mp4";
import video720 from "../assets/head720.mp4";

const services = [
  "Aqiqa",
  "Maraka",
  "To'y hasham",
  "Qurbonlik xizmati",
];

const Head = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getVideoSource = () => {
    return window.innerWidth < 768 ? video480 : video720;
  };

  const openModal = () => {
    setIsModalOpen(true);
    if (videoRef.current && modalVideoRef.current) {
      videoRef.current.pause();
      modalVideoRef.current.currentTime = videoRef.current.currentTime;
      modalVideoRef.current.play();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (videoRef.current && modalVideoRef.current) {
      videoRef.current.currentTime = modalVideoRef.current.currentTime;
      videoRef.current.play();
    }
  };

  const toggleFullScreen = () => {
    if (modalVideoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        modalVideoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section
      className={`min-h-[100svh] flex items-center bg-background text-text head-section relative pt-6 md:pt-10 overflow-hidden section-bg ${hasShadow ? 'shadow-md' : ''}`}
      id="about"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Qurbonlik xizmati
            </h2>
            <ul className="space-y-4 md:space-y-6 text-lg sm:text-xl md:text-2xl">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 justify-center lg:justify-start"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <CiCircleCheck className="text-accent text-2xl md:text-3xl flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <a href="#delivery">
              <button
                className="bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-dark transition duration-300 ease-in-out text-lg sm:text-xl"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Buyurtma berish
              </button>
            </a>
          </div>

          <div
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
                loop
                muted
                autoPlay
              >
                <source src={getVideoSource()} type="video/mp4" />
                <track kind="captions" srcLang="uz" src="path/to/captions.vtt" label="O'zbekcha" />
                Afsuski, brauzeringiz video tegini qo&apos;llab-quvvatlamaydi.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition duration-300 group-hover:opacity-75"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Professional Xizmatlar</h3>
                <p className="text-sm sm:text-base md:text-lg opacity-90">Bizning tajribali jamoamiz sizning barcha ehtiyojlaringizni qondiradi</p>
              </div>
              <button
                onClick={openModal}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaExpand className="text-3xl md:text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
            <video
              ref={modalVideoRef}
              className="w-full h-full object-contain"
              controls
              playsInline
              loop
            >
              <source src={getVideoSource()} type="video/mp4" />
              <track kind="captions" srcLang="uz" src="path/to/captions.vtt" label="O'zbekcha" />
              Afsuski, brauzeringiz video tegini qo&apos;llab-quvvatlamaydi.
            </video>
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={toggleFullScreen}
                className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
              >
                <FaExpand className="text-2xl" />
              </button>
              <button
                onClick={closeModal}
                className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
              >
                <IoMdClose className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Head;
