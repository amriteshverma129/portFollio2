import React from "react";
import ContactCard from "./ContactCard";
import { useSelector } from "react-redux";

const Contact = () => {
  const theme = useSelector((store) => store.theme.theme);

  const contactMethods = [
    {
      href: "mailto:amriteshverma921@gmail.com",
      title: "Email",
      contactDetail: "amriteshverma129@gmail.com",
      animationPath: "/lottie/emailAnimation.json",
    },
    {
      href: "tel:+917065322502",
      title: "SMS",
      contactDetail: "+91-7065322502",
      animationPath: "/lottie/messageAnimation.json",
    },
    {
      href: "https://wa.me/917065322502",
      title: "WhatsApp",
      contactDetail: "+91-7065322502",
      animationPath: "/lottie/whatsappAnimation.json",
    },
    {
      href: "https://www.linkedin.com/in/amritesh-verma-792157193/",
      title: "LinkedIn",
      contactDetail: "Amritesh Verma",
      animationPath: "/lottie/linkedinAnimation.json",
    },
  ];

  return (
    <div className="animate-fade-in text-center">
      <h2 className="section-title mb-6">Contact Me</h2>
      <p className={`text-xl md:text-2xl mb-3 font-medium ${
        theme === "dark" ? "text-gray-300" : "text-gray-700"
      }`}>
        Have Any Questions? Feel Free To Contact Me
      </p>
      <p className={`text-base md:text-lg mb-8 ${
        theme === "dark" ? "text-gray-400" : "text-gray-600"
      }`}>
        I Will Be Happy To Answer Your Questions
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
        {contactMethods.map((contact, index) => (
          <ContactCard
            key={index}
            href={contact.href}
            title={contact.title}
            contactDetail={contact.contactDetail}
            animationPath={contact.animationPath}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
