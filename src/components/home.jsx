// Filename - pulongbato.jsx
import React from "react";
// Importing Link from react-router-dom to
// navigate to different end points.
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <link href="/dist/output.css" rel="stylesheet"></link>
      <div className="h-screen w-screen flex flex-col items-center">
        <h1
          className="flex pb-5 pt-10 font-bold"
          style={{ fontFamily: "Fondamento", fontSize: "3em" }}
        >
          ⊐⊏ Myths and Legends of Zamboanga ⊐⊏
        </h1>
        <div className="flex flex-row w-full">
          <Link to="/pulongbato" className="flex flex-col overflow-hidden">
            <img
              className="flex m-0 p-0 w-auto h-[50rem] object-cover transition duration-1000 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
              src="/src/images/storypick/pulongbato.jpg"
              alt="asdf"
              srcset=""
            />
          </Link>
          <Link to="/sittimaryam" className="flex overflow-hidden">
            <img
              className="flex m-0 p-0 w-auto h-[50rem] object-cover duration-1000 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
              src="/src/images/storypick/sittimaryam.jpg"
              alt="asdf"
              srcset=""
            />
          </Link>
          <Link to="/ladyofthepillar" className="flex overflow-hidden">
            <img
              className="flex m-0 p-0 w-auto h-[50rem] object-cover duration-1000 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
              src="/src/images/storypick/ladyofpillar.jpg"
              alt="asdf"
              srcset=""
            />
          </Link>
        </div>
        <div className="flex flex-row justify-around w-screen">
          <h1>Pulong Bato</h1>
          <h1>Sitti Marmam</h1>
          <h1>Lady of the Pillar</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
