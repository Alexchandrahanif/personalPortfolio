import { useState } from "react";
import {
  dark1,
  dark2,
  light1,
  light2,
  copyright,
  email1,
  email2,
  figma1,
  figma2,
  github1,
  github2,
  lokasi1,
  lokasi2,
  telepon1,
  telepon2,
  twitter1,
  twitter2,
  tujuan1,
} from "./assets";

function App() {
  const [isDark, setIsDark] = useState(false);
  const handleDarkMode = () => {
    setIsDark(!isDark);
    const html = document.querySelector("html");
    if (!isDark) {
      html.classList.add("dark");
      localStorage.setItem("darkmode", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkmode", "light");
    }
  };

  const handelDownloadCv = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1V_m7KDFrwr1YCJXzTwmXyKKBNIAFVEz3/view?usp=drive_link";
    window.open(fileUrl, "_blank");
  };

  return (
    <>
      <div className="px-20">
        {/* Navbar */}
        <nav className="w-full h-[68px] px-5  flex justify-center items-center  border-b border-slate-200 dark:bg-dark">
          <div className="w-full py-[16px]  flex justify-between items-center ">
            <div>
              <p className="font-medium dark:text-white">logo</p>
            </div>
            <div className="flex gap-10">
              <ul className="flex items-center gap-5 w-[350px] justify-evenly">
                <li className="font-medium cursor-pointer dark:text-white">
                  About
                </li>
                <li className="font-medium cursor-pointer dark:text-white">
                  Experience
                </li>
                <li className="font-medium cursor-pointer dark:text-white">
                  Project
                </li>
              </ul>
              <div className="flex w-[180px] justify-between">
                <button
                  className="font-medium cursor-pointer border-[1px] rounded-md border-slate-300 shadow-md"
                  onClick={() => handleDarkMode()}
                >
                  {isDark ? (
                    <img src={dark2} className="w-8 h-8 p-1 text-white" />
                  ) : (
                    <img src={light1} className="w-8 h-8 p-1" />
                  )}
                </button>
                <button
                  className="font-medium cursor-pointer bg-black rounded-md p-1 dark:bg-white"
                  onClick={handelDownloadCv}
                >
                  <p className="text-white dark:text-dark">Download CV</p>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Profile */}
        <section className="w-full h-[552px] bg-slate-100 flex justify-center items-center ">
          <div className="h-[360px] w-[85%] bg-slate-50 flex gap-[48px]">
            <div className="w-2/3 h-full bg-slate-700"></div>
            <div className="w-1/2 h-full bg-slate-200"></div>
          </div>
        </section>
        <section>Skill</section>
        <section>Exprience</section>
        <section>Work</section>
        <section>Testimonial</section>
        <section>Contact</section>
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default App;
