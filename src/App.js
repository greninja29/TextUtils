import { useState } from "react";
import "./App.css";
import Abouttext from "./components/Abouttext";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";

function App(){
  const[mode ,setmode]=useState('light')
  const[alert,setalert]=useState(null)
  
  const showalert=(messege,type)=>{
    setalert({
      msg:messege,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    },2000);
  }

  let togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#11293a'
      showalert("Dark mode has been enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Light mode has been enabled","success")      
    }
  }
  return (  
  <HashRouter>
    {/* passed as variable */}
    {/* <Navbar title={name} AboutText="About TextUtils"/> */}
    {/* even though we donot pass enough props, if we define default props it gets added to the component*/}
    {/* <Navbar /> */}
    {/* <Navbar title="TextUtils" /> */}
      <Navbar title="TextUtils" AboutText="AboutTextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      {/* <TextForm showalert={showalert} heading="Enter Your Text" mode={mode}/> */}
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<TextForm showalert={showalert} heading="Enter Your Text" mode={mode}/>}/>
          {/* <Route path='/TextUtils' element={<TextForm showalert={showalert} heading="Enter Your Text" mode={mode}/>}/> */}
          <Route path='/abouttext' element={<Abouttext mode={mode}/>}/>
        </Routes> 
      </div>
      </HashRouter> 
  );
}
export default App;
