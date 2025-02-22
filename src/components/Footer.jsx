import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import "/public/css/footer.css";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <footer className="footer">
  <div className="footer-container">
    <div className="footer-top">
      <img
        src="https://jyc.co.in/images/logojyc%20white.png"
        alt="University Clubs Logo"
        className="logo logo-left"
      />
      <img
        src="https://jyc.co.in/images/tech%20logo%20(1).png"
        alt="Made By Logo"
        className="logo logo-right"
        style={{ width: '200px', height: 'auto' }}
      />
    </div>
    <div className="footer-content">
      <div className="footer-section">
        <h3>Clubs</h3>
        <ul>
          <li>
            <a href="https://jyc.co.in/technical">Technical Sciences, Movies and Photography</a>
          </li>
          <li>
            <a href="https://jyc.co.in/sports">Sports</a>
          </li>
          <li>
            <a href="https://jyc.co.in/literary">Literary and Debating</a>
          </li>
          <li>
            <a href="https://jyc.co.in/koshish">Koshish</a>
          </li>
          <li>
            <a href="https://jyc.co.in/cultural">Cultural and Dance</a>
          </li>
          <li>
            <a href="https://jyc.co.in/theatre">Theatre and Music</a>
          </li>
          <li>
            <a href="https://jyc.co.in/environment">Environment, Ecology and Health</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Committees</h3>
        <ul>
          <li>
            <a href="https://jyc.co.in/events">Procurement and Events</a>
          </li>
          <li>
            <a href="https://jyc.co.in/finance">Finance</a>
          </li>
          <li>
            <a href="https://jyc.co.in/creative">Creative Arts</a>
          </li>
          <li>
            <a href="https://jyc.co.in/disciplinary">Disciplinary</a>
          </li>
          <li>
            <a href="https://jyc.co.in/media">Media and Publicity</a>
          </li>
          <li>
            <a href="https://jyc.co.in/hospitality">Registration and Hospitality</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect With Us</h3>
        <div className="social-icons">
          <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-red-500"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <nav>
        <a href="/ourteam">Our Team</a>
      </nav>
      <p className="caption text-n-4 lg:block">
        © {new Date().getFullYear()} Murious. All rights reserved.
      </p>
    </div>
  </div>
</footer>

      {/* <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()} Murious. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div> */}
    </Section>
  );
};

export default Footer;
