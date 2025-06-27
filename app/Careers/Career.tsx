"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { fetchPageContent }  from "../../utils/api";

type JobData = {
  title: string;
  description?: string;
  responsibilitiesTitle?: string;
  responsibilities?: string[];
  keyRequirementsTitle?: string;
  keyRequirements?: string[];
  salary?: string;
  jobNature?: string;
  experience?: string;
  qualification?: string;
};

export default function CareerPage(): React.ReactElement {
  const [heading, setHeading] = useState("");
  const [subheading1, setSubheading1] = useState("");
  const [subheading2, setSubheading2] = useState("");
  const [jobs, setJobs] = useState<JobData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

 useEffect(() => {
  async function fetchCareersData() {
    try {
      const data = await fetchPageContent("careers");

      if (data && data.content) {
        setHeading(data.content.heading || "Careers at Joboy");
        setSubheading1(data.content.subHeading1 || "");
        setSubheading2(data.content.subHeading2 || "");
        setJobs(data.content.jobs || []);
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching careers data:", err);
      setError(true);
      setLoading(false);
    }
  }

  fetchCareersData();
}, []);


  if (loading) return <div className="text-center pt40">Loading job openings...</div>;
  if (error) return <div className="text-center pt40">Error loading career data.</div>;

  return (
    <>
    
    
    <section className="pb40 pt40">
      <div className="container">
        <h1 className="h1-about text-center pt20 pb30">{heading}</h1>
        <h5 className="text-center pt30 pb30">{subheading1}</h5>
        <h6 className="text-center pt30 pb40">{subheading2}</h6>

        <div className="accordion" id="accordion">
          {jobs.map((job, index) => (
            <JobAccordion key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

type JobAccordionProps = {
  job: JobData;
  index: number;
};

function JobAccordion({ job, index }: JobAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="card mb-0">
      <div className="card-header">
        <button
          className="btn btn-link w-100 text-left d-flex justify-content-between align-items-center"
          onClick={toggleAccordion}
        >
          <span className="card-title">{job.title}</span>
          <span className="btn book-now-btn">Read More</span>
        </button>
      </div>


      {isOpen && (
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              {job.description && <p>{job.description}</p>}
              {job.responsibilitiesTitle && <h3>{job.responsibilitiesTitle}</h3>}
              {job.responsibilities && (
                <ol className="ollist">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              )}
            {job.keyRequirementsTitle && <h3>{job.keyRequirementsTitle}</h3>}
            {job.keyRequirements && (
              <ol className="ollist">
                {job.keyRequirements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            )}
            <strong>
              Send your resume to{" "}
              <a href="mailto:recruitment@joboy.com">recruitment@joboy.com</a>
            </strong>
          </div>

          <div className="col-md-4">
            <div className="gray-bg fp20 mmb20">
              <ul className="career-ul">
                {job.salary && (
                  <li>
                    <span className="fa fa-bullseye" />{" "}
                    <a href="#">Salary range: <strong>{job.salary}</strong></a>
                  </li>
                )}
                {job.jobNature && (
                  <li>
                    <span className="fa fa-bullseye" />{" "}
                    <a href="#">Nature of Job: <strong>{job.jobNature}</strong></a>
                  </li>
                )}
                {job.experience && (
                  <li>
                    <span className="fa fa-bullseye" />{" "}
                    <a href="#">Experience: <strong>{job.experience}</strong></a>
                  </li>
                )}
                {job.qualification && (
                  <li>
                    <span className="fa fa-bullseye" />{" "}
                    <a href="#">Qualification: <strong>{job.qualification}</strong></a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>

    
  );
}
