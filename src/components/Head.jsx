import img from '../assets/bg.jpg'
const Head = () => {
  return (
    <section className="h-[90svh]  text-white head-section relative" id="about">
      <action className="mx-auto max-w-[1200px] h-[100svh] flex relative">
        <div className="w-1/2 h-full  flex flex-col justify-around ">
          <h1 className=" text-3xl text-white ">#01 Biz haqimizda</h1>
          <div className='text-white'>
            <h2 className="text-xl">Lorem, ipsum.</h2>
            <h4 className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Alias incidunt velit consectetur? Culpa, voluptates nesciunt.
            </h4>
          </div>
        </div>
        <div className='flex items-center justify-center p-10'>
          <img src={img} alt="" className='h-[400px] w-full'  />
        </div>
      </action>
    </section>
  )
}

export default Head