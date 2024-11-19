import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import AxiosInstance from '../lib/Axiosintance';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Editdm() {

    const {id} = useParams();
    const data = {name:""};
    const [inputdata, setInputdata] = useState(data);


    useEffect(()=> {
        const DMById = async () => {
            try {
                const dm = await AxiosInstance().get('/danhmuc/'+id);
                setInputdata(dm)
            }catch (error)
            {}
        }
        DMById()
    },[id])
    
    const handleData = (e) =>{
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

    let history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
   
        await AxiosInstance().put("/danhmuc/"+id, inputdata)
        .then(function(respose){})
        .catch(function(error){
            console.error('POST Error:',error);
        });
        history.push('/danhmuc')
    }
    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     // eslint-disable-next-line no-undef
    //     swal({
    //         title:"Xác nhận ??",
    //         text :"Xác nhận cập nhật sản phẩm !",
    //         icon:"warning",
    //         buttons: true,
    //         dangerMode: true,
    //     })
    //     .then(async (will) => {
    //         if(will){
    //             try{
    //                 await AxiosInstance().put("/danhmuc/"+id,inputdata)
    //                 .then(function (response){
    //                     console.log('POST Response:',response.data);
    //                 })
    //                 .catch(function (error) {
    //                     console.error('POST Error:',error);
    //                 });
    //                 // eslint-disable-next-line no-undef
    //                 swal({
    //                     title: "cập nhật thành công",
    //                     icon: "success",
    //                 });
    //                 setTimeout(()=>{
    //                     history.push('/danhmuc')
    //                 },2000);

    //             }catch (error)
    //             {
    //                 console.log(error);
    //                 // eslint-disable-next-line no-undef
    //                 swal({
    //                     title:"Cập nhật thất bại",
    //                     icon:"error"
    //                 })
    //             }
    //         }
    //     })
    // }

  return (
    <div >
        <div >
            Edit Category <br/>
            <from className='form'>
            <label>Danh muc Name</label> <br/>
            <input type='text' name='name' value={inputdata.name} onChange={handleData}></input>
            <button onClick={handleSubmit}>Submit</button>
            </from>
        </div>
    </div>
  )
}

export default Editdm