import React, { useState } from "react";
import axios from "axios";
import './contactUs.css';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "message") setMessage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/cont/contactus", {
        name,
        mail: email,  // Update to use 'mail' property
        contactUs: message,  // Update to use 'contactUs' property
      });

      console.log(response.data);

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      // Handle the error if needed
    }
  };

  return (
    <div className='image1'>
    <div className="contact-container">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h1>Contact-Us</h1>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h1>Thank You!</h1>
          <p>Your submission has been received.</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default ContactUs;
