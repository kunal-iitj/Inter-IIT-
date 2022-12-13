import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ImageSlider() {
    const images=[
        {
            id:1,
            src:"https://images.unsplash.com/photo-1516981442399-a91139e20ff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhcnRpc3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            alt:"",
        },
        {
            id:2,
            src:"https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBhcnRpc3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            alt:"",
        },
        {
            id:3,
            src:"https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljJTIwYXJ0aXN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            alt:"",
        },
        {
            id:4,
            src:"https://images.unsplash.com/photo-1517305542662-2dd61accb41d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwYXJ0aXN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            alt:"",
        },
        ];
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        };    
  return (
    <div className='imgslider'>
        <div className='carouselbutton'>
        <button className="listenbutton">Listen now</button>
        <button className="likebutton">Add to Favourites</button>
        </div>
      <Slider {...settings}>
        {images.map((item)=>(
            <div key={item.id}>
                <img src={item.src} alt={item.alt}/>
            </div>
        ))}
      </Slider>
    </div>
  )
}
