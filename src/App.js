import "./App.css";
import Abouttext from "./components/Abouttext";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//  let name = "mahendra";
function App(){
  return (
    <> 
    {/* passed as variable */}
    {/* <Navbar title={name} AboutText="About TextUtils"/> */}
    {/* even though we donot pass enough props, if we define default props it gets added to the component*/}
    {/* <Navbar /> */}
    {/* <Navbar title="TextUtils" /> */}
   <Navbar title="TextUtils" AboutText="About TextUtils" />
   <div className="container my-3">
   <TextForm heading="Enter Your Text" />
   <Abouttext/>
   </div>
 
    </> 
  );
}
export default App;
