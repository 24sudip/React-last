
import React from 'react'
import "./blog.css"
import Slider from "react-slick";

const Blog = () => {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="next"
            onClick={onClick}
          ><i class="fa-solid fa-arrow-right"></i></div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="prev"
            onClick={onClick}
          ><i class="fa-solid fa-arrow-left"></i></div>
        );
      }

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <section id='blog'>
        <div className='container'>
            <div className='blog_main'>
            <Slider {...settings}>
                <div className='blog_item'>
                    <h4>Instagram</h4>
                    <i class="fa-solid fa-key"></i>
                    <h2>Photo Gallery</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                </div>
                <div className='blog_item'>
                    <h4>Instagram</h4>
                    <i class="fa-solid fa-key"></i>
                    <h2>Photo Gallery</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                </div>
                <div className='blog_item'>
                    <h4>Instagram</h4>
                    <i class="fa-solid fa-key"></i>
                    <h2>Photo Gallery</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                </div>
            </Slider>
            </div>
        </div>
    </section>
    
  )
}

export default Blog
