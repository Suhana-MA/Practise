"use client";

import React, { useEffect, useState } from "react";
import { fetchPageContent }  from "../../utils/api";


type TeamMemberData = {
  id: string;
  name: string;
  title: string;
  imageSrc: string;
  description: string;
  linkedinUrl?: string;
};

export default function TeamPage(): React.ReactElement {
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMemberData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

 useEffect(() => {
  async function fetchTeamData() {
    try {
      const data = await fetchPageContent("team");

      if (data && data.content) {
        setHeading(data.content.heading || "Meet Our Team");
        setSubheading(data.content.subheading || "");
        setTeamMembers(data.content.teamMembers || []);
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching team data:", err);
      setError(true);
      setLoading(false);
    }
  }

  fetchTeamData();
}, []);


  if (loading) {
    return <div className="text-center pt40">Loading team members...</div>;
  }

  if (error) {
    return <div className="text-center pt40">Error loading team data.</div>;
  }

  return (
    <section className="pt40 pb40">
      <div className="container">
        <h1 className="h1-about text-center pt15 pb20">{heading}</h1>
        <h6 className="text-center pt30 pb40">{subheading}</h6>

        {teamMembers.length === 0 ? (
          <div className="text-center">No team members found.</div>
        ) : (
          <div>
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                title={member.title}
                imageSrc={member.imageSrc}
                description={member.description}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


type TeamMemberProps = {
  name: string;
  title: string;
  imageSrc: string;
  description: string;
  linkedinUrl?: string;
};

function TeamMember({
  name,
  title,
  imageSrc,
  description,
  linkedinUrl,
}: TeamMemberProps): React.ReactElement {
  return (
    <div className="item-team pb40">
      <div className="team-ava">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="box-info">
        <h4>{name}</h4>
        <span>{title}</span>
        <p>{description}</p>
        {linkedinUrl && (
          <ul>
            <li>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <img src="joboyimages/linked-in.png" alt={`${name} LinkedIn`} />
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}