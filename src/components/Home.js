import React from 'react'
import Nav from './Nav'
import essenceLogoMain from "../images/essenceLogoMain.png";
import Group from "../images/group.svg";

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
        <h1 className="font-bold headDecor text-5xl">Features</h1>
        <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-8 mt-5">
          <div className="bg-slate-200 rounded-xl p-5">
            <div className="flex items-center mb-5">
              <img src={Group} alt="community logo" className="font-bold" />
              <h3 className="font-bold text-2xl ml-4">Community Support</h3>
            </div>
            <p>
              Essence comprises of a well-built experienced team which is backed
              by the massive Support of a good community, working together to
              ensure that the set goals and success level is attained. Great
              impact to the outside world is certain because we work with great
              passion for great things.
            </p>
          </div>
          <div className="bg-slate-200 rounded-xl p-5">
            <div className="flex items-center mb-5">
              <img src={Group} alt="community logo" className="font-bold" />
              <h3 className="font-bold text-2xl ml-4">Community Support</h3>
            </div>
            <p>
              Essence comprises of a well-built experienced team which is backed
              by the massive Support of a good community, working together to
              ensure that the set goals and success level is attained. Great
              impact to the outside world is certain because we work with great
              passion for great things.
            </p>
          </div>
          <div className="bg-slate-200 rounded-xl p-5">
            <div className="flex items-center mb-5">
              <img src={Group} alt="community logo" className="font-bold" />
              <h3 className="font-bold text-2xl ml-4">Community Support</h3>
            </div>
            <p>
              Essence comprises of a well-built experienced team which is backed
              by the massive Support of a good community, working together to
              ensure that the set goals and success level is attained. Great
              impact to the outside world is certain because we work with great
              passion for great things.
            </p>
          </div>
          <div className="bg-slate-200 rounded-xl p-5">
            <div className="flex items-center mb-5">
              <img src={Group} alt="community logo" className="font-bold" />
              <h3 className="font-bold text-2xl ml-4">Community Support</h3>
            </div>
            <p>
              Essence comprises of a well-built experienced team which is backed
              by the massive Support of a good community, working together to
              ensure that the set goals and success level is attained. Great
              impact to the outside world is certain because we work with great
              passion for great things.
            </p>
          </div>
          <div className="bg-slate-200 rounded-xl p-5">
            <div className="flex items-center mb-5">
              <img src={Group} alt="community logo" className="font-bold" />
              <h3 className="font-bold text-2xl ml-4">Community Support</h3>
            </div>
            <p>
              Essence comprises of a well-built experienced team which is backed
              by the massive Support of a good community, working together to
              ensure that the set goals and success level is attained. Great
              impact to the outside world is certain because we work with great
              passion for great things.
            </p>
          </div>
          <div className="bg-slate-200 rounded-xl p-5">
            <div className="flex items-center mb-5">
              <img src={Group} alt="community logo" className="font-bold" />
              <h3 className="font-bold text-2xl ml-4">Community Support</h3>
            </div>
            <p>
              Essence comprises of a well-built experienced team which is backed
              by the massive Support of a good community, working together to
              ensure that the set goals and success level is attained. Great
              impact to the outside world is certain because we work with great
              passion for great things.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home
