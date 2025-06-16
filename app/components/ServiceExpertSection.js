"use client"; 

import { useState } from "react";

export default function ServiceExpertSection() {
  const [selectedCountry, setSelectedCountry] = useState(0);

  const getLink = () => {
    console.log("Selected country value:", selectedCountry);
    
  };

  return (
    <section className="dark-gray-bg pt15">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <h4 className="white-font">Are you a service expert?</h4>
            <p className="yellow-font">Join worlds Largest Service Network!</p>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-group select">
              <select
                className="form-ctrl-p form-control"
                id="link_select"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value={0}>SELECT YOUR COUNTRY</option>
                <option value={1}>Azerbaijan</option>
                <option value={2}>Canada</option>
                <option value={3}>India</option>
                <option value={4}>United Arab Emirates</option>
                <option value={5}>United Kingdom</option>
                <option value={7}>South Africa</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group">
              <button
                className="btn book-now-btn btn-block"
                onClick={getLink}
                type="button" 
              >
                Register as a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}