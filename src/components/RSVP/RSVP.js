import React, { useState, useEffect, useRef } from "react";
import { ref, push, get, set } from "firebase/database";
import { database } from "../../firebase";
import "./RSVP.css";

const GUEST_LIST = [
  "Keegan Gauthier", "Gillian Sheppard","Kerry Sheppard", "Neveen Sheppard", "Darren Gauthier",
  "Janine Mcinnnis", "Karen Gauthier", "Jeff Bannet", "Alexander Sheppard",
  "Brooke Jennings", "Riley Gauthier", "Duggan Gauthier", "Mollie Holt",
  "Maddie Dunham", "Alison Tedford", "Hannah Gillespie", "Kyle Brown",
  "Coady MacKillop", "Declan Murphy", "Rhys Mackenzie", "Nadia Fam",
  "Elizabeth Sheppard", "Donald MacKenzie", "Nancy Gilmour", "Andrew Gilmour",
  "Connor Gilmour", "Hanny Fam", "Sherra Fam", "Avery Fam", "Odette Viel",
  "Amir Guindi", "Adeena Guindi", "Evan Rose", "Sarah Miller", "Lauren Rose",
  "Hilary Wagg", "Steve Wagg", "Kennedy Wagg", "Reegan Wagg", "Lisa Saleski",
  "Gary Saleski", "G Saleski", "Lenka Tomlinson", "Graydon Saleski",
  "Karla Fisher", "Andrew Fisher", "Camden Fisher", "Caleigh Fisher",
  "Mack Genette", "Jay Banet", "Jordan Michalik", "Heather Banet",
  "Lee Calendar", "Margie Young", "Finn Calendar", "Ada Calendar",
  "Barb Banet", "Bernie Banet", "Sophie Rose", "Brenden Shea", "Malcom Hyde",
  "Jess Inness", "Ben Inness", "Kayla Brown", "Colin Delaney",
  "Rebecca Macdonald", "Courtney Pick", "Iliana Price", "Brady Campbell",
  "Sarah Scott", "Matt Macleod", "Devon Pinkham", "Colleen Sullivan",
  "Curtis Miller", "Shelly Brown", "Floyd Brown", "Steven Pickett",
  "Payton Notman", "Jenny Archibald", "Maureen O'Brien", "Joey Robinson",
  "Julia Murphy", "Lukas Kane", "Katie Stone", "Will Kelly", "Janelle Holt",
  "Austin Woodland", "Kylie MacNeil", "Colin Marinelli", "Katy Berry",
  "Lindsey Ripley", "Maddy Leduc", "Adam Patterson", "Peter Docherty",
  "Mary Catherine MacSween", "Sean Docherty", "Hannah Deal", "Colin Docherty",
  "Dani Violette", "Julia Docherty", "Brenda Keyes", "Paul Keyes",
  "David Keyes", "Beatrice Bromley", "Andrew Keyes", "Molly O'Brien", "Luke Bainfield",
  "Cameron Keyes", "Martha Tait", "Anna Keyes", "Brynn Kerr", "Kayden Rice",
  "Jack Long", "Will Cromwell", "Kaelin Barry", "Morgan Robinson", "Emma Keshen", "Jack Aucoin", "Juliette Côté"
];

