import {  useState, useRef } from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import video480 from "../assets/head480.mp4";
import video720 from "../assets/head720.mp4";

const services = [
  "Aqiqa",
  "Maraka",
  "To'y hasham",
  "Qurbonlik xizmati",
];

const Head = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const getVideoSource = () => {
    return window.innerWidth < 768 ? video480 : video720;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      className="min-h-[100svh] flex items-center relative pt-6 md:pt-10 overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          loop
          muted={isMuted}
          autoPlay
        >
          <source src={getVideoSource()} type="video/mp4" />
          <track kind="captions" srcLang="uz" src="path/to/captions.vtt" label="O'zbekcha" />
          Afsuski, brauzeringiz video tegini qo&apos;llab-quvvatlamaydi.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
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
                  <span className="text-white">{service}</span>
                </li>
              ))}
            </ul>
            <a href="#delivery" className='mt-4'>
              <button
                className="bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-dark transition duration-300 ease-in-out text-lg sm:text-xl"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Buyurtma berish
              </button>
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="flex space-x-6 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full p-3 shadow-lg">
              <button
                onClick={togglePlay}
                className="text-white hover:text-accent transition duration-300 p-3 rounded-full hover:bg-white/20"
              >
                {isPlaying ? <FaPause size={32} /> : <FaPlay size={32} />}
              </button>
              <button
                onClick={toggleMute}
                className="text-white hover:text-accent transition duration-300 p-3 rounded-full hover:bg-white/20"
              >
                {isMuted ? <FaVolumeMute size={32} /> : <FaVolumeUp size={32} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
