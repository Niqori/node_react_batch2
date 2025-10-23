import axios from 'axios';
import { useEffect } from 'react';
// import '../CRUDaxios.css'

function CRUDaxios() {
     const [data, setData] = useState([])
    useEffect(() => {
        FetchData()
    } ,[])

    const FetchData = () =>{

    axios.get('http://localhost:3000').then((response) => {
        setData(response.data.movies)
    }).catch(err => {
        console.log(err)
    })
    }
    
    return(
    <>
        <h1>CRUD AXIOS</h1>

    <table>
        <tbody>
            {data.map((item) => {
                return (
                <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.categoryid}</td>
                </tr>
            )
            })}
        </tbody>
    </table>
    </>
    )
}

export default CRUDaxios