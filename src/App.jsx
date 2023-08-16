import { useState } from "react";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Navbar />
        <Profile />
        <Skill />
      </div>
    </>
  );
}

export default App;
