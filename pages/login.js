import React ,{useState} from 'react'
import Header from './header'
import Menu from './menu'
import Footer from './footer'
import AxiosInstance from '../lib/Axiosintance'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


function Login() {
  // const initialValues ={
  //   email:"",
  //   password:""
  // }
  // const validationSchema = Yub.object().shape({
  //   email:Yub.string().min(3).max(45).require("Nhap email"),
  //   password:Yub.string().min(3).max(45).require("Nhap email")

  // })
  // const onSubmit = async(data) => {
  //   const result = await AxiosInstance().post('user/login', data)
  //   sessionStorage.setItem('user', JSON.stringify(result));
  //   // console.log(result);
  //   if(result.positon === 0)
  //   {
  //     window.location.href ="/admin"
  //   }else
  //   if(result.positon === 1)
  //   {
  //     window.location.href = "/"
  //   }else
  //   {
  //     alert('Không có user')
  //   }
  // }
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');

  let history = useHistory();
  const handleAdd = async () => {
    const data = {email,password}
    console.log(data);
    const result = await AxiosInstance().get('/user', data)
    sessionStorage.setItem('user', JSON.stringify(result));
    if(result.positon === 0)
        {
          window.location.href ="/admin"
        }else
        if(result.positon === 1)
        {
          window.location.href = "/"
        }else
        {
          alert('Không có user')
        }
    history.push('/')
  }

  return (
    <div>
    <Header/>
    <Menu/>
        <div class="container">
            <div class="container-login-all">
                <div class="main">

                    
              
                    <form action="" method="POST" class="form" id="form-2">
                      <h3 class="heading">Đăng nhập</h3>
                      <p class="desc"></p>
              
                      <div class="spacer"></div>
              
                      <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input type='email' value={email} onChange={(e)=> setemail(e.target.value)}/>
                        <span class="form-message"></span>
                      </div>
              
                      <div class="form-group">
                        <label for="password" class="form-label">Mật khẩu</label>
                        <input type='email' value={password} onChange={(e)=> setpassword(e.target.value)}/>
                        <span class="form-message"></span>
                      </div>
              
                      <button type="button"class="form-submit" onClick={handleAdd}>Đăng nhập</button>
                    </form>
              
                  </div>
                  
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Login