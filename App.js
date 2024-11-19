// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './pages/home'
import Danhmuc from './pages/danhmuc'
import Sanpham from './pages/sanpham'
import Editdm from './pages/editdm';
import Location from './pages/location';
import Login from './pages/login';
import Singup from './pages/singup';
import Lab4 from './pages/lab4';
import Editsp from './pages/editsp';
import Giohang from './pages/giohang';
import Admin from './pages/admin';
import MenuAdmin from './pages/menuAdmin';
import Sanphamdetail from './pages/sanphamdetail';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/danhmuc" exact component={Danhmuc}></Route>
          <Route path="/sanpham" exact component={Sanpham}></Route>
          <Route path="/editdm/:id" exact component={Editdm}></Route>
          <Route path="/editsp/:id" exact component={Editsp}></Route>
          <Route path="/location" exact component={Location}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/singup" exact component={Singup}></Route>
          <Route path="/lab4" exact component={Lab4}></Route>
          <Route path="/giohang" exact component={Giohang}></Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Route path="/menuAdmin" exact component={MenuAdmin}></Route>
          <Route path="/sanphamdetail" exact component={Sanphamdetail}></Route>

        </Switch>
      </Router>



      
    </div>
  );
}

export default App;
