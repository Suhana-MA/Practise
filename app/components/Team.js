import Script from "next/script";
export default function Team() {
  return (
    <>
    <section className="pt40 pb40">
      <div className="container">
        <h1 className="h1-about text-center pt15 pb20">
          What makes Joboy different?
        </h1>
        <h6 className="text-center pt30 pb40">
          Our leadership team has years of experience across various domains such as, Business Strategy, Customer Operations, Business Transformation, Finance, Technology, Facilities Management, Construction, Interior Design, and Home Renovation. We use all this expertise, the experience gained over the years, and the passion to make your life simpler, to uncomplicate processes, overcome technical hurdles, save time, effort, and money, and to create opportunities for others who need our support and guidance.
        </h6>
        <div className="item-team pb40">
          <div className="team-ava">
            <img src="joboyimages/Jeevan-K-Varghese.jpg" alt="Jeevan K Varghese" />
          </div>
          <div className="box-info">
            <h4>Jeevan K Varghese</h4>
            <span>Founder & CEO</span>
            <p>
              A finance professional with years of experience in business transformation and operational finance, responsible for business strategy, and organisational performance.
            </p>
            <ul>
              <li>
                <a href="#">
                  <img src="joboyimages/linked-in.png" alt="Jeevan K Varghese" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item-team pb40">
          <div className="team-ava">
            <img src="joboyimages/Jees-V-Kariyil.jpg" alt="Jees Kariyil" />
          </div>
          <div className="box-info">
            <h4>Jees V Kariyil</h4>
            <span>Co-Founder & CIO</span>
            <p>
              Jees brings years of expertise in Digital Payments and Technology, and has played the most important role in the development of the Joboy platform.
            </p>
            <ul>
              <li>
                <a href="#">
                  <img src="joboyimages/linked-in.png" alt="Jees V Kariyil" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item-team pb40">
          <div className="team-ava">
            <img src="joboyimages/Elvira-Aghayeva.jpg" alt="Elvira Aghayeva" />
          </div>
          <div className="box-info">
            <h4>Elvira Aghayeva</h4>
            <span>CEO - Azerbaijan</span>
            <p>
              Elvira's expertise in the interior business, home remodelling, and the construction industry, makes her a perfect leader for Joboy in Azerbaijan.
            </p>
            <ul>
              <li>
                <a href="#">
                  <img src="joboyimages/linked-in.png" alt="Elvira Aghayeva" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    



</>
  );
}

