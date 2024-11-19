import React from 'react'
import { memo } from 'react'

function Footer({text}) {
  return (
    <section className='footer'>
    <div>
    <div class="container">
          <div class="footer-content">
              <div class="footer-section about">
                  <h2>Về chúng tôi</h2>
                  <p>Your Online Store cam kết cung cấp các sản phẩm chất lượng cao cho khách hàng. Khám phá danh mục đa dạng của chúng tôi và tìm những ưu đãi tốt nhất.</p>
              </div>
              <div class="footer-section links">
                  <h2>Liên kết nhanh</h2>
                  <ul>
                      <li><a href="/">Trang chủ</a></li>
                      <li><a href="/danhmuc">Danh mục</a></li>
                      <li><a href="/sanpham">Sản Phẩm</a></li>
                  </ul>
              </div>
              <div class="footer-section contact-form">
                  <h2>Liên hệ</h2>
                  <form action="#">
                      <input type="email" name="email" class="text-input contact-input" placeholder="Địa chỉ email của bạn"/>
                      <textarea name="message" class="text-input contact-input" placeholder="Tin nhắn của bạn"></textarea>
                      <button type="submit" class="btn btn-primary">Gửi</button>
                  </form>
              </div>
          </div>
      </div>
        {/* <div>{text}</div> */}
    </div></section>
  )
}

export default memo (Footer)