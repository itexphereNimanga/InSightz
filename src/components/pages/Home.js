import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import backgroundImage from "./—Pngtree—flat design business analytics reports_6259303.png";
import { useState } from "react";

function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("token");
    if (storedUserName) {
      setToken(storedUserName);
    }
  }, []);
  return (
    <div className="home">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image"
      />
      <div className="content">
        <h1>Welcome to In-Sightz</h1>
        <p>Unlock the power of unified insights with In-Sightz!</p>
        <p>One platform, eight social media channels.</p>
        <p>Effortlessly track, analyze, and optimize your posts.</p>
        <p>
          Receive personalized suggestions, schedule with ease, and stay ahead
          of trends.
        </p>
        <p>
          Perfect for content creators, businesses, and talent showcasing their
          best.
        </p>
        <p> Elevate your social media game - join In-Sightz today!</p>
        {token ? (
          <></>
        ) : (
          <Link to="/signup" className="butn--outline">
            Sign-Up
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
