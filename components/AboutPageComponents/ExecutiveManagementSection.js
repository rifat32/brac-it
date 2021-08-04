
import asif from '../../public/assets/img/team/asif.png'
import shameran from '../../public/assets/img/team/shameran.png'
import selim from '../../public/assets/img/team/selim.png'
import Image from 'next/image'
const ExecutiveManagementSection = () => {
    return (
        <section className="team executiveteam">
  <div className="container" data-aos="fade-up">
    <h2>board of directors </h2>
    <div className="row gy-4" id="teamcontent">
      <div className="col-lg-4 col-md-4  d-flex align-items-stretch mt-5 teamitem" data-aos="fade-up" data-aos-delay={100}>
        <div className="member">
          <div className="member-img">
            <div className="col-lg-9 col-sm-12">
              <Image alt="image" src={asif} className="img-fluid"  />
              <div className="social">
                <a ><i className="bi bi-twitter" /></a>
                <a ><i className="bi bi-facebook" /></a>
                <a ><i className="bi bi-instagram" /></a>
                <a ><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="member-info">
            <h4>Asif Saleh</h4>
            <p>Chairman, BRAC IT</p>
            <p className="detail">Mr. Asif Saleh is the Executive Director of BRAC Bangladesh. He brings with him a diverse multi-sectoral experience in senior leadership roles in private, public and non-government sectors, with a proven track record of effectively managing interfaces of development programming, operational and financial sustainability and building effective partnerships, both within and outside BRAC. </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 d-flex align-items-stretch mt-5 teamitem" data-aos="fade-up" data-aos-delay={200}>
        <div className="member">
          <div className="member-img">
            <div className="col-lg-9 col-sm-12">
               <Image alt="image" src={shameran} className="img-fluid"  />
              <div className="social">
                <a ><i className="bi bi-twitter" /></a>
                <a ><i className="bi bi-facebook" /></a>
                <a ><i className="bi bi-instagram" /></a>
                <a ><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="member-info">
            <h4>Shameran Abed</h4>
            <p>Director, BRAC IT</p>
            <p className="detail">{"Mr. Shameran Abed is Senior Director of BRAC's Microfinance and Ultra-Poor Graduation programmes. BRAC’s microfinance programme serves more than 8 million clients in seven countries in Asia and Africa, with total assets exceeding USD 3.5 billion. Mr. Abed chairs the board of bKash, BRAC Bank’s mobile financial services subsidiary and one of the world’s largest mobile money providers, and serves on the boards of several institutions including BRAC Bank, BRAC Uganda Bank, and the Global Alliance for Banking on Values (GABV)."} </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 d-flex align-items-stretch mt-5 teamitem" data-aos="fade-up" data-aos-delay={300}>
        <div className="member">
          <div className="member-img">
            <div className="col-lg-9 col-sm-12">
            <Image alt="image" src={selim} className="img-fluid"  />
              <div className="social">
                <a ><i className="bi bi-twitter" /></a>
                <a ><i className="bi bi-facebook" /></a>
                <a ><i className="bi bi-instagram" /></a>
                <a ><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="member-info">
            <h4>Selim R F Hossain</h4>
            <p>Director, BRAC IT</p>
            <p className="detail">{"Mr. Selim R. F. Hussain joined BRAC Bank Limited as the Managing Director &amp; CEO on November 8, 2015. Mr. Hussain is a career banker and an immediate past CEO &amp; Managing Director of IDLC Finance Limited who is widely recognized and highly acclaimed across the financial sector for being the architect of IDLC Finance's meteoric rise over the past six years. He was also the Chairman of the Board of Directors from 2010 to 2012 of IDLC Finance's two subsidiaries – IDLC Investments Limited and IDLC Securities Limited."}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default ExecutiveManagementSection
