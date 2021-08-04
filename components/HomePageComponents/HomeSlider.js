import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

// Import Swiper styles
import "swiper/swiper.min.css";


// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([ Navigation ]);


const HomeSlider = () => {
    return (
        <section className="home-slider-next" >
<div className="swiper-container-home-next">


<Swiper   className="mySwiper" navigation 


>
  <SwiperSlide  >
  <div className="slide-inner--image-next" 
 >
   <img className="slide-inner--image-next-main" src="./assets/img/slide/banner4.png"/>
     <div className="slide-inner--info-next"   >
     <h1>we are BRAC IT</h1>
   </div>
   
 </div>

  </SwiperSlide>
  <SwiperSlide  >
  <div className="slide-inner--image-next" 
 >
    <img className="slide-inner--image-next-main" src="./assets/img/slide/banner1.png"/>
     <div className="slide-inner--info-next"   >
     <h1>co-creating solutions with direct business impact</h1>
   </div>
   
 </div>

  </SwiperSlide>
  <SwiperSlide  >
  <div className="slide-inner--image-next" 
  
 
 >
    <img className="slide-inner--image-next-main" src="./assets/img/slide/banner2.png"/>
     <div className="slide-inner--info-next"   >
     <h1>prioritizing customer happiness</h1>
   </div>
   
 </div>

  </SwiperSlide>
  <SwiperSlide  >
  <div className="slide-inner--image-next" 
  
  
 >
    <img className="slide-inner--image-next-main" src="./assets/img/slide/banner3.png"/>
     <div className="slide-inner--info-next"   >
     <h1>embracing uncertainties through experience and knowledge</h1>
   </div>
   
 </div>

  </SwiperSlide>
 
 
  
  
  </Swiper>


</div>

</section>
    )
}

export default HomeSlider
