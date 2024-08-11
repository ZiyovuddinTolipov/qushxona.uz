import img from '../assets/bg.jpg'
const Head = () => {
  return (
    <section className="h-auto md:h-[90svh]  text-white head-section relative" id="about">
      <action className="mx-auto max-w-[1200px] h-auto md:h-[100svh] flex flex-col-reverse md:flex-row relative">
        <div className="w-full md:w-1/2 flex flex-col justify-around px-5">
          <h1 className=" text-3xl text-white ">#01 Biz haqimizda</h1>
          <div className='text-white'>
            <h2 className="text-xl">Lorem, ipsum.</h2>
            <h4 className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Alias incidunt velit consectetur? Culpa, voluptates nesciunt.
            </h4>
          </div>
        </div>
        <div className='flex items-center justify-center px-5 mt-5 md:mt-0 md:p-10'>
          <img src={img} alt="" className='h-[400px] w-full'  />
        </div>
      </action>
    </section>
  )
}

export default Head