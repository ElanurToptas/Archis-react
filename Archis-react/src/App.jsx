import React, { useState } from "react"
import Text from "./components/Text"
import Button from "./components/Button"

function App() {
  const [name,setName] = useState("react") 
  const [data, setData] = useState([])

  console.log(name, "name")

  const targetFunc = (e) => {
    console.log(e, "e")
    setName(e.target.value)
  }

  const clickFunc = () => {
    setData(prev => ([...prev, name]))
  }

  console.log(data, "data")

  return (
    <>
    <input type="text" onChange={targetFunc}/>
    <button onClick={clickFunc}>Tıkla</button>
    <div>
      {/* {data} => Bu şekilde yaptığında ekrandaki çıktı bu şekilde olur : nehirdefnesude */}
      {
        data.map((dt,i) => (
          <div key={i}>{dt}</div>
        )) 
      }
      {/* Yukarıda dt dediğim şey array içerisindeki her bir elemana verdiğim isim, i dediğim şey ise index numarası*/}
      {/* Key parametresini divin yanında kullanmayı unutma!! */}
      {/* Şimdi ise ekranda gördüğümüz çıktımız bu şekilde oldu: 
        nehir
        defne
        sude
      */}
    </div>
    
    </>
  )
}


export default App 