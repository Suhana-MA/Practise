import Image from "next/image";
import styles from "../page.module.css"; 

export default function Header() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Joboy Services | People Behind the Success of Joboy</title>
      <meta
        name="description"
        content="Our mission is to help our customers find and connect with verified, experienced, service professionals around them, and to help those experts find customers near them with ease"
      />
      <link rel="icon" href="joboyimages/favicon.png" />
      <link rel="stylesheet" href="joboycss/bootstrap.min.css" />
      <link rel="stylesheet" href="joboycss/animate.css" />
      <link rel="stylesheet" href="joboycss/all.min.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="joboycss/app.css" />
      
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TCZGFR9"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      
      <div id="mySidenav" className="sidenav1">
        <a href="javascript:void(0)" className="closebtn" onClick={ closeNav}>
          <i className="fal fa-times close-icon" />
        </a>
        <div className="main-menu">
          <ul className="nav">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">
                Home
              </a>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown">
                About <i className="fa fa-chevron-circle-down drop-arrow" />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Our Mission
                </a>
                <a className="dropdown-item" href="#">
                  Our Team
                </a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">
                Our services
              </a>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">
                Careers
              </a>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">
                Contact Us
              </a>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle contact-btn" data-toggle="dropdown">
                Select Country <i className="fa fa-chevron-circle-down drop-arrow" />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Azerbaijan</a>
                <a className="dropdown-item" href="#">Canada</a>
                <a className="dropdown-item" href="#">India</a>
                <a className="dropdown-item" href="#">United Arab Emirates</a>
                <a className="dropdown-item" href="#">United Kingdom</a>
                <a className="dropdown-item" href="#">South Africa</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
     
      <header id="header-home2">
        <div className="container">
          <div className="nav" id="nav">
            <div className="logo">
              <div className="toggle" onClick={() => openNav()}>
                <span className="toggle-line first" />
                <span className="toggle-line second" />
                <span className="toggle-line third" />
              </div>
              <a href="#" className="digieized">
                <img
                  src="joboyimages/logo.png"
                  className="img-fluid"
                  alt="Joboy Home Services"
                />
              </a>
            </div>
            <div className="navigation">
              <ul className="navigation-ul">
                <li className="navigation-li">
                  <a href="#" className="links">
                    Home
                  </a>
                </li>
                <li className="navigation-li">
                  <a href="#" className="links">
                    <p>About Us</p>
                  </a>
                  <ul className="drop-ul">
                    <li className="drop-li">
                      <a href="#" className="drop-links">
                        Our Mission
                      </a>
                    </li>
                    <li className="drop-li">
                      <a href="#" className="drop-links">
                        Our Team
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="navigation-li">
                  <a href="#" className="links">
                    Our Services
                  </a>
                </li>
                <li className="navigation-li">
                  <a href="#" className="links">
                    Careers
                  </a>
                </li>
                <li className="navigation-li">
                  <a href="#" className="links">
                    contact us
                  </a>
                </li>
                <li className="navigation-li">
                  <a href="" className="contact-btn">
                    <p>Select Country</p>
                  </a>
                  <ul className="drop-ul">
                    <li className="drop-li">
                      <a href="#" className="drop-links">
                        Azerbaijan
                      </a>
                    </li>
                    <li className="drop-li">
                      <a href="#" className="drop-links">
                        Canada
                      </a>
                    </li>
                    <li className="drop-li">
                      <a href="#" className="drop-links">
                        India
                      </a>
                    </li>
                    <li className="drop-li">
                      <a href="#" className="drop-links">
                        United Arab Emirates
                      </a>
                    </li>
                    <li className="drop-li">
                      <a href="#" className="drop-links">
                        United Kingdom
                      </a>
                    </li>
                    <li className="drop-li">
                      <a href="#" className="drop-links">
                        South Africa
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
     
    </>
  );
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}