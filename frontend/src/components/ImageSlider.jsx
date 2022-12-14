import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ImageSlider() {
    const images=[
        {
            id:1,
            src:"https://source.unsplash.com/random/?music,artist",
            alt:"",
        },
        {
            id:2,
            src:"https://source.unsplash.com/random/?artist,music",
            alt:"",
        },
        {
            id:3,
            src:"https://source.unsplash.com/random/?music,song",
            alt:"",
        },
        {
            id:4,
            src:"https://source.unsplash.com/random/?singer,artist",
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
