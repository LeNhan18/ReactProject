import React ,{useState}from 'react'
import Header from './header'
import AxiosInstance from '../lib/Axiosintance'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import {Formik, Form, Field,ErrorMessage} from 'formik'
// import * as Yub from 'yup'



function Singup() {

  const [username, setusername] = useState('');
  const [fullname, setfullname] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  // const [position, setUSER] = useState('')

  let history = useHistory();
  const handleAdd = async () => {
    const data = {username,fullname,password,email,phone,position:"1"}
    console.log(data);
    await AxiosInstance().post('/user', data)
    .then(function(response){
      // console.log('POST RESPONSE: ',response.data);
    })
    .catch(function(error){
      console.error('POST Error:',error);
    })
    history.push('/')
  }

  // const initialValues = {
  //   username:"",
  //   fullname:"",
  //   password:"",
  //   email: "",
  //   phone: "",
  //   position:""
  // };
  // const validationSchema= Yub.object().shape({
  //   username:Yub.string().min(3).max(45).required("Nhập username"),
  //   fullname:Yub.string().min(3).max(45).required("Nhập fullname"),
  //   password:Yub.string().min(3).max(45).required("Nhập password"),
  //   email:Yub.string().min(3).max(45).required("Nhập email"),
  //   phone:Yub.string().min(3).max(45).required("Nhập phone")

  // });
  // const onSubmit = async (data)=>{
  //   await AxiosInstance().post('/user',data)
  //   .then(function(response){
  //     // console.log('POST RESPONSE: ',response.data);
  //   })
  //   .catch(function(error){
  //     // console.error('POST Error:',error);
  //   })
  // }


  return (
    <div>
      <Header/>
        <div class="container">
            <div class="container-login-all">
                <div class="main">

                    
              
                    <form action="" method="POST" class="form" id="form-2">
                      <h3 class="heading">Đăng ký</h3>
                      <p class="desc"></p>
              
                      <div class="spacer"></div>

                      <div class="form-group">
                        <label for="email" class="form-label">UserName</label>
                        <input type='text' value={username} onChange={(e)=> setusername(e.target.value)}/>
                        <span class="form-message"></span>
                      </div>

                      <div class="form-group">
                        <label for="email" class="form-label">FullName</label>
                        <input type='text' value={fullname} onChange={(e)=> setfullname(e.target.value)}/>
                        <span class="form-message"></span>
                      </div>

                      <div class="form-group">
                        <label for="password" class="form-label">Mật khẩu</label>
                        <input type='password' value={password} onChange={(e)=> setpassword(e.target.value)}/>
                        <span class="form-message"></span>
                      </div>
              
                      <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input type='email' value={email} onChange={(e)=> setemail(e.target.value)}/>
                        <span class="form-message"></span>
                      </div>

                      <div class="form-group">
                        <label for="email" class="form-label">Phone</label>
                        <input type='text' value={phone} onChange={(e)=> setphone(e.target.value)}/>
                        <span class="form-message"></span>
                      </div>
              
                      <button type="button"class="form-submit" onClick={handleAdd}><a href='/'> Đăng nhập </a></button>
                    </form>
              
                  </div>
                  
                
            </div>
        </div>
    </div>
  )
}

export default Singup