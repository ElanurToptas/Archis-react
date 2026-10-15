

//Veriyi yakalama ve gösterme

/*import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { data } from "./Home";


const Detail = () => {

    const {id} = useParams ();
    const [getData, setGetData] = useState (null)


    const location = useLocation ();

    console.log (location.pathname,"location")

    useEffect (() => {
        if (id){
            setGetData(data.find(dt => dt.id == id))
        }
    }, [id])

    console.log (getData,"getData")

  return (
    <div>
        <div>{getData?.name}</div>
        <div>{getData?.description}</div>
    </div>
  )
}

export default Detail
*/


//API VERİ ÇEKME

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {

        const {id} = useParams (); 
        const [singleData,setSingleData] = useState()
        console.log(id,"id")

    useEffect (() => {
        const getData = async () => {
            const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSingleData(data)
        }
        getData();

    }, [id] )

    console.log(singleData,"singleData")
  return (
    <div>
       <div style={{marginBottom:'30px' , cursor: 'pointer'}}>
                    <div>
                       <div>{singleData?.title}</div>
                        <img style={{width:"100px"}} src={singleData?.image} alt="" />
                    </div>
                </div>

    </div>
  )
}

export default Detail
