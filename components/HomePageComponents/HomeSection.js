import React from 'react'
import HomeSlider from './HomeSlider'

const HomeSection = () => {
    return (
        <>
        <HomeSlider/>
        <section className="home d-flex align-items-center">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 d-flex flex-column text-center">
        <div className="heighlitecontent">
          <h1 className="font1 fw300 fs28 color3 lh40" data-aos="fade-up">We pursue purposeful innovation to deliver great user experience. Our mission is to ensure customer happiness through human centered approach, future proof technology and best practices. </h1>
        </div>   
      </div>        
    </div>
  </div>
</section>
            
        </>
    )
}

export default HomeSection
