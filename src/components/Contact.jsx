/* eslint-disable react/no-unescaped-entities */

const Contact = () => {
    return (
        <section className=" text-black relative" id="contact">
            <action className="mx-auto max-w-[1200px] h-[90svh] flex  py-16">
                <div className="w-1/2 h-full  flex flex-col justify-between ">
                    <h1 className=" text-3xl  ">#04 Biz bilan bog'lanish.</h1>
                    <div className=''>
                        <h2 className="text-xl">Bizni ijtimoiy tarmoqlarda kuzating</h2>
                        <div>social icons</div>
                    </div>
                </div>
                <div className=' w-1/2 h-full  flex flex-col justify-between '>
                    <h2 className="text-xl">Bizning joylashuv</h2>
                    <div>
                        xarita
                    </div>
                </div>
            </action>
        </section>
    )
}

export default Contact