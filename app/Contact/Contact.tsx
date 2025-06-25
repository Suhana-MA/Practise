"use client";

import React from "react";

export default function ContactPage(): React.ReactElement {
  return (
    <>
      <section>
        <img
          src="/joboyimages/inner-banner.jpg"
          className="img-fluid"
          alt="Contact Banner"
        />
      </section>

      <section className="pt40 pb40">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="contact-wrapper">
                <h1 className="pb15 text-center h1">Send Us A Message</h1>
                <div className="row">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe17UmbVYxr2cAk2RoWFj_SL6cLbgu0PRljbfO-XL4yptdBzg/viewform?embedded=true"
                    width={640}
                    height={806}
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    title="Google Contact Form"
                  >
                    Loading…
                  </iframe>
                </div>

                {/* 
                If you want to use your own form later, you can uncomment and convert the below:
                
                <div className="form-group col-sm-6">
                  <input
                    type="text"
                    name="username"
                    id="name"
                    placeholder="Enter your name here..."
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group col-sm-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email here..."
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="Subject"
                    id="sub"
                    placeholder="Subject..."
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message here..."
                    className="form-control"
                  ></textarea>
                </div>

                <div className="form-group text-center">
                  <button className="btn btn-blue" type="submit">
                    SEND MESSAGE
                  </button>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
