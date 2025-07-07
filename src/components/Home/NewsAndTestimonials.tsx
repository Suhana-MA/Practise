"use client";

import React, { useEffect, useState } from "react";
import { fetchNewsAndTestimonials } from "./newsandtestimonials.data";
import { HomeContent } from "../../types/newsandtestimonials.types";

const NewsAndTestimonials: React.FC = () => {
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    async function loadContent() {
      const data = await fetchNewsAndTestimonials();
      if (data) setContent(data);
    }
    loadContent();
  }, []);

  useEffect(() => {
    if (!content) return;
    const $ = (window as any).$;
    if (!$ || !$("#testimonial-slider").length) return;

    $(".newsticker-jcarousellite").jCarouselLite?.({
      vertical: true,
      hoverPause: true,
      visible: 3,
      auto: 500,
      speed: 1000,
    });

    setTimeout(() => {
    $("#testimonial-slider").owlCarousel?.({
      items: 1,
      autoplay: true,
      loop: true,
      dots: true,
      nav: false,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
    });
  }, 0); // Allow DOM to update first
}, [content]);
  if (!content) return <div className="text-center pt40">Loading...</div>;

  return (
    <section className="pb40 pt40">
      <div className="container">
        <div className="row">
          {/* News Section */}
          <div className="col-md-6">
            <div id="newsticker">
              <h2 className="pb15">In the News</h2>
              <div className="newsticker-jcarousellite">
                <ul>
                  {content.news.map((item, index) => (
                    <li key={index}>
                      <div className="row">
                        <div className="col-sm-4">
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <img src={item.image} alt={item.title} />
                          </a>
                        </div>
                        <div className="col-sm-8">
                          <p className="pt15 pb15">{item.date}</p>
                          <h4>{item.title}</h4>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="col-md-6">
            <h2>Testimonials</h2>
            <h5 className="pb40">What our customers have to say about our services.</h5>
            <div className="testimonial-icon">
              <i className="fa fa-quote-left"></i>
            </div>
            <div id="testimonial-slider" className="owl-carousel">
              {content.testimonials.map((testimonial, index) => (
                <div className="testimonial" key={index}>
                  <div className="testimonial-content">
                    <p className="description">{testimonial.message}</p>
                  </div>
                  <h3 className="title">{testimonial.name}</h3>
                  <span className="post">{testimonial.source}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndTestimonials;
