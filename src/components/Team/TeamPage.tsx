// components/Team/TeamPage.tsx
"use client";

import React, { useEffect, useState } from "react";
import { fetchTeamData } from "./team.data";
import { TeamMemberData } from "../../types/team.types";
import TeamMember from "./TeamMember";

const TeamPage: React.FC = () => {
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMemberData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchTeamData();
        if (data) {
          setHeading(data.heading || "Meet Our Team");
          setSubheading(data.subheading || "");
          setTeamMembers(data.teamMembers || []);
        }
      } catch (err) {
        console.error("Failed to load team data", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <div className="text-center pt40">Loading team members...</div>;
  if (error) return <div className="text-center pt40">Error loading team data.</div>;

  return (
    <section className="pt40 pb40">
      <div className="container">
        <h1 className="h1-about text-center pt15 pb20">{heading}</h1>
        <h6 className="text-center pt30 pb40">{subheading}</h6>

        {teamMembers.length === 0 ? (
          <div className="text-center">No team members found.</div>
        ) : (
          teamMembers.map((member) => <TeamMember key={member.id} {...member} />)
        )}
      </div>
    </section>
  );
};

export default TeamPage;
