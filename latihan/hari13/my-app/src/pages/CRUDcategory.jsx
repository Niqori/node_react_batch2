import axios from 'axios';
import { useEffect , useState} from 'react';

function CRUDcategory() {
    const [dataCategories, setDataCategories] = useState([])
    const [Name, setName] = useState("")
    const [categoryId, setCategoryId] = useState("")


    const fetchDataCategories = () => {
        axios
        .get('http://localhost:3000/api/kategori').then((response) => {
            setDataCategories(response.data.info);
    }).catch(err => {
        console.log(err);
    }
    );}

    useEffect(() => {
        fetchDataCategories();
    } ,[])

    const handleDeleteCategory = async(id) => {
        try{
        let text = "Are you sure to delete this Genre?";
        if (confirm(text)){
            await axios.delete(`http://localhost:3000/api/kategori/${id}`);

        fetchDataCategories(); 
        } else {
            alert("Delete cancelled");
        }
        }catch(err){
            alert(err);
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(title)  
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();

        try{
        
        let posting = await axios.post('http://localhost:3000/api/kategori',{
            name: Name
        })
        console.log(posting);
        fetchDataCategories();
        setName("");
        }  catch(err){
            alert(err);
        }
    }

    const handleEditCategory = async(id) => {
     try{   
        console.log("Editing category with ID:", id);
        let newName = prompt("Enter new Genre name :");

        const dataUpdate = {};
        if (newName) dataUpdate.name = newName;

        if (Object.keys(dataUpdate).length === 0) {
            alert(" no changes made.");
            return;
        }
        const response = await axios.put(`http://localhost:3000/api/kategori/${id}`, dataUpdate);
        console.log(response.data);
        alert("Genre updated successfully");
        fetchDataCategories();
     } catch(err){
        alert("failed to edit :"+ err.message);
     }  
    }

    const handleCancelEdit = () => {
    setEditId(null);
    setTitle("");
    setYear("");
    setCategoryId("");
    };

    return(
    <div>
        <h1>CRUD Category</h1>
        <div className='flex justify-center mx-auto'>
            <form onSubmit={handleSubmit}>
        <fieldset  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend>Input Movie Data</legend>

            <label className="label">Name Category</label>
            <input type="text"
            name="name"
            id="name"
            onChange={handleNameChange} 
            value={Name}
            placeholder='Kategori'
            className="input" />

            <button type="submit" value="send" className="btn btn-neutral mt-4">SEND</button>
        </fieldset>
        </form>
        </div>

    <div className="overflow-x-auto">
    <table className="table table-zebra">    
        <tbody>
            <tr>
                <th>No</th>
                <th>Category</th>
                <th id="action" colSpan="5">Action</th>
            </tr>
            {dataCategories.map((item,index) => {
                return (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td><button type="button" onClick={() => handleEditCategory(item.id)} className="btn btn-success">
                    Edit
                  </button></td>
                <td><button type="button" onClick={() => handleDeleteCategory(item.id)} className="btn btn-error">
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

export default CRUDcategory