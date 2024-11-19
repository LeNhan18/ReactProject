import React from 'react'
import  {useEffect,useState}  from 'react'
import Header from './header';
import Footer from './footer';
import Menu from './menu';
import AxiosInstance from '../lib/Axiosintance';

function Home() {
  // const banner = '/image/banner2.jpg';
  // const [count, setCount] = useState[0]
  const [time,setTime] = useState(new Date());
  useEffect(() => {
    const tick = () => {
      setTime(new Date());
    };
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval)
  },[])

  const abc = time.toString();

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
      // console.log(handleAdd);

    }
    catch(error)
  {}
  }


  return (
    <>
    <Header/>
    <div>

    
        {/* <ul id="menu" >
            <li><a href='/'>Trang chủ</a></li>
            <li><a href='/danhmuc'>Category</a></li>
            <li><a href='/sanpham'>Product</a></li>
            <li>Gợi ý</li>

        </ul>
        <img width={1530}src={banner} alt='s' ></img> */}
        
        <Menu/>
        <h1>Sản phẩm của chúng tôi</h1>
        
        <section className='sanPham'>

        {
          listOfSp.map((item,index)=>
          <div class="sanPham" id="productList">

            <img  src={item.image} alt=""/>
            <p> <a href={`/sanphamdetail/${item._id}`}>{item.name}</a> </p>
            <p>Giá: {item.price}vnđ</p>
            <button type='button' onClick={() => handleAddGH(`${item._id}`)}>Thêm giỏ hàng</button>
    
        </div>
     
          )
          }
          </section>

    </div>
    <Footer text={abc}/>
    </>
  )
    }

export default Home