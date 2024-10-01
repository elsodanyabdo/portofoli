import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Animation - 1727740232810.json";
import emailAnimation from "../../animation/Animation - 1727741371789.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mldrqojk");
 
  return (
    <section id="contact" className="contact df">
      <div className="header">
        <h1 className="contact-title">
          <span className="icon-envelope"></span> Contact us
        </h1>
        <p className="subtitle">
          contact us for more information and get notified when i publish
          something new
        </p>
      </div>
      <div style={{justifyContent:"space-between"}} className="contact-info   df">
        <form action="" onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="">Email Address:</label>
            <input
            autoComplete="off"
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="massage">
            <label htmlFor="">Your massage:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Massage"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            submit
          </button>
        {(state.succeeded &&  (<p className="df">
          <Lottie loop={false}  style={{height:"40px"}} animationData={doneAnimation} />
            your massage has been sent successfully👌🏼
            </p>)) }
        </form>
        <div className="contact-animation ">
        <Lottie   className="animation-contact" animationData={emailAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
