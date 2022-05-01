import React, { useState } from "react";
import './contact.css'


const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/43820b00-9042-11ec-8462-6960be7ce578"; // TODO - fill on the later step

const ContactForm = () => {
  const [setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
    <div className="containerCont">
      <div id = 'contTitle' > Contact Us</div>
      <div id = "underline"> </div>
        <div className = "innerCont">
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="row">
          <div class="col-75">
            <input
              type="text"
              id="fname"
              placeholder="Your Name "
              name="name"
              required
            />
          </div>
        </div>
        <div className="row">
          <div class="col-75">
            <input
              type="text"
              id="email"
              placeholder="Your email address"
              name="email"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-75">
            <textarea placeholder="Your message" id="message" name="message" required />
          </div>
        </div>
        <div className ="buttonCont"> 
            <button id="button" type="submit">
          Send a message
        </button>

        </div>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;