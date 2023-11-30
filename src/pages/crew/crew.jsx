import { useState } from "react";
import data from "../../../public/data/data";

function Crew() {
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="bg-crew-mobile md:bg-crew-tablet lg:overflow-hidden lg:bg-crew-desktop bg-cover bg-no-repeat lg:px-0 px-10 ">
        <div className=" lg:grid-cols-template pt-32 lg:mx-[10rem]">
          <h1
            className=" md:text-20 md:tracking-3.38 lg:text-28 pb-14  lg:pb-0 text-center md:text-left 
            text-white uppercase font-Barlow text-16 tracking-2.7 lg:tracking-4.72 leading-normal lg:mt-10 "
          >
            <span className="pr-4 font-bold text-black-accent pb-4  ">02</span>
            Meet your crew
          </h1>
        </div>

        <div className=" lg:grid lg:grid-cols-template gap-8  ">
          {/*------------main section one------------- */}

          <div className="lg:col-start-2 lg:col-end-3 ">
            <div className=" flex flex-col justify-center align-middle ">
              <h2
                className="text-24 lg:text-left  md:text-40  lg:text-52  text-white  leading-none 
              uppercase font-Bellefair pb-8 lg:pb-6 text-center lg:pt-32"
              >
                <span className=" block text-bck  text-16 md:text-24 lg:text-32 lg:pb-4 pb-4">
                  {data.crew[active].role}
                </span>
                {data.crew[active].name}
              </h2>
              <p
                className=" text-light text-center lg:text-left text-15 lg:pb-24 leading-7
                 font-light  
                md:text-16 md:mx-24
                lg:text-18 lg:mx-0 lg:w-[27.7rem]"
              >
                {data.crew[active].bio}
              </p>

              <div className="flex flex-row gap-6 pt-4 justify-center lg:justify-start">
                <button
                  onClick={() => setActive(0)}
                  aria-selected={active === 0 ? "true" : "false"}
                  className=" border-0 rounded-full p-2 bg-black-accent 
                  hover:bg-bck aria-selected:bg-white"
                ></button>
                <button
                  onClick={() => setActive(1)}
                  aria-selected={active === 1 ? "true" : "false"}
                  className=" border-0 rounded-full p-2 bg-black-accent 
                  hover:bg-bck aria-selected:bg-white"
                ></button>
                <button
                  onClick={() => setActive(2)}
                  aria-selected={active === 2 ? "true" : "false"}
                  className=" border-0 rounded-full p-2 bg-black-accent 
                  hover:bg-bck aria-selected:bg-white"
                ></button>
                <button
                  onClick={() => setActive(3)}
                  aria-selected={active === 3 ? "true" : "false"}
                  className=" border-0 rounded-full p-2 bg-black-accent 
                  hover:bg-bck aria-selected:bg-white"
                ></button>
              </div>
            </div>
          </div>

          {/*------------end of main section one------------- */}

          {/*------------main section two------------- */}

          <div className="  col-start-3 col-end-4 border-b border-black-accent  mt-14 lg:mt-0">
            <img src={data.crew[active].images.png} alt="Doulas Hurley" />
          </div>
          {/*------------end of main section two------------- */}
        </div>
      </div>
    </>
  );
}

export default Crew;
