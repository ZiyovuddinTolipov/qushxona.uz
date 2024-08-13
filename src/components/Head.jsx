import img from '../assets/bg.jpg'

const Head = () => {
  return (
    <section className="h-auto md:h-[90svh] text-white head-section relative" id="about">
     <div className="video-background">
        <div className="video-foreground">
          <iframe src="https://www.youtube.com/embed/tQI1y_-swcU?autoplay=1&mute=1&loop=1&playlist=tQI1y_-swcU&controls=0&showinfo=0&rel=0" frameBorder="0" allowFullScreen />
        </div>
      </div>
      <div className="content mx-auto max-w-[1200px] h-auto md:h-[100svh] flex flex-col-reverse md:flex-row relative">
        <div className="w-full md:w-1/2 flex flex-col justify-around px-5 py-5 md:py-0 gap-y-3 md:gap-y-0">
          <h1 className="text-2xl md:text-3xl text-white" data-aos="fade-right" data-aos-duration="700">#01 Biz haqimizda</h1>
          <div className='text-white mb-4' data-aos="fade-right" data-aos-duration="900">
            <h2 className="text-base" data-aos="fade-right">Lorem, ipsum.</h2>
            <h4 className="text-sm mt-2" data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Alias incidunt velit consectetur? Culpa, voluptates nesciunt.
            </h4>
          </div>
        </div>
        <div className='flex items-center justify-center px-5 mt-5 md:mt-0 md:p-10'>
          <img src={img} alt="" className='h-[250px] md:h-[400px] w-full' data-aos="zoom-in" data-aos-duration="900" loading='lazy' />
        </div>
      </div>
    </section>
  )
}

export default Head
