import Heading from "./Heading";
import Section from "./Section";
import { curve, contacts } from "../assets";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
  <div className="container md:pb-10 mt-8">
    <div className="relative w-fit mx-auto">
      <Heading title="Contact Us" className="text-4xl" />
      <img
        src={curve}
        className="absolute top-full left-0 w-full xl:-mt-2"
        width={624}
        height={28}
        alt="Curve"
      />
    </div>

    <div className="flex flex-nowrap gap-6 justify-start p-4 overflow-auto">
      {contacts.map((contact) => {
        return (
          <div
            className="flex flex-col gap-2 p-8 py-12 bg-n-11 min-w-[300px] rounded-lg shadow-md"
            key={contact.id}
          >
            <Heading
              className="userName text-lg text-left w-full mb-4"
              title={contact.name}
            />
            <div>
              <p className="mobileNumber text-xl text-gray-200">
                {contact.phone}
              </p>
              <p className="email text-xl text-gray-200">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</Section>

);

export default Roadmap;
