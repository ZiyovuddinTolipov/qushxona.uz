import { CiCircleCheck } from "react-icons/ci";

const services = [
  "Aqiqa",
  "Maraka",
  "To’y hasham",
  "Qurbonlik xizmati",
];

const Head = () => {
  return (
    <section
      className="h-auto md:h-[90svh] text-white head-section relative pt-10 bg-gray-950"
      id="about"
    >
      <div className="content mx-auto max-w-[1200px] min-h-[70svh] md:h-[100svh] flex flex-row relative px-5">
        <div className="w-1/2 md:w-1/2 flex flex-col justify-around py-5 md:py-0 gap-y-3 md:gap-y-0">
          <div
            className="text-white mb-4"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h2 className="text-2xl" data-aos="fade-right">
              Qurbonlik xizmati.
            </h2>
            <ul className="mt-5 text-xl">
              {services.map((service, index) => (
                <li key={index}>
                  <CiCircleCheck className="inline" /> {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <video className="max-h-[400px] h-full w-[300px]" controls>
            <source
              src="https://www.dropbox.com/scl/fi/t4t43kqtwc3knjiqqt34u/qushxona.uz-20240814-0003.mp4?rlkey=6lmzu16izpm9qwolrwxzxvfxp&st=u818syax&dl=1"
              type="video/mp4"
            />
            <track
              kind="captions"
              srcLang="uz" // Change this to the appropriate language code
              src="path/to/captions.vtt" // Provide the path to your VTT file
              label="O'zbekcha" // Change the label as needed
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Head;
