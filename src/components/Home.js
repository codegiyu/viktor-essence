import React from 'react'
import Nav from './Nav'
import essenceLogoMain from "../images/essenceLogoMain.png";
import FeatureDesk from './FeatureDesk';
import FeaturesMobile from './FeaturesMobile';

function Home() {

  return (
    <main>
      <Nav />
      <div className="hero-section flex flex-col md:flex-row items-center w-full py-32">
        <div className="md:w-1/2 text-white md:p-30 p-10">
          <div>
            <h1 className="font-bold text-6xl headDecor" id="words">
              ESSENCE TOKEN
            </h1>
          </div>
          <h2 className="text-2xl md:mr-52 mt-8">
            Essence token is a cryptocurrency that aims to provide a means for
            human settlement and exchange within cryptocurrency sector.
          </h2>
        </div>
        <div className="md:w-1/2 flex justify-center items-center p-5 md:p-0">
          <img src={essenceLogoMain} alt="heroimg" className="" />
        </div>
      </div>
      <div className="sectionsBackground p-10 md:p-30">
        <h1 className="text-center md:text-left font-bold headDecor text-5xl">Features</h1>
        <div className='hidden md:block'>
          <FeatureDesk />
        </div>
        <div className='md:hidden block'>
          <FeaturesMobile/>
        </div>
      </div>
    </main>
  );
}

export default Home
