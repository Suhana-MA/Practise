export default function Footer() {
  return (
    <>
      <section className="footer-area pt40 pb15">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <a _ngcontent-vui-c24="" routerLink="/" className="logo" href="/">
                  {" "}
                </a>
                <p>
                  It is our mission to transform the unorganised services sector through the use of technology, by helping customers connect with verified professionals around them, and helping those experts find customers with minimum investment
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Our Locations</h3>
                <ul className="list">
                  <li><a href="#">Azerbaijan</a></li>
                  <li><a href="#">Canada</a></li>
                  <li><a href="#">India</a></li>
                  <li><a href="#">United Arab Emirates</a></li>
                  <li><a href="#">United Kingdom</a></li>
                  <li><a href="#">South Africa</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>About Joboy</h3>
                <ul className="list">
                  <li><a href="#">Our Mission</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Connect With Us on LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Download App</h3>
                <div className="form-group">
                  <a href="#" className="btn btn-market btn--with-shadow">
                    <img className="utouch-icon" src="joboyimages/ios.png" alt="Joboy on Apple App Store" />
                    <div className="text">
                      <span className="sup-title">Download on the</span>
                      <span className="title">App Store</span>
                    </div>
                  </a>
                </div>
                <a href="#" className="btn btn-market btn--with-shadow">
                  <img className="utouch-icon" src="joboyimages/google-play.svg" alt="Joboy on Google Play Store" />
                  <div className="text">
                    <span className="sup-title">Download on the</span>
                    <span className="title">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="container">
            <div className="copy-right-content">
              <p>Copyright (2448/2016-CO/SW)@2022, Joboy Services Private Limited</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}