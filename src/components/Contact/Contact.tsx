"use client";

import React from "react";
 // Assuming you have a reusable banner component

export default function ContactPage(): React.ReactElement {
  return (
    <>
      

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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
