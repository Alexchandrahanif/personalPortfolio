import { useState } from "react";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Exprerience from "./components/Exprerience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Navbar />
        <Profile />
        <Skill />
        <Exprerience />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
