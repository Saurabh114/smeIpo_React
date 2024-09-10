import React from "react";

const ContactMap = () => {
  return (
    <div>
      <div className="mb-0 mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.812403618618!2d73.87966827553736!3d18.53737768255944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c057db0fe4f3%3A0x1d1aea5178657ab5!2sMahima%20Agencies!5e0!3m2!1sen!2sin!4v1724084225804!5m2!1sen!2sin"
          className="iframeMap w-full h-80 rounded-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
