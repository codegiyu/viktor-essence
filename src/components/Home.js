import React from 'react'
import Nav from './Nav'
import HeroImg from "../images/heroImg.jpg";

function Home() {
  return (
    <main>
      <Nav />
      <div className="hero-section flex items-center w-full">
        <div className="w-1/2 text-black">
          <p>
            Essence token is a cryptocurrency that aims to provide a means for
            human settlement and exchange within cryptocurrency sector.
          </p>
        </div>
        <div className='w-1/2'>
          <img src={HeroImg} alt="heroimg" className="" />
        </div>
      </div>
    </main>
  );
}

export default Home
