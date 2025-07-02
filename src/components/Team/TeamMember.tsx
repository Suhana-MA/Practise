// components/Team/TeamMember.tsx
import React from "react";
import { TeamMemberData } from "../../types/team.types";

const TeamMember: React.FC<TeamMemberData> = ({
  name,
  title,
  imageSrc,
  description,
  linkedinUrl,
}) => {
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
};

export default TeamMember;
