// components/Cities/Cities.tsx
import React from 'react';
import { citiesData } from './cities.data';

const Cities: React.FC = () => {
  return (
    <section className="gray-bg pb40 pt40">
      <div className="container">
        <h6 className="text-center pt15 pb40 text-uppercase">
          Our services are available in major cities, across the globe
        </h6>
        <div className="inner-demo">
          <ul className="joboy-city">
            {citiesData.map((city) => (
              <li key={city.id}>
                <a href={city.url}>
                  <img
                    src={city.img}
                    className="img-fluid"
                    alt={city.alt}
                  />
                  <div>{city.name}</div>
                </a>
              </li>
            ))}
          </ul>
          <div className="clearfix" />
        </div>
      </div>
    </section>
  );
};

export default Cities;
