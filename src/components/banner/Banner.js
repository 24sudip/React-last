
import React from 'react'
import "./banner.css"

const Banner = () => {
  return (
    <section id='banner'>
        <div className='container'>
            <div className='banner_main'>
                <div className='banner_item'>
                    <h4>Chase the new Flavour</h4>
                    <i class="fa-solid fa-key"></i>
                    <h1>The key to</h1>
                    <h2>Fine dining</h2>
                    <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    <a>Explore Menu</a>
                </div>
                <div className='banner_item'>
                    <div className='banner_image'>
                        <img src="images/banner.jpg" alt='banner'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
