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
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Coming Soon...</p>
      </div>
    </>
  );
}

export default App;
