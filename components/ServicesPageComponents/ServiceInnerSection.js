import Image from 'next/image'
import Banner from '../../public/assets/img/services/servicebanner.png'

const ServiceInnerSection = () => {
    return (
      <section className="serviceinner">
  <div className="container-fluid nopad">
    <div className="row">
      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay={100}>
        <Image alt="img"  src={Banner} className="img-fluid"  />
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 " data-aos="fade-up" data-aos-delay={100}>
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5" data-aos="fade-up" data-aos-delay={100}>
        <div className="outer-box">
          <p className="phead">Our services include a unified collaboration between multiple disciplines and industry skills. We constantly perfect our technological capacities and expertise to meet what our collaborators desire and the people need.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default ServiceInnerSection
