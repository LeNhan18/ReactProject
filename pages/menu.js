import React from 'react'

function Menu() {
    const banner = '/image/banner1.jpg';

  return (
    <div>
    <nav>
        <ul>
             <li><a href="/">Trang chủ</a></li>
             <li><a href="/danhmuc">Danh mục</a></li>
             <li><a href="/sanpham">Sản Phẩm</a></li>
             <li><a href="/login">User</a>
             <div class="danhmucsp">
                     <ul>
                         <li><a href="/login">Đăng nhập </a></li> 
                         <li><a href="/singup">Đăng ký </a></li>
                     </ul>
                 </div>
             </li>
             <li><a href="/giohang">Giỏ hàng(<span id="soLuong">0</span>)</a></li>
        </ul>
     </nav>
     <img width={1530}src={banner} alt='s' ></img>

    </div>
  )
}

export default Menu