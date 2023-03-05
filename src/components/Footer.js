import React from 'react'
import essenceLogo from "../images/essenceLogoMain.png";

function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div>
          <img src={essenceLogo} alt="logo" className="w-1/5" />
        </div>
        <div>
          <p className="text-white text-sm md:text-xl">BSC scan</p>
          <p className="text-white text-sm md:text-xl">Poocoin Chart</p>
          <p className="text-white text-sm md:text-xl">DexTool</p>
        </div>
        <div>
          <p className="text-white text-sm md:text-xl">Contract</p>
          <p className="text-white text-sm md:text-xl">Buy Now</p>
          <p className="text-white text-sm md:text-xl">How to Buy</p>
        </div>
        <div>
          <p className="text-white text-sm md:text-xl">Contract</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
