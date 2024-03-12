import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import ContactCard from "./ContactCard";

const Contact = () => {
  const emailContainer = useRef(null);
  const messageContainer = useRef(null);
  const whatsappContainer = useRef(null);
  const linkedinContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: emailContainer.current,
      path: "/lottie/emailAnimation.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
    lottie.loadAnimation({
      container: messageContainer.current,
      path: "/lottie/messageAnimation.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
    lottie.loadAnimation({
      container: whatsappContainer.current,
      path: "/lottie/whatsappAnimation.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
    lottie.loadAnimation({
      container: linkedinContainer.current,
      path: "/lottie/linkedinAnimation.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }, []);

  return (
    <div id="contact" className="my-4 text-center">
      <div className="text-3xl font-semibold mb-3">Contact Me</div>
      <div className="text-xl mb-2 ">
        Have Any Questions? Feel Free To Contact Me
      </div>
      <div className="text-lg mb-4">
        I Will Be Happy To Answer Your Questions
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-8 p-4">
        <ContactCard
          href={"mailto:amriteshverma921@gmail.com"}
          title={"Email"}
          contactDetail={"amriteshverma129@gmail.com"}
          animation={emailContainer}
        />
        <ContactCard
          href={"tel:+917065322502"}
          title={"SMS"}
          contactDetail={"+91-7065322502"}
          animation={messageContainer}
        />
        <ContactCard
          href={"https://wa.me/917065322502"}
          title={"WhatsApp"}
          contactDetail={"+91-7065322502"}
          animation={whatsappContainer}
        />
        <ContactCard
          href={"https://www.linkedin.com/in/amritesh-verma-792157193/"}
          title={"LinkedIn"}
          contactDetail={"Amritesh Verma"}
          animation={linkedinContainer}
        />
      </div>
    </div>
  );
};

export default Contact;
