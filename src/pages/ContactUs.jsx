import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import ContactUsForm from "../Layouts/ContactUsLayouts/ContactUsForm";
import Subscribe from "../Layouts/HomeLayouts/Subscripe";

const ContactUs = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://elasticthemes.com",
      className: "bg-[#3b5998]",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://elasticthemes.com",
      className: "bg-[#55acee]",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://elasticthemes.com",
      className: "bg-[#e4405f]",
    },
    {
      name: "Pinterest",
      icon: FaPinterestP,
      url: "https://elasticthemes.com",
      className: "bg-[#bd081c]",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://elasticthemes.com",
      className: "bg-[#cd201f]",
    },
  ];

  return (
    <section className="bg-gray-100 p-4 md:p-8">
      <div className="w-full md:w-11/12 lg:w-3/4 mx-auto p-6 md:p-10 bg-white rounded-2xl shadow-md mt-8 md:mt-16 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 md:pr-8 lg:pr-[16.66%] mb-8 md:mb-0 text-center md:text-left">
          <h4 className="text-xl md:text-2xl font-normal mb-5 md:mb-7">Leave a Message</h4>
          <ContactUsForm />
        </div>
        <div className="w-full md:w-1/3 text-sm md:text-xs text-center md:text-left">
          <h4 className="text-xl md:text-2xl font-normal mb-5 md:mb-7">Contact Info</h4>
          <div className="mb-2">4293 Euclid Avenue, Los Angeles, CA 90012</div>
          <div className="mb-4">+1 213 974-3898</div>
          <div className="mt-4 md:mt-6">
            <h5 className="text-lg font-semibold mb-3 md:mb-4">Follow Us</h5>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-full flex items-center justify-center ${social.className} duration-500 transition-all ease-in-out hover:scale-125`}>
                  <social.icon className="text-white" size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </section>
  );
};

export default ContactUs;
