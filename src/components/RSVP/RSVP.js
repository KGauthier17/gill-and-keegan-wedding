import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../../firebase";
import "./RSVP.css";

function RSVP() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    attending: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.attending) {
      setError("Please fill out all fields");
      return;
    }

    try {
      const rsvpsRef = ref(database, 'rsvps');
      await push(rsvpsRef, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        attending: formData.attending,
        timestamp: new Date().toISOString()
      });

      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", attending: "" });
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError("Failed to submit RSVP. Please try again.");
      console.error(err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitted(false);
    setError("");
    setFormData({ firstName: "", lastName: "", attending: "" });
  };

  return (
    <div className="rsvp-container">
      <div>
        <h2 className="rsvp-title">RSVP</h2>
        <p className="rsvp-text">Let us know if you can join the celebration!</p>
        <button 
          className="rsvp-button" 
          onClick={() => setIsModalOpen(true)}
        >
          RSVP Now
        </button>
      </div>

      {isModalOpen && (
        <div className="rsvp-modal-overlay" onClick={closeModal}>
          <div className="rsvp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="rsvp-modal-close" onClick={closeModal}>
              ×
            </button>
            
            {submitted ? (
              <div className="rsvp-success">
                <h3 className="rsvp-modal-title">Thank You! ✨</h3>
                <p className="rsvp-modal-text">Your RSVP has been received.</p>
              </div>
            ) : (
              <>
                <h3 className="rsvp-modal-title">RSVP</h3>
                <p className="rsvp-modal-text">We can't wait to celebrate with you!</p>
                
                <form onSubmit={handleSubmit} className="rsvp-form">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="rsvp-input"
                  />
                  
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="rsvp-input"
                  />
                  
                  <div className="rsvp-radio-group">
                    <label className="rsvp-radio-label">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === "yes"}
                        onChange={handleChange}
                      />
                      <span>Joyfully Accepting</span>
                    </label>
                    
                    <label className="rsvp-radio-label">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === "no"}
                        onChange={handleChange}
                      />
                      <span>Regretfully Declining</span>
                    </label>
                  </div>

                  {error && <p className="rsvp-error">{error}</p>}
                  
                  <button type="submit" className="rsvp-submit-button">
                    Submit RSVP
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RSVP;