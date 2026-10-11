import { useLocation, useParams } from "react-router-dom";
import {data} from './Home';
import { useEffect, useState } from "react";

const Detail = () => {
    const id  = useParams();
    const [getData, setGetData] = useState(null)

    const location = useLocation();
    console.log(location.pathname, "location");

    useEffect( () => {
        if(id) {
            setGetData(data.find(dt => dt.id == id))
        }
    },[id])

    console.log(getData, "getData");

    return (
        <div>
            <div>{getData?.name}</div>
            <div>{getData?.description}</div>
        </div>
    )
}

export default Detail