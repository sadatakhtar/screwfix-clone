function BottomNav() {
  return (
    <div className='flex justify-evenly text-[#0053a0] text-sm font-bold p-1 '>
      <div className=" animate-pulse sm:animate-none">
        <h4>CLICK & COLLECT</h4>
      </div>

      <div className='hidden sm:flex' >
          <h4>FREE DELIVERY</h4>
      </div>

      <div className='hidden sm:flex'>
          <h4>SERVICE UPDATES</h4>
      </div>
    </div>
  );
}

export default BottomNav;
