import { useNavigate } from "react-router-dom"

export const data = [
        {
            id: 0,
            name: "React",
            description: "React açıklama"
        },
         {
            id: 1,
            name: "Nehir",
            description: "Nehir açıklama"
        },
        {
            id: 2,
            name: "Yazılım",
            description: "Yazılım açıklama"
        },
    ]

const Home = () => {
    const navigate = useNavigate();


    return (
        <div>
            {
                data.map((dt, index) => (
                    <div onClick={() => navigate(`detail/${dt.id}`) } style={{cursor: 'pointer', marginBottom:'30px'}}key={index}>
                        <div>{dt.name}</div>
                        <div>{dt.description}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home