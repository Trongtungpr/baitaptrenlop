import React from "react";
import "./components/style/index.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Body from "./components/layout/Body";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
