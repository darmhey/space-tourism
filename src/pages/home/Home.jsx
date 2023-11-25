function Home (){

  return (
     <div className="bg-cover bg-home-background3 md:bg-home-background2 lg:bg-home-background1 w-screen h-screen overflow-x-hidden pb-8 lg:pb-16">

      <div className='container mx-auto pt-16 md:pt-28 lg:pt-44 flex flex-col justify-center items-center text-center  lg:flex-row'>
        {/* Left Content */}
        <div className="left-content w-full lg:w-3/5 lg:pr-8">
          <div className="px-8 md:px-0 lg:w-full lg:pl-40">
            {" "}
            {/* Adjusted width for larger screens */}
            <h3 className="lg:text-3xl text-[16px] lg:mb-4 font-Barlow md:text-[20px] lg:text-[28px] text-[#D0D6F9]">
              SO, YOU WANT TO TRAVEL TO
            </h3>
            <h3 className="text-[#FFFFFF] text-[80px] lg:text-3xl font-Bellefair md:text-[150px]  lg:text-[150px]">
              SPACE
            </h3>
            <p className="text-[#D0D6F9] text-[15px] mt-4 font-Barlow md:text-[18px] lg:text-[18px] md:mx-52 lg:mx-0">
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className='w-full right-content  ml-auto  justify-center items-center flex pt-20 lg:pr-60'> {/* Adjusted padding for larger screens */}
          <img src="/assets/home/Group.png" alt="Description of the image" className="lg:ml-80 lg:mt-28 w-[150px] h-[150px] md:w-[244px] md:h-[242px] lg:w-[274px] lg:h-[274px]" />
        </div>
      </div>
    </div>
  );
}

export default Home;
