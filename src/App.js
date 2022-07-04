import './App.css';
import Navbar from './components/Navbar';

import { useState } from 'react'

function App() {

  const [dark, setdark] = useState("dark")
  const [textc, settextc] = useState("white")
  const [hcolor, sethcolor] = useState("hcolor")
  const [pcolor, setpcolor] = useState("pcolor")

  const lightmode = () => {

    

    if (dark === "dark") {
      setdark("light")
      if (textc === "white" && hcolor==="hcolor" && pcolor==="pcolor") {
        settextc("dark")
        sethcolor("secondary")
        setpcolor("secondary")
      }
    } else {
      setdark("dark")
      settextc("white")
      sethcolor("hcolor")
      setpcolor("pcolor")
    }

  }



  return (
    <>

      <Navbar dark={dark} mode={lightmode}textcolor={textc} hcolor={hcolor} pcolor={pcolor}/>

    </>
  );
}

export default App;