function RSVP() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [formData, setFormData] = useState({
    attending: "",
    dietaryRestrictions: "",
    songRequest: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [suggestionPos, setSuggestionPos] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);

  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        suggestionsRef.current && !suggestionsRef.current.contains(e.target) &&
        inputRef.current && !inputRef.current.contains(e.target)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNameInput = (e) => {
    const val = e.target.value;
    setNameInput(val);
    setSelectedGuest(null);

    if (val.trim().length < 2) {
      setSuggestions([]);
      setSuggestionPos(null);
      return;
    }
    const lower = val.toLowerCase();
    const filtered = GUEST_LIST.filter(name =>
      name.toLowerCase().includes(lower)
    ).slice(0, 8);
    setSuggestions(filtered);
    if (inputRef.current && filtered.length > 0) {
      const rect = inputRef.current.getBoundingClientRect();
      setSuggestionPos({ top: rect.bottom + 4, left: rect.left, width: rect.width });
    }
  };

  const checkExistingRsvp = async (fullName) => {
    const nameKey = fullName.trim().toLowerCase().replace(/\s+/g, "_");
    try {
      const snapshot = await get(ref(database, `rsvped_names/${nameKey}`));
      if (snapshot.exists()) {
        const status = snapshot.val().attending === "yes" ? "Joyfully Accepting 🎉" : "Regretfully Declining";
        showToast(`You've already RSVP'd as ${status}. If you need to make a change, please reach out to us directly.`);
      }
    } catch (err) {
      console.error("Error checking RSVP:", err);
    }
  };

  const showToast = (message) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ message, visible: true });
    toastTimerRef.current = setTimeout(() => dismissToast(), 4000);
  };

  const dismissToast = () => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast((t) => t ? { ...t, visible: false } : null);
    setTimeout(() => setToast(null), 400);
  };

  const selectGuest = (name) => {
    setNameInput(name);
    setSelectedGuest(name);
    setSuggestions([]);
    setSuggestionPos(null);
    checkExistingRsvp(name);
  };

  const clearSelection = () => {
    setNameInput("");
    setSelectedGuest(null);
    setSuggestions([]);
    setSuggestionPos(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!selectedGuest) {
      setError("Please select your name from the list.");
      return;
    }
    if (!formData.attending) {
      setError("Please indicate whether you're attending.");
      return;
    }

    const parts = selectedGuest.trim().split(" ");
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ");

    const nameKey = selectedGuest.trim().toLowerCase().replace(/\s+/g, "_");

    try {
      await push(ref(database, 'rsvps'), {
        firstName,
        lastName,
        attending: formData.attending,
        dietaryRestrictions: formData.dietaryRestrictions,
        songRequest: formData.songRequest,
        timestamp: new Date().toISOString()
      });

      await set(ref(database, `rsvped_names/${nameKey}`), { attending: formData.attending });

      setSubmitted(true);
      setFormData({ attending: "", dietaryRestrictions: "", songRequest: "" });
      setTimeout(() => { closeModal(); }, 3000);
    } catch (err) {
      setError("Failed to submit RSVP. Please try again.");
      console.error(err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitted(false);
    setError("");
    setNameInput("");
    setSelectedGuest(null);
    setSuggestions([]);
    setToast(null);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setFormData({ attending: "", dietaryRestrictions: "", songRequest: "" });
  };

  return (
    <div className="rsvp-container">
      {/* Scattered polaroid photos */}
      <div className="polaroid polaroid-1">
        <img src="/assets/images/polaroids/photo14.jpeg" alt="Memory" />
        <p className="polaroid-caption">The Proposal</p>
      </div>
      <div className="polaroid polaroid-2">
        <img src="/assets/images/polaroids/photo15.jpeg" alt="Memory" />
        <p className="polaroid-caption">Looking Spiffy</p>
      </div>
      <div className="polaroid polaroid-3">
        <img src="/assets/images/polaroids/photo16.jpeg" alt="Memory" />
        <p className="polaroid-caption">Christmas</p>
      </div>

      <div>
        <h2 className="rsvp-title">RSVP</h2>
        <p className="rsvp-text">Let us know if you can join the celebration!</p>
        <button className="rsvp-button" onClick={() => setIsModalOpen(true)}>
          RSVP Now
        </button>
      </div>

      {isModalOpen && (
        <div className="rsvp-modal-overlay" onClick={closeModal}>
          <div className="rsvp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="rsvp-modal-close" onClick={closeModal}>×</button>

            {toast && (
              <div
                className={`rsvp-toast-backdrop ${toast.visible ? "rsvp-toast-visible" : "rsvp-toast-hidden"}`}
                onClick={dismissToast}
              >
                <div className="rsvp-toast-card" onClick={(e) => e.stopPropagation()}>
                  <button className="rsvp-toast-close" onClick={dismissToast} aria-label="Close">×</button>
                  <p className="rsvp-toast-message">{toast.message}</p>
                </div>
              </div>
            )}

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
                  {/* Name autocomplete */}
                  <div className="rsvp-autocomplete-wrapper">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Start typing your name..."
                      value={nameInput}
                      onChange={handleNameInput}
                      className={`rsvp-input ${selectedGuest ? "rsvp-input-selected" : ""}`}
                      autoComplete="off"
                      readOnly={!!selectedGuest}
                    />
                    {selectedGuest && (
                      <button
                        type="button"
                        className="rsvp-clear-name"
                        onClick={clearSelection}
                        aria-label="Clear name"
                      >
                        ×
                      </button>
                    )}
                    {suggestions.length > 0 && suggestionPos && (
                      <ul
                        className="rsvp-suggestions"
                        ref={suggestionsRef}
                        style={{ top: suggestionPos.top, left: suggestionPos.left, width: suggestionPos.width }}
                      >
                        {suggestions.map((name) => (
                          <li
                            key={name}
                            className="rsvp-suggestion-item"
                            onMouseDown={() => selectGuest(name)}
                          >
                            {name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Already RSVP'd — handled by toast, remove inline block */}

                  {/* Always-visible form fields */}
                  <>
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

                      <textarea
                        name="dietaryRestrictions"
                        placeholder="Any dietary restrictions or food allergies? (Optional)"
                        value={formData.dietaryRestrictions}
                        onChange={handleChange}
                        className="rsvp-textarea"
                        rows="3"
                      />

                      <textarea
                        name="songRequest"
                        placeholder="Got a song you'd love to hear during the reception? (Optional)"
                        value={formData.songRequest}
                        onChange={handleChange}
                        className="rsvp-textarea"
                        rows="2"
                      />

                      {error && <p className="rsvp-error">{error}</p>}

                      <button type="submit" className="rsvp-submit-button">
                        Submit RSVP
                      </button>
                    </>
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