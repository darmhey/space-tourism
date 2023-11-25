import data from "../../../public/data/data";

import { useState } from "react";

function Destination() {
  const [active, setActive] = useState(1);

  return (
    <>
      <div
        className=" px-6 bg-destination-mobile bg-cover bg-no-repeat 
        md:bg-destination-tablet lg:bg-destination-desktop lg:overflow-hidden 
      "
      >
        <div className=" h-16"></div>
        {/* <div className=" bg-black mb-8 ">
              <Navigation />
          </div> */}

        <div className=" ">
          <div className=" flex justify-center md:justify-start  lg:mt-24 md:mb-20 lg:mx-40">
            <h1
              className=" md:text-20 md:tracking-3.38 lg:text-28 lg:tracking-4.72 pb-8 
          text-white uppercase sans-cond text-16 tracking-2.7 leading-normal"
            >
              <span className="pr-4 font-bold text-black-accent">01</span>
              Pick your destination{" "}
            </h1>
          </div>

          <div className="lg:flex lg:flex-row lg:justify-start  lg:max-w-7xl  ">
            <div className="md:w-3/5 w-3/5 lg:w-[28rem] lg:h-[28rem] mx-auto mb-8">
              <img
                className=""
                src={data.destinations[active].images.png}
                alt="planet moon"
              />
            </div>

            <div className="lg:flex lg:flex-col lg:justify-start  lg:items-start lg:px-0">
              <div className=" lg:text-start flex justify-center text-12 tracking-2.7 leading-normal ">
                <button
                  onClick={() => setActive(0)}
                  aria-selected={active === 0 ? "true" : "false"}
                  className="uppercase pb-1 border-black-accent    aria-selected:text-white 
              aria-selected:border-white aria-selected:border-b-4 text-light lg:mr-8  mr-4 hover:border-b-4
              md:text-16 md:tracking-2.7 
              
              "
                >
                  Moon
                </button>
                <button
                  onClick={() => setActive(1)}
                  aria-selected={active === 1 ? "true" : "false"}
                  className="uppercase pb-1 border-black-accent aria-selected:border-b-4 aria-selected:text-white 
                aria-selected:border-white text-light hover:border-b-4 mr-4 lg:mr-8 
                md:text-16 md:tracking-2.7 
                "
                >
                  Mars
                </button>
                <button
                  onClick={() => setActive(2)}
                  aria-selected={active === 2 ? "true" : "false"}
                  className="uppercase pb-1 aria-selected:text-white aria-selected:border-b-4
                  aria-selected:border-white border-black-accent text-light hover:border-b-4 mr-4 lg:mr-8  md:text-16 md:tracking-2.7 "
                >
                  Europa
                </button>
                <button
                  onClick={() => setActive(3)}
                  aria-selected={active === 3 ? "true" : "false"}
                  className="uppercase pb-1 aria-selected:text-white aria-selected:border-white 
                aria-selected:border-b-4 border-black-accent text-light hover:border-b-4 md:text-16 md:tracking-2.7 "
                >
                  Titan
                </button>
              </div>

              <div
                className="flex justify-center  text-white  leading-normal 
            md:text-80
            lg:text-100 
            text-56 font-Bellefair uppercase"
              >
                <h1>{data.destinations[active].name}</h1>
              </div>

              <div className=" lg:w-[28rem]">
                <p
                  className="text-light text-center lg:text-left text-15 pb-8 leading-7
              border-b border-black-accent font-light
              md:text-16 md:mx-24
              lg:text-18 lg:mx-0
              "
                >
                  {data.destinations[active].description}
                </p>
              </div>

              <div className=" md:flex md:flex-row md:justify-center pt-8 lg:text-left text-center">
                <div className="text-light md:pr-16">
                  <h3
                    className=" text-14 tracking-2.36 leading-normal uppercase pb-2
                md:text-14 md:tracking-2.36 
              "
                  >
                    Avg. Distance
                  </h3>
                  <p
                    className=" text-white text-28 uppercase font-Bellefair pb-4
                md:text-28
              "
                  >
                    {data.destinations[active].distance}
                  </p>
                </div>

                <div className="text-light ">
                  <h3
                    className=" text-14 tracking-2.36 leading-normal uppercase pb-2
                md:text-14 md:tracking-2.36
              "
                  >
                    est. travel time
                  </h3>
                  <p className="  text-white text-28 uppercase font-Bellefair md:text-28">
                    {data.destinations[active].travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:h-4  h-8"></div>
        </div>
      </div>
    </>
  );
}

export default Destination;
