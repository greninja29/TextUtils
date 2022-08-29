import { useState } from "react";
import "./App.css";
import Abouttext from "./components/Abouttext";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//  let name = "mahendra";
function App(){
  const[mode ,setmode]=useState('light')
  let togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#11293a'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
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
   <Alert alert="this is TetUtils"/>
   <div className="container my-3">
   <TextForm heading="Enter Your Text" mode={mode}/>
   <Abouttext mode={mode}/>
   </div>
 
    </> 
  );
}
export default App;
