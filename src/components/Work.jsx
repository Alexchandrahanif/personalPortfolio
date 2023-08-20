import React from "react";
import { berandacfi, berandacmn, berandacprint } from "../assets";
import Kapsul from "./Kapsul";

const Work = () => {
  return (
    <div className="w-full py-16 px-4 flex flex-col gap-6  dark:bg-dark sm:px-[96px] ">
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center">
        <Kapsul isi="Work" />
        <p className="text-slate-500 dark:text-textDark2 text-center sm:text-lg">
          Some of the noteworthy projects I have built:
        </p>
      </div>

      {/* CARD */}
      {/* CMN */}
      <div>
        <div className="border-[0.5px] border-slate-100 shadow-md rounded-xl flex flex-col sm:flex-row w-full dark:border-cardDark">
          <div className="w-full p-8 bg-slate-50  flex justify-center sm:w-1/2 dark:bg-cardDark rounded-xl ">
            <img src={berandacmn} alt="" className="rounded-md" />
          </div>
          <div className="p-8 sm:w-1/2">
            <p className="font-semibold text-xl mb-3 dark:text-textDark sm:text-2xl">
              <a
                href="http://sistem.printhink.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                Printhink
              </a>
            </p>
            <p className="mb-3 dark:text-textDark2 sm:text-lg">
              Designed backend systems to manage the company's internal data, as
              well as record company financial data in an integrated manner with
              the Jurnal application from Mekari as well.
            </p>
            <div className="flex flex-wrap gap-x-3">
              <Kapsul isi="Node.js" />
              <Kapsul isi="Express" />
              <Kapsul isi="PostgreSQL" />
              <Kapsul isi="Sequelize" />
              <Kapsul isi="Multer" />
              <Kapsul isi="Nodemailer" />
              <Kapsul isi="Bcryptjs" />
              <Kapsul isi="JWT" />
              <Kapsul isi="Jurnal-API" />
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>

      {/* Citra Factory */}
      <div>
        <div className="border-[0.5px] border-slate-100 shadow-md rounded-xl flex flex-col sm:flex-row w-full dark:border-cardDark">
          <div className="w-full p-8 bg-slate-50  flex justify-center sm:w-1/2 dark:bg-cardDark rounded-xl ">
            <img src={berandacfi} alt="" className="rounded-md" />
          </div>
          <div className="p-8 sm:w-1/2  ">
            <p className="font-semibold text-xl mb-3 dark:text-textDark sm:text-2xl">
              {/* <a
                href="http://sistem.printhink.id"
                target="_blank"
                rel="noopener noreferrer"
              > */}
              Citra Factory
              {/* </a> */}
            </p>
            <p className="mb-3 dark:text-textDark2 sm:text-lg">
              Designing backend systems for warehouse needs and taking care of
              vendor needs and printing machines.
            </p>
            <div className="flex flex-wrap gap-x-3">
              <Kapsul isi="Node.js" />
              <Kapsul isi="Express" />
              <Kapsul isi="PostgreSQL" />
              <Kapsul isi="Sequelize" />
              <Kapsul isi="Multer" />
              <Kapsul isi="WhatsApp-API" />
              <Kapsul isi="Bcryptjs" />
              <Kapsul isi="JWT" />
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>

      {/* Citra Factory */}
      <div>
        <div className="border-[0.5px] border-slate-100 shadow-md rounded-xl flex flex-col sm:flex-row w-full dark:border-cardDark">
          <div className="w-full p-8 bg-slate-50  flex justify-center sm:w-1/2 dark:bg-cardDark rounded-xl ">
            <img src={berandacprint} alt="" className="rounded-md" />
          </div>
          <div className="p-8 sm:w-1/2">
            <p className="font-semibold text-xl mb-3 dark:text-textDark sm:text-2xl">
              {/* <a
                href="http://sistem.printhink.id"
                target="_blank"
                rel="noopener noreferrer"
              > */}
              Citra Print
              {/* </a> */}
            </p>
            <p className="mb-3 dark:text-textDark2 sm:text-lg">
              Designing product information system backends, prices, and other
              details, to make it easier for potential customers to see product
              details and prices offered and to be able to communicate directly
              with customer service.
            </p>
            <div className="flex flex-wrap gap-x-3">
              <Kapsul isi="Node.js" />
              <Kapsul isi="Express" />
              <Kapsul isi="PostgreSQL" />
              <Kapsul isi="Sequelize" />
              <Kapsul isi="Multer" />
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Work;
