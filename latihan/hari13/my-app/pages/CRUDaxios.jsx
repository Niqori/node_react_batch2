import axios from 'axios';
import { useEffect , useState} from 'react';

function CRUDaxios() {
    const [data, setData] = useState([])
    useEffect(() => {
        FetchData();
    } ,[])

    const FetchData = () =>{
    axios
        .get('http://localhost:3000/api/movie')
        .then((response) => {
            setData(response.data.info);
            console.log(response.data.info);
    }).catch(err => {
        console.log(err)
    })
    }
    
    return(
    <div>
        <h1>CRUD AXIOS</h1>
        <p>test test</p>
    <table>
        <tbody>
            {data.map((item) => {
                return (
                <tr>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.categoryId}</td>
                </tr>
            )
            })}
        </tbody>
    </table>
    </div>
    )
}

export default CRUDaxios