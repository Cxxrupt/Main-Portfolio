import React from "react";

const Footer = () => {
  return (
    <div className="py-4 text-center bg-primary text-white">
      <div className="py-5">
        <a href="https://github.com/cxxrupt" className="pr-4 inline-block text-accent hover:text-white">
          GitHub
        </a>
        <a href="https://www.linkedin.com/" className="pr-4 inline-block text-accent hover:text-white">
          LinkedIn
        </a>
        <a href="https://www.twitter.com/" className="pr-4 inline-block text-accent hover:text-white">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;