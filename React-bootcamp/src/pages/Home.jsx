
/*const Home = () => {
  return (
    <div>
        <Text/>
    </div>
  )
}

export default Home
*/


//Listeleme ve Yönlendirme

/*
import { useNavigate } from "react-router-dom";

export const data = [
    {
        id:0,
        name: "Nehir",
        description: "Nehir Açıklama"
    },
    {
        id:1,
        name: "Sudenaz",
        description: "Sudenaz Açıklama"
    },

    {
        id:2,
        name: "Mercan",
        description: "Mercan Açıklama"
    }
]


const Home = () => {

    const navigate = useNavigate ();


  return (
    <div>

        {
            data.map((dt,index) => (
            <div 

            onClick={() => navigate(`detail/${dt.id} ` )}

            style= {{cursor:'pointer' , marginBottom: '30px'}} 

            key={index}>

                <div>
                    {dt.name}
                </div>
                <div>
                    {dt.description}
                </div>
            </div>
            ))
        }
    </div>
  )
}

{
            allData?.map((data,i) =>(
                <div key={i}>
                    <div>
                        {data?.title}
                        <img src={data?.image} alt="" />
                    </div>
                </div>

            ))
        }

export default Home

*/


//IPA Veri çekme

/*

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(
                'https://fakestoreapi.com/products'
            );
            setAllData(data);
        };

        getData();
    }, []);

    console.log(allData, "allData");

    return (
        <div>
            {
            allData?.map((data,i) =>(
                <div onClick={() => navigate(`detail/${data?.id}`)} style={{marginBottom:'30px' , cursor: 'pointer'}} key={i}>
                    <div>
                        {data?.title}
                        <img style={{width:"100px"}} src={data?.image} alt="" />
                    </div>
                </div>

            ))
        }
        </div>
    );
};

export default Home;
*/

//Redux

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../redux/modalSlice';



const Home = () => {
    const navigate = useNavigate();
    const {modal,getData} = useSelector(state => state.modal)
    const dispatch = useDispatch()



   /* 
    console.log(modal , "modal")
   
   const changeFunc = () => {
        dispatch(modalOpenFunc())
    }
  */

    useEffect (() => {

        dispatch (fetchData());
    },[dispatch] )


    console.log(getData,"getData")



    return (
        /*
        <div onClick={changeFunc}>
           {modal ? "deger TRUE" : "deger FALSE"}
        </div>
        */

        <div>
            React Redux
        </div>
    );
};

export default Home;
