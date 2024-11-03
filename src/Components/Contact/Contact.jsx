import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { Fade, Slide } from "react-awesome-reveal"; // استيراد تأثيرات Fade و Slide

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ea7eda7d-b49a-4138-a139-0d9816dfa378");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <Fade direction="left"> {/* تأثير Fade على القسم الأيسر */}
          <div className="left">
            <h1>Let&apos;s talk</h1>
            <p>
              We value your feedback and are here to assist you with any inquiries or concerns you may have. 
              Our team is dedicated to providing you with the best possible support. Whether you have a question 
              about our services or need assistance, don’t hesitate to reach out.
            </p>
            <div className="details">
              <div className="contact-detail">
                <img src={mail_icon} alt="Email Icon" />
                <p>ah625634@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="Phone Icon" />
                <p>+20 109 537 4396</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="Location Icon" />
                <p>Minya, Egypt</p>
              </div>
            </div>
          </div>
        </Fade>

        <Slide direction="right"> {/* تأثير Slide على القسم الأيمن */}
          <form onSubmit={onSubmit} className="right">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Name" name="name" required />
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Email" name="email" required />
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              placeholder="Type your message"
              rows="8"
              required
            ></textarea>
            <button type="submit" className="submit">
              Submit Now
            </button>
          </form>
        </Slide>
      </div>
    </div>
  );
};

export default Contact;
