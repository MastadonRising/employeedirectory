import React from "react";
import "./App.css";
import Directory from "./pages/directory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Directory />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
