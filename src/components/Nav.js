import React from 'react'

function Nav() {
  return (
    <div className='fixed w-full'>
      <div className="flex justify-between items-center p-2 px-8 bg-black text-white">
        <div>
          <h1 className="text-3xl">LOGO</h1>
        </div>
        <div className="nav">
          <div className="nav-wrapper">
            <ul>
              <li className="mx-3">
                TRADE DEX
                <ul>
                  <li>
                    <a href="#">PANCAKESWAP</a>
                  </li>
                </ul>
              </li>
              <li className="mx-3">
                SOCIALS
                <ul>
                  <li>
                    <a href="#">TWITTER</a>
                  </li>
                  <li>
                    <a href="#">TELEGRAM</a>
                  </li>
                </ul>
              </li>
              <li>
                <button className="p-2 bg-blue-500 rounded-lg">BUY NOW</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav
