import React from "react";
import ContactForm from "../contact/contactForm";
import Footer from "../footer/Footer";
import Feedback from "../contact/feedback";


function contactRoute() {
  return (
    <div>
      <ContactForm />
      <Feedback />
      <Footer />
    </div>
  );
}

export default contactRoute;
