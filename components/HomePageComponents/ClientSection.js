import Client1 from '../../public/assets/img/clients/1.png';
import Client2 from '../../public/assets/img/clients/2.png';
import Client3 from '../../public/assets/img/clients/3.png';
import Client4 from '../../public/assets/img/clients/4.png';
import Client5 from '../../public/assets/img/clients/5.png';
import Client6 from '../../public/assets/img/clients/6.png';
import Client7 from '../../public/assets/img/clients/7.png';
import Client8 from '../../public/assets/img/clients/8.png';
import Client9 from '../../public/assets/img/clients/9.png';
import Client10 from '../../public/assets/img/clients/10.png';
import Client11 from '../../public/assets/img/clients/11.png';
import Client12 from '../../public/assets/img/clients/12.png';


import Image from 'next/image';

const ClientSection = () => {
    return (
        <section id="clients" className="clients">
  <div className="container " data-aos="fade-up">  
    <div className="row">     
      <div className="col-lg-12 ">
        <h2 className="font2 fs50 color1 fw300 lh64">clients</h2>
      </div>
    </div>
  </div>
  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <div className="row">
      <div className="col-lg-12">
        <div className="client-wrapper align-items-center" data-aos="fade-up" data-aos-delay={200}>
          <div className="client-item">
            <Image alt="img" src={Client1} className="img-fluid" layout="fixed"   />
            </div>
          <div className="client-item">
          <Image alt="img" src={Client2} className="img-fluid" layout="fixed"   />
          </div>
          <div className="client-item">
          <Image alt="img" src={Client3} className="img-fluid" layout="fixed"   />
            </div>
          <div className="client-item"> <Image alt="img" src={Client4} className="img-fluid" layout="fixed"   /></div>
          <div className="client-item"> <Image alt="img" src={Client5} className="img-fluid" layout="fixed"   /></div>
          <div className="client-item">  <Image alt="img" src={Client6} className="img-fluid" layout="fixed"   /></div>
          <div className="client-item">  <Image alt="img" src={Client7} className="img-fluid" layout="fixed"   /></div>
          <div className="client-item">  <Image alt="img" src={Client8} className="img-fluid" layout="fixed"   /></div>
          <div className="client-item">  <Image alt="img" src={Client9} className="img-fluid" layout="fixed"   /></div>
          <div className="client-item">  <Image alt="img" src={Client10} className="img-fluid" layout="fixed"   /></div>
          <div className="client-item">  <Image alt="img" src={Client11} className="img-fluid" layout="fixed"   /></div>
          <div className="client-item">  <Image alt="img" src={Client12} className="img-fluid" layout="fixed"   /></div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default ClientSection
