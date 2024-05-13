import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Log";
import Signup from "./components/pages/Signup";
import Account from "./components/pages/Account";
import Alerts from "./components/pages/Alerts";
import Schedule from "./components/pages/Schedule";
import Analytics from "./components/pages/analyticsBtn";
import ConnectPage from "./components/pages/connectp";
import ChannelsPage from "./components/pages/channels";
import YoutubeAnalytics from "./components/pages/analytics/AnalyticsContainer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Alerts" element={<Alerts />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/youtube" element={<YoutubeAnalytics />} />
          <Route path="/Connect" element={<ConnectPage />} />
          {/* Add this line for the ConnectPage route */}
          <Route path="/ConnectChannels" element={<ChannelsPage />} />
          {/* Add this line for the ConnectChannelsPage route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
