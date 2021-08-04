import '../styles/globals.css'
import HeaderNav from '../components/Nav/HeaderNav'
import Head from 'next/head'
import { Player } from '@lottiefiles/react-lottie-player';
import Footer from '../components/Footer/Footer';
import {AiOutlineArrowUp} from 'react-icons/ai';
function MyApp({ Component, pageProps }) {
  return <>
    <Head>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>home || bracIT</title>
  <meta content="We, BRAC IT, are a digital engineering and innovation company." name="description" />
  <meta content="Brac IT, BRAC, Solution, digital, innovation, engineering, software, website" name="keywords" />
  {/* Favicons */}
  <link href="assets/img/favicon.png" rel="icon" />
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  <meta property="og:title" content="We, BRAC IT, are a digital engineering and innovation company." />
  <meta property="og:image" content="assets/img/bracit.png" />
  <meta property="og:description" content="we are a community of designers, engineers, researchers and more. our shared values and beliefs influence the work that we do, and the impact we want to achieve." />
  <meta property="og:url" content="https://www.bracits.com" />
  
 
  
  
  {/* Global site tag (gtag.js) - Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-64W9W75RV9"></script>
  

  <script defer src="assets/js/jquery.min.js"></script>
  <script defer src="assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
  <script defer src="assets/vendor/aos/aos.js"></script>
  <script defer src="assets/vendor/php-email-form/validate.js"></script>
  {/* <script defer src="assets/vendor/swiper/swiper-bundle.min.js"></script> */}
  <script defer src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script defer src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  


  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
 
  <script defer  src="./assets/js/main.js"></script>
  <script defer  src="assets/js/indexpage.js"></script>
      </Head>
  <div id="loading">
  <div id="preloader">
    <div className="container">
      <div className="row">
        <div className="col-md-12">               
           
          <Player
 src="assets/js/bracit.json" background="transparent" speed={1} style={{width: 300, height: 300}} loop={'true'} autoPlay
></Player>             
        </div>
      </div>
    </div>
  </div>
</div>
<HeaderNav/>

   <Component {...pageProps} />
  <Footer/>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"> <AiOutlineArrowUp/></a>
 
   </>
}

export default MyApp
