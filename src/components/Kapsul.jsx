import React from "react";

const Kapsul = ({ isi }) => {
  return (
    <div className=" bg-bgLigth flex justify-center items-center rounded-lg mb-4 poppins dark:bg-bgDark">
      <p className="font-poppins  dark:text-textDark px-4 py-1">{isi}</p>
    </div>
  );
};

export default Kapsul;
