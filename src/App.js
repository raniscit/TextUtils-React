import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils - Light mode";
    }
  }
  return (
    <>

      <Navbar title="TextUtils" abouttext="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />

      </div>

    </>
    // <>
    // <Router>
    // <Navbar title="TextUtils" abouttext="About us" mode={mode} toggleMode={toggleMode}/>
    // <Alert alert= {alert}/>
    //   <div className="container my-3">
    //     <Routes>
    //       <Route exact path="/about" element={<About />} />
    //       <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
    //     </Routes>
    //   </div>
    // </Router>
    // </>
  );
}

export default App;
