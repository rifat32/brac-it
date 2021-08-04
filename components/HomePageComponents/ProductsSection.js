import Image from 'next/image'
import A1 from '../../public/assets/img/Arrow-1.png'
import A4 from '../../public/assets/img/arrow-4@2x.svg'
import P1 from '../../public/assets/img/products/1.png'
import P2 from '../../public/assets/img/products/2.png'
import P3 from '../../public/assets/img/products/3.png'
import P4 from '../../public/assets/img/products/4.png'
import Link from 'next/link'

const ProductsSection = () => {
    return (
       <section id="product" className="products stretch-left">
  <div className="container-fluid  products-heading " data-aos="fade-up">  
    <div className="row">     
      <div className="col-lg-8">
        <h2 className="font1 fs50 color1 fw300 lh64">products</h2>
      </div>
      <div className="col-lg-4 mt-4 productlink">
        <Link href="/products">
        <a  className="font2 fs22 color1 fw300 lh45">view all <span>  <i className="bi"> 
              <Image alt="img"  className="arrow-2" src={A1} /> </i></span></a>
        </Link>
       
      </div>
    </div>
  </div>
  <div className="container-fluid padr0" data-aos="fade-up"> 
    <div className="row gy-6 g-0 ">
      <div className="col-lg-3 mt-5  ">
        <div className="box" data-aos="fade-up" data-aos-delay={100}>             
          <Image alt="img"  src={P1} className="img-fluid"  />
          <div className="productinfo">
            <h3 className="font2 fs22 color1 fw300 lh36">Meeting AtWork</h3>
            <p className="font2 fs16 color1 fw300 lh24">A meeting management tool to do meetings more efficiently – invite participants from within the office or outside, share agendas, keep track of the history, assign tasks and also keep track of your to-dos. 
            </p>
          </div>
          <div className="text-lg-start arrowset">
            <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
              <i className="bi">  <Image alt="img"  className="arrow-2" src={A4} /> </i>
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-3  mt-5 ">
        <div className="box" data-aos="fade-up" data-aos-delay={200}>
        <Image alt="img"  src={P2} className="img-fluid"  />
          <div className="productinfo">
            <h3 className="font2 fs22 color1 fw300 lh36">iMarketplace</h3>
            <p className="font2 fs16 color1 fw300 lh24">Intelligent and integrated marketplace solution. This supply chain management system can enhance business efficiency and ensure production &amp; supply chain optimization.</p>
          </div>
          <div className="text-lg-start arrowset">
            <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
              <i className="bi">  <Image alt="img"  className="arrow-2" src={A4} /> </i>
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-3  mt-5 ">
        <div className="box" data-aos="fade-up" data-aos-delay={300}>
        <Image alt="img"  src={P3} className="img-fluid"  />
          <div className="productinfo">
            <h3 className="font2 fs22 color1 fw300 lh36">Smart PO</h3>
            <p className="font2 fs16 color1 fw300 lh24">Easy to use, safe and smart microfinance solution that simplifies the entire process of financial services, monitoring, tracking and evaluation.</p>
          </div>
          <div className="text-center text-lg-start arrowset">
            <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
              <i className="bi"> <Image alt="img"  className="arrow-2" src={A4} /> </i>
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-3  mt-5 ">
        <div className="box" data-aos="fade-up" data-aos-delay={400}>
        <Image alt="img"  src={P4} className="img-fluid"  />
          <div className="productinfo">
            <h3 className="font2 fs22 color1 fw300 lh36">iVAT</h3>
            <p className="font2 fs16 color1 fw300 lh24">Fully compliant with VAT Act 2012 and approved by the National Board of Revenue (NBR), it offers automated VAT calculation, mushak generation, report generation with dynamic dashboard.</p>
          </div>
          <div className="text-lg-start arrowset">
            <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
              <i className="bi"> <Image alt="img"  className="arrow-2" src={A4} /> </i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default ProductsSection
