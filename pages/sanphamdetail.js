import React,{useState,useEffect,useParams} from 'react'
import AxiosInstance from '../lib/Axiosintance';

function Sanphamdetail() {
    const data = {name:"", quantity:"",price:"",status:"",image:"",description:""}
    const {id} = useParams();
    const [listOfSp, setListofSp] = useState([data]);


  useEffect(() => {
    const Sanphams = async () =>{
      try{
        const result = await AxiosInstance().get('/sanpham/'+id);
        setListofSp(result);

      }catch(error)
      {
        console.log(error);
      }
    }
    Sanphams();
  },[id])
  return (
    <div>
    {
        listOfSp.map((item)=>
        <div class="product-detail">
        <img src={item.image} alt=''/>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>Giá: {item.price} VNĐ</p>
        <button>Thêm vào giỏ hàng</button>
    </div>
        )
    }
    </div>
  )
}

export default Sanphamdetail