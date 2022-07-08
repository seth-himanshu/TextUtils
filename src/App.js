import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  let red='#4b1818';
  let dark= '#16181b';
  let blue = '#172e4f';
  let green = '#0d442a';
  const [button, setButton] = useState('secondary');
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1250);
  }
  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      setButton('secondary');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    } else {
      setMode('dark');
      document.body.style.backgroundColor = dark;
      setButton('dark');
      showAlert("Dark mode has been enabled", "success")
    }
  }
  const redTheme=()=>{
    if(mode !== 'light'){
      setMode('dark');
      setButton('danger');
      document.body.style.backgroundColor = red;
      showAlert("Red theme applied", "success")
    }
  }
  const blueTheme=()=>{
    if(mode !== 'light'){
      setMode('dark');
      setButton('primary');
      document.body.style.backgroundColor = blue;
      showAlert("Blue theme applied", "success")
    }
  }
  const greenTheme=()=>{
    if(mode !== 'light'){
      setMode('dark');
      setButton('success');
      document.body.style.backgroundColor = green;
      showAlert("Green theme applied", "success")
    }
  }
  return (
    <Router>
      <NavBar title="TextUtils" mode={mode} redTheme={redTheme} blueTheme={blueTheme} greenTheme={greenTheme} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={
          <>
            <TextForm showAlert={showAlert} button={button} heading='Enter the Text to analyse' mode={mode}/>
          </>
        }>
        </Route>
        <Route exact path="/about" element={
          <>
            <About mode={mode}/>
          </>
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
