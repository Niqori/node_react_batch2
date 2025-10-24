import axios from 'axios';
import { useEffect , useState} from 'react';

function CRUDaxios() {
    const [data, setData] = useState([])
    const [year, setYear] = useState([])
    const [categoryId, setCategoryId] = useState([])

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
        console.log(err);
    })
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
        await axios.post('http://localhost:3000/api/movie',{
            title: title,
            year: Number(year),
            categoryId: Number(categoryId)
        })
        }  catch(err){
            alert(err);
        }
    }
    return(
    <div>
        <h1>CRUD AXIOS</h1>
        <p>test test</p>
        <form action="">
            <label>Movie Title</label>
            <input type="text" name="title" id="title"/>
            <label>Released Year</label>
            <input type="text" name="year" id="year"/>
            <label>Category</label>
            <select name="" id="">
                <option value="">--Pilih Category--</option>
                <option value="1">Action</option>
                <option value="2">Drama</option>
                <option value="3">Horror</option>
            </select>

            <input type="submit" value="SEND"/>
        </form>
                
    <table>
        <tbody>
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>Year</th>
                <th>Category ID</th>
            </tr>
            {data.map((item,index) => {
                return (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.categoryId}</td>
                </tr>
            )
            })}
        </tbody>
    </table>
`</div>
    )
}

export default CRUDaxios