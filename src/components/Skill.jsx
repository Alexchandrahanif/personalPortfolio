import React from "react";
import {
  expressjs,
  figma,
  git,
  javascript,
  mongo,
  nextjs,
  nodejs,
  postgresql,
  rjs,
  tailwindcss,
  typescript,
} from "../assets";

import Kapsul from "./Kapsul";

const Skill = () => {
  return (
    <div className="w-full py-16 px-4 flex flex-col gap-6 dark:bg-dark">
      <div className="flex flex-col justify-center items-center">
        <Kapsul isi="Skills" />
        <p className="text-slate-500 text-center">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-14 justify-center">
        <img src={javascript} alt="javascript" />
        <img src={typescript} alt="typescript" />
        <img src={nodejs} alt="nodejs" />
        <img src={expressjs} alt="expressjs" />
        <img src={mongo} alt="mongo" />
        <img src={rjs} alt="reactjs" />
        <img src={git} alt="git" />
        <img src={postgresql} alt="postgresql" />
        <img src={nextjs} alt="next" />
        <img src={tailwindcss} alt="tailwindcss" />
        <img src={figma} alt="reactjs" />
      </div>
    </div>
  );
};

export default Skill;
