// src/app/careers/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { JobData, CareerPageContent } from "../../types/career.types";
import { fetchCareerData } from "./career.data";

export default function CareerPage(): React.ReactElement {
  const [pageData, setPageData] = useState<CareerPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCareerData()
      .then((data) => {
        if (data) setPageData(data);
        else setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center pt40">Loading job openings...</div>;
  if (error || !pageData) return <div className="text-center pt40">Error loading career data.</div>;

  return (
    <section className="pb40 pt40">
      <div className="container">
        <h1 className="h1-about text-center pt20 pb30">{pageData.heading}</h1>
        <h5 className="text-center pt30 pb30">{pageData.subHeading1}</h5>
        <h6 className="text-center pt30 pb40">{pageData.subHeading2}</h6>

        <div className="accordion" id="accordion">
          {pageData.jobs.map((job, index) => (
            <JobAccordion key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JobAccordion({ job, index }: { job: JobData; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card mb-0">
      <div className="card-header">
        <button
          className="btn btn-link w-100 text-left d-flex justify-content-between align-items-center"
          onClick={() => setIsOpen(!isOpen)}
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
                Send your resume to <a href="mailto:recruitment@joboy.com">recruitment@joboy.com</a>
              </strong>
            </div>
            <div className="col-md-4">
              <div className="gray-bg fp20 mmb20">
                <ul className="career-ul">
                  {job.salary && (
                    <li>
                      <span className="fa fa-bullseye" /> Salary: <strong>{job.salary}</strong>
                    </li>
                  )}
                  {job.jobNature && (
                    <li>
                      <span className="fa fa-bullseye" /> Nature: <strong>{job.jobNature}</strong>
                    </li>
                  )}
                  {job.experience && (
                    <li>
                      <span className="fa fa-bullseye" /> Experience: <strong>{job.experience}</strong>
                    </li>
                  )}
                  {job.qualification && (
                    <li>
                      <span className="fa fa-bullseye" /> Qualification: <strong>{job.qualification}</strong>
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
