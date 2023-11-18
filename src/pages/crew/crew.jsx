import commanderImage from "../../../public/assets/crew/image-douglas-hurley.png"
// import data from "../../../public/data/data"
function Crew (){
  return(
    <>
    <div className=" bg-crew-mobile md:bg-crew-tablet lg:overflow-hidden lg:bg-crew-desktop bg-cover bg-no-repeat h-screen w-screen  lg:grid-cols-template">

      {/*------------main section one------------- */}
      <div>
      <h1 className=" 
      md:text-20 md:tracking-3.38 lg:text-28 
      lg:tracking-4.72 pb-8 text-white uppercase sans-cond text-16 tracking-2.7 leading-normal"> 
        <span className="pr-4 font-bold text-black-accent">03</span> 
          Space launch 101
      </h1>
      <h2 className=" text-white  leading-normal 
            text-56 font-serif uppercase"><span>commander </span>Douglas Hurley
      </h2>
      <p>
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
      </p>

          
      </div>

      {/*------------end of main section one------------- */}



      {/*------------main section two------------- */}
      <div>
        <img src={commanderImage} alt="" />
      </div>
      {/*------------end of main section two------------- */}
    </div>
  </>
  )


}

export default Crew