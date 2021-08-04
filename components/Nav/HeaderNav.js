import {useState,useEffect} from 'react';
import Link from 'next/link'
const HeaderNav = () => {
  const [current,setCurrent] = useState("")
  useEffect(() => {
      process.browser && setCurrent(window.location.pathname)
 
 console.log(window.location.pathname)
  },[process.browser && window.location.pathname])

    return (
        <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link href="/">
          <a  className="logo d-flex align-items-center" data-aos="fade-right" data-aos-delay={100}>
            <img alt="img"  src="assets/img/logo.svg"  />
          </a>
          </Link>
        
          <nav id="navbar" className="navbar">
            <ul>
              <li   
              className={current === "/services"? 'active':""}
              >
                <Link href="/services">
                <a className="nav-link ">services</a>
                </Link>
                </li>
                <li   
              className={current === "/products" ? 'active':""}
              >
                <Link href="/products">
                <a className="nav-link ">products</a>
                </Link>
                </li>
                <li   
              className={current === "/contact"? 'active':""}
              >
                <Link href="/contact">
                <a className="nav-link ">contact</a>
                </Link>
                </li>
                <li   
              className={current === "/about"? 'active':""}
              >
                <Link href="/about">
                <a className="nav-link ">about</a>
                </Link>
                </li>
          
             
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
        </div>
      </header>
    )
}

export default HeaderNav
