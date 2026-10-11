import React, {useRef} from 'react';

function App() {
  const countRef= useRef(0);

  const clickFunc = () => {
    countRef.current++;
    console.log(countRef.current, "countRef")
  }
  
  return (
    <div onClick={clickFunc}>
      click me!!!
    </div>
  )
}


export default App 