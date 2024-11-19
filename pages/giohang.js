import React from 'react'
import { useEffect,useState } from 'react'
import Header from './header';
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
// import AxiosInstance from '../lib/Axiosintance'
function Giohang() {
    const[cart, setCart] = useState (() =>{
    const storedCart = sessionStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : []
});


const kiemtragiohang = (product) => {
    for(let i = 0; i < cart.length; i++)
    {
        if(cart[i]._id === product._id)
        {
            return i;
        }
    }
    return -1;
};

// const addToCart =   (product) =>{
//     let vitri = kiemtragiohang(product);
//     if(vitri === -1)
//     {
//         cart.push(product);
//         setCart([...cart]);
//     }
//     if(vitri !== -1)
//     {
//         cart[vitri].mount ++;
//         setCart([...cart]);
//     }
// };
const removeFromCart = (_id) =>{
    data._id = _id;
    const vitri = kiemtragiohang(data)
    cart.splice(vitri,1);
    setCart([...cart]);
    
}
const addGH = async (_id) =>{
    data._id = _id;
    const vitri = kiemtragiohang(data)
    cart[vitri].mount++;
    setCart([...cart]);

}
const subtractGH = async (_id)=>{
    data._id = _id;
    const vitri = kiemtragiohang(data);
    if(cart[vitri].mount >1)
    {
        cart[vitri].mount --;
        setCart([...cart])

    }else
    {
        alert("Khong giảm được nữa")
    }
    
}

useEffect(() =>{
    sessionStorage.setItem('cart', JSON.stringify(cart));
},[cart]);
// const {id} = useParams();
const data = {_id:"", name: "",price:0,mount:0,image:""}

// useEffect(()=>{
//     const SP = async () => {
//         try{
//             const result = await AxiosInstance().get('/sanpham/'+id);
//             data._id = result._id;
//             data.image = result.image;
//             data.name = result.name;
//             data.mount = 1;
//             data.price = result.price;
//             addToCart(data);
//         }catch (error)
//         {

//         }
//     }
//     SP();
// },[])
  return (
    <div>
    <Header/>
    <h1>Giỏ Hàng</h1>
        <table border={1} width="100%">
        <thead>
            <tr>
                <th>#</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Price</th>
                <th>Mount</th>
                <th>Money</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                cart.map((item, index)=>
                <tr key={index}>
                <td>{index + 1}</td>
                <td><img height="100" width="150" src={item.image} alt=''/></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <button onClick={()=> subtractGH(`${item._id}`)}>-</button>
                    {item.mount}
                    <button onClick={()=> addGH(`${item._id}`)}>+</button>
                </td>
                <td>{Number(item.price)*Number(item.mount)}
                
                </td>
                <td>
                    <button onClick={() => removeFromCart(`${item._id}`)}>Delete</button>
                </td>
                </tr>
                )
            }
        </tbody>
        <tbody>
            <tr></tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Tổng tiền: </td>
            <td></td>

        </tbody>
        </table>
    </div>
  )
}

export default Giohang
