import { useState } from "react"
import Text from "./components/Text"
import Button from "./components/Button"

function App() {
  //let name = "react" -> JSde bu şekilde kullanıyorduk 
  const [name,setName] = useState("react") //React üzerinde state oluşturmanın mantığı bu, tırnak içinde yazdığın react da default olarak verdiğimiz değer. B unu null veya obje yani [] olarak da koyuabiliriz. 
  // const [değişken, değişkeni setlemek istediğim fonksiyon ]

  const clickFunc = () =>{
    console.log("click işlemi yapıldı")
    setName("react değişti") //her click yaptığımızda ismi değiştirdik 
  }

  const [count, setCount] = useState(0)
  const decrement = () => {
    if(count<= 0) return 
    setCount(count - 1) //ya böyle yapabilirim 
    //setCount(prev => prev - 1) ya da böyle de yapabilirdik 
    // Bir diğer seçenek için de 33. satıra bak
  }

  return (
    <>
    <div onClick={clickFunc}>
      {name} 
    </div>
    
    <div>
      <Button name={"Azalt"} onClick={() => setCount(count-1)}/> {/*Component mantığını kullanarak state de bu şekildey yazıyoruz */}
      {/* <button onClick={decrement}>Azalt</button> */}
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </div>
    
    </>
  )
}


export default App 