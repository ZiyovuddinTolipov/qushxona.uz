import { CiCircleCheck } from "react-icons/ci";
const Head = () => {
  return (
    <section className="h-auto md:h-[90svh] text-white head-section relative pt-10 bg-gray-950" id="about">
      <div className="content mx-auto max-w-[1200px] min-h-[70svh] md:h-[100svh] flex flex-row relative px-5">
        <div className="w-1/2  md:w-1/2 flex flex-col justify-around py-5 md:py-0 gap-y-3 md:gap-y-0">
          <div className='text-white mb-4' data-aos="fade-right" data-aos-duration="900">
            <h2 className="text-2xl" data-aos="fade-right">Qurbonlik xizmati.</h2>
            <ul className='mt-5 text-xl'>
              <li ><CiCircleCheck className='inline' /> Aqiqa</li>
              <li ><CiCircleCheck className='inline' /> Maraka</li>
              <li ><CiCircleCheck className='inline' /> To’y hasham</li>
              <li ><CiCircleCheck className='inline' /> Qurbonlik xizmati</li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-center  w-1/2'>
          {/* <video className="max-h-[500px]" src="https://www.dropbox.com/scl/fi/dlfgbncqr8pwf1hmod69a/qushxona.uz-20240814-0004.mp4?rlkey=jh3j8eyei9nxffsmt2boeb9uw&dl=1" autoPlay controls></video> */}
        </div>
      </div>
    </section>
  )
}

export default Head
