'use client'

import { useState } from 'react';
import { data } from "./data";

export default function Accordion() {
  const [selectedItem, setSelectedItem] = useState(null);
  const toggle = (i: any) => {
    if (selectedItem === i) {
      return setSelectedItem(null);
    }
    setSelectedItem(i);
  };
  return (
    <div>
      {data?.map((el, i) => {
        return (
          <div
            className="sm:w-[427px] w-[100%] mb-[12px] text-[14px] text-[#fff]"
            key={i}
          >
            <button className="w-[100%] py-[13px] border-b-[1px] border-b-[#D434FE] flex items-center  justify-between" onClick={() => toggle(i)}>
              <p className="max-[620px]:text-left">{el?.question}</p>
              <p className="text-[20px] text-[#D434FE]">
                {selectedItem === i ? "-" : "+"}
              </p>
            </button>

            {selectedItem === i && <div>{el?.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}

