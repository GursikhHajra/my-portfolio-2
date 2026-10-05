import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [sent, setsent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uccpqt4",
        "template_391iz3i",
        formRef.current!,
        "UEGJhjPyuafnqyAKs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    formRef.current?.reset();
    setsent(true);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            rows={7}
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <div className="confirmation">{sent && <p>Sent!</p>}</div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
