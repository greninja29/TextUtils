
import { useState } from "react";
import "./App.css";
import Abouttext from "./components/Abouttext";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//  let name = "mahendra";
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

    <> 
    {/* passed as variable */}
    {/* <Navbar title={name} AboutText="About TextUtils"/> */}
    {/* even though we donot pass enough props, if we define default props it gets added to the component*/}
    {/* <Navbar /> */}
    {/* <Navbar title="TextUtils" /> */}
   <Navbar title="TextUtils" AboutText="About TextUtils" mode={mode} togglemode={togglemode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm showalert={showalert} heading="Enter Your Text" mode={mode}/>
   <Abouttext mode={mode}/>
   </div>
 
    </> 
  );
}
export default App;
