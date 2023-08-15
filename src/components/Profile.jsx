import React from "react";
import { email1, email2, github1, titik1, lokasi1 } from "../assets";

const Profile = () => {
  return (
    <div className="w-full h-[950px]  py-[70px] px-4 dark:bg-dark">
      <div className=" w-full h-[820px] py-8 px-2 flex flex-col gap-12">
        {/*  */}
        <div className="w-full h-[300px] bg-slate-50 flex justify-center items-center">
          <p>Foto</p>
        </div>
        <div className="w-full  h-[400px] flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-poppins font-semibold dark:text-white">
              Hi, I'm Alex 👋
            </p>
            <p className="text-slate-800 text-sm dark:text-white">
              I'm a Fullstack JavaScript Developer with a specialization in
              backend development, complemented by frontend proficiency. Excels
              in building robust server-side applications, designing efficient
              APIs, and implementing databases. skilled in crafting captivating
              and user-centric frontend interfaces using HTML, CSS, and React
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <img src={lokasi1} alt="" />
              <p className="text-sm dark:text-white">Jakarta, Indonesia</p>
            </div>
            <div className="flex gap-1">
              <img src={titik1} alt="" />
              <p className="text-sm dark:text-white">
                Available for New Project
              </p>
            </div>
          </div>
          <div className="flex ">
            <img src={github1} alt="github" />
            <img src={email2} alt="email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
