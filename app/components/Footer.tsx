
import React from 'react';
import { 
  companyDescription, 
  footerLocations, 
  aboutJoboyLinks, 
  appDownloads, 
  copyrightText 
} from '../data/footer';

const Footer: React.FC = () => {
  return (
    <section className="footer-area pt40 pb15">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <a className="logo" href="/">
                
              </a>
              <p>{companyDescription}</p>
            </div>
          </div>

          
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Our Locations</h3>
              <ul className="list">
                {footerLocations.map((location) => (
                  <li key={location.id}>
                    <a href={location.url}>{location.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>About Joboy</h3>
              <ul className="list">
                {aboutJoboyLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>Download App</h3>
              {appDownloads.map((app) => (
                <div key={app.id} className="form-group">
                  <a href={app.url} className="btn btn-market btn--with-shadow">
                    <img className="utouch-icon" src={app.icon} alt={app.alt} />
                    <div className="text">
                      <span className="sup-title">{app.supTitle}</span>
                      <span className="title">{app.title}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="copy-right">
        <div className="container">
          <div className="copy-right-content">
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;