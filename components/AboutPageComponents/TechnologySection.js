import Image from 'next/image';
import A1 from '../../public/assets/img/about/image1.png';
import A2 from '../../public/assets/img/about/image2.png';
import A3 from '../../public/assets/img/about/image3.png';


const TechnologySection = () => {
    return (
      <section id="product" className="technology ">
  <div className="container" data-aos="fade-up">  
    <div className="row">     
      <div className="col-lg-8 offset-lg-2">
        <h2>we follow standard practices</h2>
      </div>
    </div>
  </div>
  <div className="container " data-aos="fade-up"> 
    <div className="row">
      <div className="col-lg-4 mt-5 ">
        <div className="box" data-aos="fade-up" data-aos-delay={200}>
          <Image alt="img"  src={A1} className="img-fluid"  />
        </div>
      </div>
      <div className="col-lg-4   mt-5">
        <div className="box" data-aos="fade-up" data-aos-delay={200}>
        <Image alt="img"  src={A3} className="img-fluid"  />
        </div>
      </div>
      <div className="col-lg-4  mt-5 ">
        <div className="box" data-aos="fade-up" data-aos-delay={200}>
        <Image alt="img"  src={A2} className="img-fluid"  />
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default TechnologySection
