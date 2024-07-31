
import model from '../../assets/model.jpg'

const Hero = () => {
  return (
    <div className="relative z-10">
        <div className=' '>
            <img src={model} alt=""
            className=" w-[500px] md:w-full h-[80vh]  md:h-[90vh] object-cover object-center" />
        </div>

        <div className="absolute text-center lg:text-left top-[1%] lg:top-[22%] md:left-[7%]">
            <h1 className=" text-xl  md:text-3xl; lg:text-4xl xl:text-5xl ; font-bold text-red-500">
                Discover your Next Adventure!</h1>

             <p className="text-center text-md md:text-2xl mt-4 ml-4 md:ml-1  font-semibold">
            Shop our Latest Arrival & Unleash Your Style</p>   
        </div>
    </div>
  )
}

export default Hero
