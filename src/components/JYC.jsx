import { curve, jycLogo, check } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container flex flex-col md:!flex-row items-center  gap-16 md:!flex-wrap md:!justify-around">
        <div className="max-w-[25rem] flex-1">
          <h2 className="h2 mb-8 md:!mb-10 text-4xl md:!text-6xl">
            <span className="inline-block relative">
              JYC{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h2>

          <p className="pb-10 leading-7 text-[17px]">
            JUIT Youth Club (JYC) is the hub of enthusiasm and growth, expanding
            students' horizons beyond academics into sports, literature,
            culture, and technology. It fosters self-expression, recognition,
            and integration while building teamwork, sportsmanship, and
            leadership. By organizing events and extracurricular activities, JYC
            provides a refreshing break from academic pressures, instilling
            confidence and a sense of achievement in students.
          </p>

          <Button href={"https://jyc.co.in/"}>Learn More</Button>
        </div>

        <div className=" flex items-center flex-1 max-w-sm">

          <div className="max-w-sm mx-auto flex justify-center">
                  <img src={jycLogo}  alt="brainwave" width={696} height={373} style={{
                    "maxWidth": "90%",
                  }}/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
