// Feedback.js
import React, { useState } from "react";
import axios from "axios";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log("Sending feedback:", feedback);
    const response = await axios.post("http://localhost:5000/api/feed/feedback", {
      feedback
    });

    console.log(response.data);

    setSubmitted(true);
  } catch (error) {
    console.error("Error submitting feedback:", error);
    // Handle the error if needed
  }
};


  return (
    <div className='image1'>
    <div className="feedback-container">
      {submitted ? (
        <div className="thank-you-message">
          <h1>Thank You!</h1>
          <p>Your feedback has been submitted.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Feedback-Page</h1>
          <label htmlFor="feedback">Please give your valuable Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            cols="50"
            value={feedback}
            onChange={handleFeedbackChange}
            required
          ></textarea>
          <br/>
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
    </div>
  );
};

export default Feedback;