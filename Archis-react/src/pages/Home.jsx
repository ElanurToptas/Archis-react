import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const Home = () => {
    const navigate = useNavigate();
    const [allData, setAllData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async() => {
            setLoading(true)
            const {data} = await axios.get('https://fakestoreapi.com/products')
            setAllData(data)
            setLoading(false)
        }
        getData();
    }, [])

    console.log(allData, "allData")


    return (
        loading ? <div>LOADINGGGG....</div> : 
        <div>
          {
            allData?.map((data,i) => (
                <div key={i}>
                    <div>{data?.title}</div>
                    <img src={data?.image} alt=""/>
                </div>
            ))
          }
        </div>
    )
}

export default Home