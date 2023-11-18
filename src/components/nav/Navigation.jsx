function Navigation (){

  return (
   <div>
    <nav className='flex flex-row items-center pl-4 md:pl-8 lg:space-x-20 md:space-x-2 text-[#D0D6F9] pt-4 lg:pt-8'>
    <img src="/assets/shared/Group 2.svg" alt="logo" className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]" />
    <div class="w-[400px] h-1 bg-white opacity-25 hidden lg:block"></div>
    <div className="flex-grow"></div> {/* This div will take up the remaining space */}
  <div>
  <img src="/assets/shared/icon-hamburger.svg" alt="logo" className="md:hidden cursor-pointer mr-4" />
  </div>
    <div className='navbars hidden md:flex text-white md:text-sm  flex-row space-x-6  py-6 pr-8 md:bg-white md:bg-opacity-10 lg:bg-black lg:bg-opacity-80 lg:pl-20  lg:pr-40'>
      <div className='flex flex-row space-x-2 cursor-pointer'>
        <p className='hidden lg:block'>00</p>
        <p>HOME</p>
      </div>
      <div className='flex flex-row space-x-2 cursor-pointer'>
        <p className='hidden lg:block'>01</p>
        <p>DESTINATION</p>
      </div>
      <div className='flex flex-row space-x-2 cursor-pointer'>
        <p className='hidden lg:block'>02</p>
        <p>CREW</p>
      </div>
      <div className='flex flex-row space-x-2 cursor-pointer'>
        <p className='hidden lg:block'>03</p>
        <p>TECHNOLOGY</p>
      </div>
    </div>
  </nav>
  </div>
    
  )
}

export default Navigation