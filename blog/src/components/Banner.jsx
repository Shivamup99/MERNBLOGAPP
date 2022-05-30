import React from 'react'
import '../styles/banner.scss'
import Slider from "react-slick";
const Banner = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed:2000
    };
  return (
      <>
      <h2 className='t-blog'>Trending Blogs</h2>
       <Slider {...settings} className='banner'>
          
               <img src="https://photoscissors.com/images/samples/3-before.jpg" alt="sss" />
               <img src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" alt="qqq" />
               <img src="https://res.cloudinary.com/twenty20/private_images/t_standard-fit/photosp/876b471e-7869-4370-a91c-3e1a745efdbb/stock-photo-nature-forest-holding-protection-agriculture-green-hand-life-human-876b471e-7869-4370-a91c-3e1a745efdbb.jpg" alt="sssee" />
               <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" alt="dkk" />
               <img src="https://st.depositphotos.com/1518767/2805/i/600/depositphotos_28056981-stock-photo-stressed-man-looking-at-a.jpg" alt="ddd" />
               <img src="https://burst.shopify.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page/download" alt="ddm" />
              
       </Slider>
      </>
  )
}

export default Banner