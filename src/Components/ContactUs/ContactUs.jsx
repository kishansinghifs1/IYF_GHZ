import { useState } from "react";
import "./ContactUs.css";
import DYS from "../../assets/DYS.jpg";

function ContactUs() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "96b13c8d-393b-4298-b30c-6237cc21f1bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="abt">
        <div className="abt-left">
          <img src={DYS} alt="" className="abt-img" />
        </div>
        <div className="abt-right">
          <h2>Enroll Your Self</h2>
          <h3>Course Description: Systematic study of basics of Gita, Weekend sessions to explore, How to live balance life, to know self identity, understand Gita’s foundational knowledge.</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>Your Phone no.</label>
              <input
                type="phone number"
                name="phone number"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label>Write your message here</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="6"
              ></textarea>
            </div>
            <button type="submit" className="submit-bttn">
              Send Message
            </button>
            <span id="sendd">{result}</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
