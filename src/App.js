import Main from "./Main"
import Inputbox from "./Inputbox"
import Header from "./Header"
import {useState} from "react"


function App() {
  const [color,setColor] = useState("");
  const [visible,setVisible] = useState(false);
  return (
    <div className="App">
      <Header/>
     <Main
     color = {color}
     visible = {visible}
     
     />
     <Inputbox
     color = {color}
     setColor = {setColor}
     visible = {visible}
     setVisible = {setVisible}
     />
    </div>
  );
}

export default App;
