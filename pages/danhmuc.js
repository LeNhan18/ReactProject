import React, {useEffect,useState}  from 'react'
import {Formik, Form, Field,ErrorMessage} from 'formik'
import AxiosInstance from '../lib/Axiosintance'
import * as Yub from 'yup'
import Header from './header';
import Menu from './menu';
import Footer from './footer';

function Danhmuc() {

  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setDMS] = useState([]);



  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    const Danhmucs = async ()=>{
      try{
        const result = await AxiosInstance().get('/danhmuc');
        setDMS(result);
      }
      catch(error)
      {
        console.error("Lỗi");
      }
    }
    Danhmucs()

  },[]);

  const handleDelete = async (id) =>{
    await AxiosInstance().delete('/danhmuc/'+ id)
    setDMS(products.filter(item => item._id !== id))
  }


  const initialValues = {
    name:""
  };
  const validationSchema= Yub.object().shape({
    name:Yub.string().min(3).max(45).required("Nhập tên danh mục")
  });
  const onSubmit = async (data)=>{
    await AxiosInstance().post('/danhmuc',data)
      const result = await AxiosInstance().get('/danhmuc');
      setDMS(result)
  }
 
  return (
    <div>
    <Header/>
        <Menu/>
        <div>
          <h1 className='h1'>Thêm danh mục</h1>
          <Formik initialValues = {initialValues} validationSchema = {validationSchema} onSubmit={onSubmit} className=''>
            <Form className='form'>
              <label>Name</label> 
              <Field name="name" phaceholder="input distributor name"></Field><br/>
              <ErrorMessage name="name" component="span"></ErrorMessage><br/>
              <button type='submit'>Creat Category</button>
            </Form>

          </Formik>
        </div>
        <h1 className='h1'>Category</h1>
        <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>action</th>

          </tr>
        </tbody>
        <tbody>
          {products.map((item,index)=>
          <tr key = {index}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>
            <button><a href={`/editdm/${item._id}`}>Edit</a></button>
            <button onClick={()=> handleDelete(`${item._id}`)}>delete</button>

          </td>
          </tr>
          )}
        </tbody>
        </table>
        <Footer/>
    </div>
  )
  
}

export default Danhmuc