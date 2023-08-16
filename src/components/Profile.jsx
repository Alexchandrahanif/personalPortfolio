import React from "react";
import { email1, email2, github1, titik1, lokasi1 } from "../assets";

const handleGithub = () => {
  const fileUrl = "https://github.com/Alexchandrahanif";
  window.open(fileUrl, "_blank");
};
const Profile = () => {
  return (
    <div className="w-full  pt-[70px] px-4  dark:bg-dark">
      <div className=" w-full py-8 px-2 flex flex-col sm:flex-row-reverse sm:px-12 gap-12">
        {/*  */}
        <div className="sm:px-8">
          <div className="w-full h-[300px] bg-slate-50 flex justify-center items-center sm:w-[500px]">
            <p>Foto</p>
          </div>
        </div>
        <div className="w-full   flex flex-col gap-12">
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
          <div className="flex gap-2 ">
            <button
              className="cursor-pointer"
              onClick={() => {
                handleGithub();
              }}
            >
              <img src={github1} alt="github" />
            </button>
            <button>
              <a
                href="https://www.linkedin.com/in/alex-chandra-hanif-aa9955236/"
                target="_blank"
              >
                <svg
                  width="20px"
                  class="fill-current"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 dark:bg-slate-600"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
