import React from 'react'
import { useEffect, useState } from 'react'
import AxiosInstance from '../lib/Axiosintance';
import Menu from './menu';
import Footer from './footer';
import Header from './header';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Sanpham() {
  const [listOfDM, setListofDM] = useState([]);
  useEffect(() => {
    const Danhmuc = async () =>{
      try{
        const result = await AxiosInstance().get('/danhmuc')
        setListofDM(result)
      }catch(error)
      {
        console.log(error);
      }

    }
    Danhmuc();
  },[]);

  //them san pham
  const [Dm_id, setDm_id] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [status, setstatus] = useState('');
  const [image, setImage] = useState('');
  const [description, setDesc] = useState('');
  const [products, setSP]=useState([])


  const handleAdd = async () => {
    const id_danhmuc = Dm_id;
    const data = {name,quantity,price,status,image,description,id_danhmuc}
    console.log(data);
    await AxiosInstance().post('/sanpham', data)
    .then(function(response){
      // console.log('POST RESPONSE: ',response.data);
    })
    .catch(function(error){
      console.error('POST Error:',error);
    })
  }

  const [listOfSp, setListofSp] = useState([]);
  useEffect(() => {
    const Sanphams = async () =>{
      try{
        const result = await AxiosInstance().get('/sanpham');
        setListofSp(result);

      }catch(error)
      {
        console.log(error);
      }
    }
    Sanphams();
  },[])

  let history = useHistory();


  const handleDelete = async (id) =>{
    await AxiosInstance().delete('/sanpham/'+ id)
    setSP(products.filter(item => item._id !== id))
    history.push('/sanpham')

  }
  
  const[cart, setCart] = useState (() =>{
    const storedCart = sessionStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : []
});
  const kiemtragiohang = (product) => {
    for(let i = 0;i < cart.length;i++)
    {
      if(cart[i]._id === product._id)
      {
        return i;
      }
    }
    return -1;
  }
  const addToCart =   (product) =>{
    let vitri = kiemtragiohang(product);
    if(vitri === -1)
    {
        cart.push(product);
        setCart([...cart]);
    }
    if(vitri !== -1)
    {
        cart[vitri].mount ++;
        setCart([...cart]);
    }
};
  useEffect(()=>{
    sessionStorage.setItem('cart', JSON.stringify(cart))
  },[cart]);
  const data = {_id:"", name:"", price :0, mount:0, image:""}

  const handleAddGH = async(id) =>{
    try{
      const result = await AxiosInstance().get('/sanpham/'+id);
      data._id = result._id;
      data.image = result.image;
      data.name = result.name;
      data.mount = 1;
      data.price = result.price;
      addToCart(data);
      window.location.href="/giohang"
      console.log(handleAdd);

    }
    catch(error)
  {}
  }

  return (
    <div>
    <Header/>
        <Menu/>
        <h1>Product</h1>
        
      <form className='form'>
        <div>
          <label>Danh muc: </label>
          <select onChange={(e) => setDm_id(e.target.value)}>
          {
            listOfDM.map((item, index) =>
            <option key={index} value={item._id} > {item.name}</option>)
          }
          </select>
        </div><br/>
        <div>
          <label>Name:</label><br/>
          <input type='text' value={name} onChange={(e)=> setName(e.target.value)}></input>
        </div>
        <div>
          <label>Price:</label><br/>
          <input type='text' value={price} onChange={(e)=> setPrice(e.target.value)}></input>
        </div>
        <div>
          <label>Quantity:</label><br/>
          <input type='text' value={quantity} onChange={(e)=> setQuantity(e.target.value)}></input>
        </div>
        <div>
          <label>Status:</label><br/>
          <input type='text' value={status} onChange={(e)=> setstatus(e.target.value)}></input>
        </div>
        <div>
          <label>Image:</label><br/>
          <input type='text' value={image} onChange={(e)=> setImage(e.target.value)}></input>
        </div>
        <div>
          <label>Description:</label><br/>
          <input type='text' value={description} onChange={(e)=> setDesc(e.target.value)}></input>
        </div><br/>
        <button type="button" onClick={handleAdd}>Add sanpham</button>
      </form>
      <h1>Danh sách sản phẩm</h1>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Image</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Status</td>
            <td>Description</td>
            <td>Action</td>
            

          </tr>
        </thead>

        <tbody>
          {
            listOfSp.map((item,index)=>
            <tr key={index}>
              <td>{index+1}</td>
              <td><img height={100} width={130} src={item.image} alt=''/></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.status}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleAddGH(`${item._id}`)}>AddToCart</button>
                <button><a href={`/editsp/${item._id}`}>Edit</a></button>
                <button onClick={()=> handleDelete(`${item._id}`)}>Delete</button>

              </td>
              


            </tr>
            )
          }
        </tbody>
      </table>
      <div>
        {Dm_id}
      </div>    
      <Footer/>
        
        </div>
  )
}

export default Sanpham