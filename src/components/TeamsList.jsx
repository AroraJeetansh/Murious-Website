import Section from "./Section";
import { curve } from "../assets";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import TeamCard from "./TeamCard";
import { mentors, teamleads, contributors } from '../constants/team.json';
import '../../public/css/TeamCard.css';
import '../../public/css/Team.css';


const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">

        <h1 className="text-4xl relative w-min mx-auto">Team
          <img src={curve} alt="" />
        </h1>
        <div className="team-container">
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
