

const ContactSection = () => {
    return (
        <section id="contact" className="contact">
  <div className="container" data-aos="fade-up">       
    <div className="row gy-4">
      <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12  order-2 order-sm-2 order-md-1 order-xs-1">
        <div className="map">                 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.942481551785!2d90.40949404962072!3d23.77299571378117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77838bd8cf9%3A0x5c8ec7d972b268f2!2sBRAC%20IT%20Services%20Limited%20(biTS)!5e0!3m2!1sen!2sbd!4v1625586606362!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
        </div>
      </div>
      <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12  order-1 order-md-2 order-sm-1 order-xs-2 contactform">
        <h2>BRAC IT</h2>
        <img alt="img"  src="assets/img/bottomline.svg" />
        <h4>headquarter </h4>
        <div className="info-box">                 
          <p>Homaira Bhaban<br /> House 115, Road 5<br /> Block B, Niketan, Gulshan 1<br /> Dhaka 1212, Bangladesh</p>
          <p className="phone">  +88028836332 <br />+8809606999654 </p>
          <a href="mailto:info@bracits.com"> <p className="email">  info@bracits.com</p></a>                 
        </div> 
      </div>
    </div>
  </div>
</section>

    )
}

export default ContactSection
