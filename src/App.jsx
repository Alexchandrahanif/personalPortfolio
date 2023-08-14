import { useState } from "react";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Navbar />
        <Profile />
      </div>
    </>
  );
}

export default App;
