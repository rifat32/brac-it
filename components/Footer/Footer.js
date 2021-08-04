import Link from 'next/link'
import Image from 'next/image';
import footerLogo from '../../public/assets/img/logofooter.svg'

const Footer = () => {
    return (
       <footer id="footer" className="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-4 footer-info" data-aos="fade-up" data-aos-delay={200}>
          <Link href="/">
          <a  className="logo d-flex align-items-center">
            <Image alt="img" src={footerLogo}  />
          </a>  
          </Link>
         
          <div className="copyright" data-aos="fade-up" data-aos-delay={300}>
            © 2021 BRAC IT. All rights reserved. 
          </div>
          <div className="footer-links" data-aos="fade-up" data-aos-delay={200}>            
            <ul className="termlink mt-2">
              <li>
              <Link href="/terms-conditions">
              <a >Terms and Conditions</a>
              </Link>
                 </li>  
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 footer-contact" data-aos="fade-up" data-aos-delay={200}>
          <h4>headquarter</h4>
          <p className="mt-3">
            BRAC IT <br />Homaira Bhaban<br /> House 115, Road 5 <br />Block B, Niketan, Gulshan 1<br /> Dhaka 1212, Bangladesh
            <br /><br />
            <span data-aos="fade-up" data-aos-delay={300}>+8802-8836332<br /> +8809606999654</span> <br /><br />
            <span data-aos="fade-up" data-aos-delay={400}>info@bracits.com</span> <br />
          </p>
        </div>
        <div className="col-lg-2 col-md-4 footer-links" data-aos="fade-up" data-aos-delay={200}>
          <h4>website</h4>
          <ul className="mt-3" data-aos="fade-up" data-aos-delay={300}>
            <li> 
              <Link href="/">
              <a >home</a>
              </Link>
              </li> 
              <li> 
              <Link href="/services">
              <a >services</a>
              </Link>
              </li> 
              <li> 
              <Link href="/product">
              <a >product</a>
              </Link>
              </li> 
              <li> 
              <Link href="/about">
              <a >about</a>
              </Link>
              </li> 
              <li> 
              <Link href="/contact">
              <a >contact</a>
              </Link>
              </li> 
          </ul>
        </div>
        <div className="col-lg-2 col-md-4  footer-contact  text-md-start" data-aos="fade-up" data-aos-delay={200}>
          <h4>social</h4>
          <div className="social-links mt-3">
            <a rel="noreferrer" href="https://www.facebook.com/bracitservices/" target="_blank" className="facebook"><i className="bi bi-facebook" /></a>
            <a rel="noreferrer" href="https://www.instagram.com/bracit_/" target="_blank" className="instagram"><i className="bi bi-instagram bx bxl-instagram" /></a>
            <a rel="noreferrer" href="https://www.linkedin.com/company/brac-it-services-limited" target="_blank" className="linkedin"><i className="bi bi-linkedin bx bxl-linkedin" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    )
}

export default Footer
