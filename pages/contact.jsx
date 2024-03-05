import {useState} from "react";
import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  const form = useRef();

  const submitForm = async (e) => {
    e.preventDefault();

    emailjs.sendForm("service_zp327jz", "template_kcj9xk7", form.current, "NqlpDfrm_2Fubcyej").then(
      (result) => {
        form.current.reset();
        alert("Your response has been received!");
      },
      (error) => {
        alert("There was an error. Please try again in a while.");
      }
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form className={styles.form} ref={form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {title: "Contact"},
  };
}

export default ContactPage;
