import axios from 'axios';
import { useEffect , useState} from 'react';

function CRUDaxios() {
    const [datamovie, setDataMovie] = useState([])
    const [dataCategories, setDataCategories] = useState([])
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [editId, setEditId] = useState(null);

    const fetchDataMovie = () => {
        axios
        .get('http://localhost:3000/api/movie')
        .then((response) => {
            setDataMovie(response.data.info);
    }).catch(err => {
        console.log(err);
    }
    );}

    const fetchDataCategories = () => {
        axios
        .get('http://localhost:3000/api/kategori').then((response) => {
            setDataCategories(response.data.info);
    }).catch(err => {
        console.log(err);
    }
    );}

    useEffect(() => {
        // FetchData();
        fetchDataMovie();
        fetchDataCategories();
    } ,[])

    const handleDeleteMovie = async(id) => {
        try{
        let text = "Are you sure to delete this movie?";
        if (confirm(text)){
            await axios.delete(`http://localhost:3000/api/movie/${id}`);
            fetchDataMovie();
        fetchDataCategories(); 
        } else {
            alert("Delete cancelled");
        }
        }catch(err){
            alert(err);
        }
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        console.log(title)  
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
        console.log(year) 
    }

    const handleCategoryIdChange = (event) => {
        setCategoryId(event.target.value);
        console.log(categoryId) 
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();

        try{
        //mode edit
        if (editId) {
            await axios.put(`http://localhost:3000/api/movie/${editId.id}`, {
                title,
                year: Number(year),
                categoryId: Number(categoryId)
            });
            alert("Movie updated successfully");
        } else {
        //mode tambah data
            await axios.post('http://localhost:3000/api/movie',{
            title: title,
            year: Number(year),
            categoryId: Number(categoryId)
        });
        alert("Movie added successfully");
        }
        //refresh data movie dan category
        fetchDataMovie();
        fetchDataCategories();
        setTitle("");
        setYear("");
        setCategoryId("");
        setEditId(null);
        }  catch(err){
            alert(err);
            console.log(`Movie with ID ${editId} updated.`);
        }
    }

    const handleEditMovie = async(movie) => { 
        setEditId(movie);
        setTitle(movie.title);
        setYear(movie.year);
        setCategoryId(movie.categoryId);
    }

    const handleCancelEdit = () => {
        setEditId(null);
        setTitle("");
        setYear("");
        setCategoryId("");
    };

    return(
    <div>
        <h1>CRUD AXIOS</h1>
        <div className='flex justify-center mx-auto'>
            <form onSubmit={handleSubmit}>
        <fieldset  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend>{editId? " Edit Movie " : "Input Movie" }</legend>

            <label className="label">Movie Title</label>
            <input 
            type="text"
            name="title" 
            id="title" 
            onChange={handleTitleChange} 
            value={title}
            placeholder='Movies...'
            className="input" />

            <label className="label">Released Year</label>
            <input type="text"
            name="year" 
            id="year" 
            onChange={handleYearChange} 
            value={year}
            placeholder='Movies released date...'
            className="input" />

            <label className="label">Category Name</label>
            <select 
            className="select select-neutral"
            id="categoryId"
            name="categoryId"
            onChange={handleCategoryIdChange}
            value={categoryId}>

            <option value="">--Select Category--</option>
            { dataCategories.map((item,index) => {
                return (
                <option key={index} value={item.id}>{item.name}</option>
                        )
                    })}
            </select>
                    
            <button type="submit" value="send" className="btn btn-neutral mt-4 ">{editId ? "Update " : "Submit"}</button>
            {editId && (
                <button type="button" onClick={handleCancelEdit} className="btn btn-warning mt-4">
                    Cancel
                </button>
            )}
        </fieldset>
        </form>
        </div>

    <div className="overflow-x-auto">
    <table className="table table-zebra">    
        <tbody>
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>Year</th>
                <th>Category Name</th>
                <th id="action" colSpan="5">Action</th>
            </tr>
            {datamovie.map((item,index) => {
                //chekk apakah item.categoryId ada di dataCategories
                const category = dataCategories.find(cat => cat.id === item.categoryId);
                return (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{category ? category.name : "Unknown"}</td>
                <td><button type="button" onClick={() => handleEditMovie(item)} className="btn btn-success">
                    Edit
                  </button></td>
                <td><button type="button" onClick={() => handleDeleteMovie(item.id)} className="btn btn-error">
                    Delete
                  </button></td>
                </tr>
            )
            })}
        </tbody>
    </table>
    </div>
</div>
    )
}

export default CRUDaxios