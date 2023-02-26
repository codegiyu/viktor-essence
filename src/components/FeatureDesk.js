import React from 'react'
import Group from "../images/group.svg";
import {Data} from "./FeatureData"


function FeatureDesk() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3 grid-flow-col gap-8 mt-10">
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
  );
}

export default FeatureDesk
