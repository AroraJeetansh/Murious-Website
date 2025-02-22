import Section from "./Section";
import { curve } from "../assets";
import TeamCard from "./TeamCard";
import TeamCard2 from "./TeamCard2";
import {
  mentors,
  teamleads,
  contributors,
  tmpFaculty,
  facultyIncharge,
} from "../constants/team.json";
import "../../public/css/TeamCard.css";
import "../../public/css/Team.css";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <h1 className="text-4xl relative w-min mx-auto">
          Team
          <img src={curve} alt="" />
        </h1>
        <div className="team-container">

        <div className="team-section faculty-in-charge-section">
            <h1 className="text-xl">Faculty Incharge</h1>
            <div className="team-grid faculty-grid">
              {facultyIncharge.map((member) => (
                <TeamCard2 key={member.id} {...member} />
              ))}
            </div>
          </div>


          <div className="team-section team-faculty-section">
            <h1 className="text-xl">TMP Faculty</h1>
            <div className="team-grid">
              {tmpFaculty.map((member) => (
                <TeamCard key={member.id} {...member} />
              ))}
            </div>
          </div>

          <div className="team-section">
            <h1 className="text-xl">Mentors</h1>
            <div className="team-grid">
              {mentors.map((member) => (
                <TeamCard key={member.id} {...member} />
              ))}
            </div>
          </div>

          <br />

          <div className="team-section lead-section">
            <h1 className="text-xl">Team Leads</h1>
            <div className="team-grid">
              {teamleads.map((member) => (
                <TeamCard key={member.id} {...member} />
              ))}
            </div>
          </div>

          <br />

          <div className="team-section">
            <h1 className="text-xl">Contributors</h1>
            <div className="team-grid">
              {contributors.map((member) => (
                <TeamCard key={member.id} {...member} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
