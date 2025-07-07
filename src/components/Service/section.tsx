// src/components/Services/Section.tsx
import React from "react";
import { SectionData } from "../../types/service.types";

type SectionProps = SectionData & { isGray: boolean };

const Section: React.FC<SectionProps> = ({ title, image, alt, content, links, isGray }) => {
  return (
    <section className={`${isGray ? "gray-bg" : ""} pt40 pb40`}>
      <div className="container">
        <div className="pb40 text-center">
          <h2 className="city-head">{title}</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="pb15">{content}</p>
            <div className="row">
              <div className="col-sm-6">
                <ul className="td-list mb-20">
                  {links.column1.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <i>
                          <img src="joboyimages/tck-mark.png" alt={link.label} />
                        </i>{" "}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="td-list mb-20">
                  {links.column2.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <i>
                          <img src="joboyimages/tck-mark.png" alt={link.label} />
                        </i>{" "}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <img src={image} className="img-fluid" alt={alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
