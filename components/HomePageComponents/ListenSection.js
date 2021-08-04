import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import I1 from '../../public/assets/img/items/1.png'
import I2 from '../../public/assets/img/items/2.png'
import I4 from '../../public/assets/img/items/4.png'
import I5 from '../../public/assets/img/items/5.png'
import I6 from '../../public/assets/img/items/6.png'


// Import Swiper styles
import "swiper/swiper.min.css";



const ListenSection = () => {
    return (
       <section id="listen" className="listen stretch-left">
  <div className="container-fluid padr0" data-aos="fade-up" data-aos-delay={200}>
    <div className="row gy-4">
      <div className="col-lg-8 col-md-8 offset-lg-3 offset-md-3" data-aos="fade-up" data-aos-delay={200}>
        <h2 className="font2 fs50 color3 fw300 lh64">listen, learn and co-create</h2>
        <h3 className="font2 fs22 color3 fw300 lh36">Our cultural belief is fundamentally to listen, learn and co-create to unleash full potential. We believe that we need to be endlessly curious and open to new ideas in order to achieve mastery. </h3>
      </div>
    </div>  
  </div> 
  <div className="row container-fluid padr0 nopad">
    <div className="col-lg-12 grid-margin " data-aos="fade-up" data-aos-delay={300}>
    <Swiper   className="mySwiper"  spaceBetween={50}
      slidesPerView={3} >
    <SwiperSlide  >
    <div className="item"> <Image alt="img"  src={I1} layout="responsive" className="img-fluid"  /> </div>
    </SwiperSlide>
    <SwiperSlide  >
    <div className="item"> <Image alt="img"  src={I2} layout="responsive" className="img-fluid"  /> </div>
    </SwiperSlide>
    <SwiperSlide  >
    <div className="item"> <Image alt="img"  src={I4} layout="responsive" className="img-fluid"  /> </div>
   </SwiperSlide>
   <SwiperSlide  >
   <div className="item"><Image alt="img"  src={I5} layout="responsive" className="img-fluid"  /></div>
   </SwiperSlide>

   <SwiperSlide  >
   <div className="item"> <Image alt="img"  src={I6} layout="responsive" className="img-fluid"  /> </div> 
   </SwiperSlide>

    
     
       
       
            
    </Swiper>
                          
      
    </div>
  </div>
</section>

    )
}

export default ListenSection
