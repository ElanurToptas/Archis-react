
//UseState ,UseEffect

/*function App() {

  const [name ,setName] = useState ("react")

const clickFunc = () => {
  console.log("click işlemi yapıldı")
  setName("react değişti")
}


  return (
    <>
     <div onClick={clickFunc}>
      {name}

     </div>
      
  </>  
  )

}

export default App
*/

 /*function App() {

    const [count,setCount] = useState (0)

   const decrement =()=>{
      if (count <=0) return
      setCount(count-1)
    }

   return (
    <>

    <Button name ={"Azalt"} onClick={()=> setCount(count-1)}/>

    <div>{count}</div>
    <button onClick={() => setCount(count+1)}>Arttır</button>



    </>
   )
 }
 
 export default App
*/

//onChange

/*function App() {

  const[name,setName] = useState(null)
  const [data,setData] = useState([])
  console.log(name,"name")

  const targetFunc = (e) => {
    console.log(e,"e")
    setName(e.target.value)
  }

  const clickFunc = () => {
    setData (prev => ([...prev,name]))
  }
console.log(data,"data")

  return (
<>

    <input type="text" onChange={targetFunc} />
    <button onClick={clickFunc}>Tıkla</button>

    <div>
        {
         
            data.map((dt, index) => (
              <div key={index}>{dt}</div>
            ))
          
        }
    </div>


</>
  )
}

export default App
*/


//useMemo

/*function App() {


  const [name,setName] = useState ("react")

  useEffect (() => {
    setTimeout(() => {
      setName ('react güncellendi..')
    }, 4000);

  },[])
  return (
   <>
   {
    name
   }
   </>
  )
}

export default App
*/

/*

import React from 'react';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';



function App() {



  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App

*/

/*import { useRef } from 'react';

function App() {
  const countRef = useRef(0); 

  const clickFunc = () => {
    countRef.current++;
    console.log(countRef.current, "countRef");
  };

  return (
    <button onClick={clickFunc}>
      click me
    </button>
  );
}

export default App;
*/
/*
import { useRef } from 'react';

function App() {
  const inputRef = useRef(); 

  const focusFunc = () => {
   inputRef.current.focus();
  };

  return (
    <>
    <input type="text"  ref={inputRef}/>
    <button onClick={focusFunc}>
      focus
    </button>
    
    </>
    
  );
}

export default App;
*/


/*import { useMemo, useState } from 'react';

function App() {
  const [count,setCount] = useState(0) 
  const [textChange,setTextChange] = useState("")


  const largeDataFunc= useMemo (() => {
    [...new Array(10000)].forEach((item) => {})

    return count * 3
  }, [] )


  return (
    <>
    <div>{count} </div>
    <button onClick={() => setCount(count+1)}>
      Arttır
    </button>

    {largeDataFunc}
    <input type="text" onChange={ e => setTextChange(e.target.value)} />
    
    </>
    
  );
}

export default App;

*/

//React.memo

/*
import React, { useState } from 'react';

const Counter = React.memo(() => {
  console.log("reder!")
  return(
    <>
    </>
  )
})

function App() {
  const [count,setCount] = useState(0) 

  return (
    <>
    <div>{count} </div>
   <button onClick={() => setCount(count + 1)}>Arttır</button>
   <Counter/>
    </>
    
  );
}

export default App;



*/


//useCallBack

/*
import React, { useCallback, useState } from 'react';

const Counter = React.memo(({increment}) => {
  console.log("render!")
  return(
    <>
    <button onClick={increment}>Arttır</button>
    </>
  )
})

function App() {
  const [count,setCount] = useState(0) 
  const [text, setText] = useState ("")

  const increment = useCallback (()=> {
    setCount(count+1)
  }, [count])

  return (
    <>
    <div>{count} </div>

   <Counter increment = {increment}/>
   <input type="text"onChange={e => setText (e.target.value) } />
    </>
    
  );
}

export default App;
*/

//API Veri çekme

import React from 'react';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </Router>
    
    </>

  )
}

export default App

