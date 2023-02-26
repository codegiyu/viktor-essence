import React, { useState } from 'react'
import { Data } from './FeatureData';
import Group from "../images/group.svg";

function FeaturesMobile() {
  const [words, setWords] = useState(false);

  return (
    <div>
      <div className="flex flex-col">
        {Data.map((item) => {
          const {id, header, info} = item;
          return (
              <div key={id} className="bg-slate-200 rounded-xl p-5">
                <div className="flex items-center mb-5">
                  <img src={Group} alt="community logo" className="font-bold" />
                  <h3 className="font-bold text-2xl ml-4">{header}</h3>
                </div>
                <p>{info}</p>
              </div>
          );
        })}
      </div>
    </div>
  )
}

export default FeaturesMobile
