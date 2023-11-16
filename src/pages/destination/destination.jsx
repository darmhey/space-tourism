// import Navigation from "../../components/nav/Navigation"
//import moonImage from "../../../public/assets/destination/image-moon.png"
import data from "../../../public/data/data"

import { useState } from "react"

function Destination () {


  const [active, setActive] = useState(0)

  
  return (
    <>
 
      
      <div className=" px-6 bg-destination-mobile bg-cover bg-no-repeat
        md:bg-destination-tablet lg:bg-destination-desktop
      ">
        <div className=" h-16"></div>
          {/* <div className=" bg-black mb-8 ">
              <Navigation />
          </div> */}
        
        <div className="flex flex-col justify-center items-center space-y-6">

          {/* --------title and image--------- */}
        <div>
        <div className=" ">
          <h1 className=" md:text-20 md:tracking-3.38 lg:text-28 lg:tracking-4.72 
          text-white uppercase sans-cond text-16 tracking-2.7 leading-normal"> 
          <span className="pr-4 font-bold text-black-accent">01</span> 
          Pick your destination</h1>
        </div>
          <div className="md:w-3/5 w-3/5 mx-auto ">
            <img src={data.destinations[active].images.png} alt="planet moon" /> 
          </div> 
        </div>
       
          <div className="  text-12 tracking-2.7 leading-normal ">
            <button 
            onClick={() => setActive(0)}
            aria-selected={active === 0 ? "true" : "false"} 
              className="uppercase pb-1 border-black-accent    aria-selected:text-white 
              aria-selected:border-white aria-selected:border-b-4 text-light  mr-4 hover:border-b-4
              md:text-16 md:tracking-2.7 
              
              ">
                Moon
            </button>
            <button
           onClick={() => setActive(1)}
            aria-selected={active === 1 ? "true" : "false"}  
               className="uppercase pb-1 border-black-accent aria-selected:border-b-4 aria-selected:text-white 
                aria-selected:border-white text-light hover:border-b-4 mr-4
                md:text-16 md:tracking-2.7 
                ">
                Mars
            </button>
            <button
            onClick={() => setActive(2)}
            aria-selected={active === 2 ? "true" : "false"}  
                className="uppercase pb-1 aria-selected:text-white aria-selected:border-b-4
                  aria-selected:border-white border-black-accent text-light hover:border-b-4 mr-4 md:text-16 md:tracking-2.7 ">
                  Europa
            </button>
            <button
            onClick={() => setActive(3)}
            aria-selected={active === 3 ? "true" : "false"}  
                className="uppercase pb-1 aria-selected:text-white aria-selected:border-white
                aria-selected:border-b-4 border-black-accent text-light hover:border-b-4 md:text-16 md:tracking-2.7 " >
                  Titan
            </button>
          </div>
          <div className="text-white py-0 leading-normal 
            md:text-80
            lg:text-100 
            text-56 font-serif uppercase">
            <h1>{data.destinations[active].name}</h1>
          </div>
          <div>
            <p className="text-light text-center text-15 pb-8 leading-7
             border-b border-black-accent font-light
             md:text-16 
             lg:text-18 
             ">
               {data.destinations[active].description}
              </p>
          </div>

          <div className=" text-center">
            <div className="text-light ">
              <h3 className=" text-14 tracking-2.36 leading-normal uppercase pb-2
                md:text-14 md:tracking-2.36
              ">
                  {data.destinations[active].distance}
              </h3>
              <p className=" text-white text-28 uppercase font-serif space-y-8 pb-4
                md:text-28
              ">
                384,400 km
              </p>
            </div>

            <div className="text-light ">
              <h3 className=" text-14 tracking-2.36 leading-normal uppercase pb-2
                md:text-14 md:tracking-2.36
              ">
                {data.destinations[active].travel}
              </h3>
              <p className="  text-white text-28 uppercase font-serif md:text-28">
                3 days
             </p>
            </div>
          </div>

          <div className=" h-8"></div>
        
        </div>
        
      </div>
    </>
  )

}

export default Destination