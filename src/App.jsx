import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollMenu from "./components/ScrollMenu";
import Hondo from "./components/shared/Hondo";
import Reel from "./components/sections/Reel";
import Video from "./components/sections/Video";
import Portfolio from "./components/sections/Portfolio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full ">
      {/* <div className='relative w-screen'>
        <span className='fixed text-6xl top-10 right-10 text-white'>Honda</span>
        <ScrollMenu />
      </div> */}
      <Hondo />
      {/* <Reel /> */}
      {/* <Video /> */}
      <Portfolio />
    </div>
  );
}

export default App;
