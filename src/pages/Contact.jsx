import React, { useState } from "react";
import { Formik, useField } from "formik";
import { validation } from "../helper";

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;
  return (
    <div className="form-control">
      <label>{placeholder}:</label>
      <input
        className={error ? "error" : ""}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

const MyTextArea = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;

  return (
    <div className="form-control">
      <label>{placeholder}:</label>
      <textarea
        className={error ? "error" : ""}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

function Contact() {
  document.title = "Portfolio - Contact Me";

  const [message, setMessage] = useState("");

  const sendMessage = (data, { resetForm }) => {
    setMessage("Sending Message...");
    fetch("https://formspree.io/mpzyjegg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          setMessage(res.error);
        } else {
          setMessage("Message has been sent!");
          resetForm();
        }
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  };

  return (
    <div className="contact page">
      <h1>Contact Me</h1>

      <p>Feel free to contact me via email below :)</p>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          sendMessage(values, actions);
        }}
      >
        {(props) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.handleSubmit()
            }}
          >
            <MyTextField placeholder="Name" type="text" name="name" />
            <MyTextField placeholder="Email" type="email" name="email" />
            <MyTextArea placeholder="Your message" type="text" name="message" />
            <button type="submit">Send message</button>
            {message && <div className="message">{message}</div>}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;
