import React from "react";
import Kapsul from "./Kapsul";

const Exprerience = () => {
  return (
    <div className="w-full py-16 px-4 flex flex-col gap-6 bg-slate-50 dark:bg-dark sm:px-[80px] ">
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center">
        <Kapsul isi="Experience" />
        <p className="text-slate-500 text-center">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>

      {/* CARD */}
      <div className="=w-full sm:px-[32px]">
        <div className="w-full bg-white rounded-lg shadow-lg p-8 flex flex-col sm:flex-row sm:justify-between ">
          <p className="text-2xl font-semibold text-green-700 mb-2 order-1">
            PT. Citra Mandiri Negara
          </p>
          <p className="mb-3 order-2 sm:order-3">Jan 2022 - Present</p>
          <div className="order-3 sm:order-2">
            <p className="text-lg font-semibold mb-3">Backend Developer</p>
            <ul className="list-disc list-inside">
              <li>designing backend the company's internal system</li>
              <li>designing backend subsidiary systems</li>
              <li>designing backend systems introduce products to consumers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprerience;
