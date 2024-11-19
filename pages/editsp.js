import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import AxiosInstance from '../lib/Axiosintance';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Editsp() {
    const {id} = useParams();
    const data = {name:"", quantity:"",price:"",status:"",image:"",description:""}
    const [inputdata, setInputdata] = useState(data);
    useEffect(()=> {
        const SPById = async () => {
            try {
                const sp = await AxiosInstance().get('/sanpham/'+id);
                setInputdata(sp)
            }catch (error)
            {}
        }
        SPById()
    },[id]);
    const handleData = (e) =>{
        setInputdata({...inputdata,[e.target.name]:e.target.value},
            {...inputdata,[e.target.quantity]:e.target.value},
            {...inputdata,[e.target.price]:e.target.value},
            {...inputdata,[e.target.status]:e.target.value},
            {...inputdata,[e.target.image]:e.target.value},
            {...inputdata,[e.target.description]:e.target.value}
        )
    }

    let history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
   
        await AxiosInstance().put("/sanpham/"+id, inputdata)
        .then(function(respose){})
        .catch(function(error){
            console.error('POST Error:',error);
        });
        history.push('/sanpham')
    }
  return (
    <div>
        <div className='container'>
            Edit Product <br/>
            <from className='form'>
            <label>San Pham Name</label> <br/>
            <input type='text' name='name' value={inputdata.name} onChange={handleData}></input><br/>
            <label>San Pham Quantity</label> <br/>
            <input type='number' name='quantity' value={inputdata.quantity} onChange={handleData}></input><br/>
            <label>San Pham Price</label> <br/>
            <input type='number' name='price' value={inputdata.price} onChange={handleData}></input><br/>
            <label>San Pham Status</label> <br/>
            <input type='number' name='status' value={inputdata.status} onChange={handleData}></input><br/>
            <label>San Pham Image</label> <br/>
            <input type='text' name='image' value={inputdata.image} onChange={handleData}></input><br/>
            <label>San Pham Description</label> <br/>
            <input type='text' name='description' value={inputdata.description} onChange={handleData}></input><br/>
            <button onClick={handleSubmit}>Submit</button>
            </from>
        </div>
    </div>
  )
}

export default Editsp