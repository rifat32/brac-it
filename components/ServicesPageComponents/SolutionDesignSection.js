import Image from 'next/image'
import S1 from '../../public/assets/img/services/service1.png'

const SolutionDesignSection = () => {
    return (
       <section className="services" id="solution-design" name="solutiondesign">
  <div className="container " data-aos="fade-up">  
    <div className="row">
      <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="box">
          <h2> solution design</h2>
          <h4>Catering need through business impact</h4>
        </div>
      </div>
      <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-4" data-aos="fade-up" data-aos-delay={100}>
        <Image alt="img"  src={S1} className="img-fluid" />
        <div className="box">
          <p> d.School is a department of BRAC IT dedicated to designing creative solutions that elevate customer experiences. Creating experiences that draw people in and keep them coming back is critical to your success. This strategy requires a keen understanding of what the people need, the right resources, and the correct application.</p>
          <p>{"We'll help you improve your customer experience by designing a framework that points out where and how to wow people. We will work with you to design, develop, and launch products and services that deliver genuine experience and build strong customer relationships by identifying growth opportunities through design and data-driven experimentation."} </p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default SolutionDesignSection
