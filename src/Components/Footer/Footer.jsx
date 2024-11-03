import "./footer.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import user_icon from "../../assets/user_icon.svg";
import { Fade, Slide } from "react-awesome-reveal"; // استيراد تأثيرات Fade و Slide

const Footer = () => {
  return (
    <div className="Footer">
      <div className="top">
        <Fade direction="up"> {/* تأثير Fade للقسم العلوي */}
          <div className="top-left">
            <div className="footer-logo">
              <h2>Ahmed</h2>
              <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <p>
              Your trusted partner in delivering exceptional services and solutions. We are committed to helping you achieve your goals with professionalism and dedication.
            </p>
          </div>
        </Fade>
        
        <Slide direction="up"> {/* تأثير Slide للقسم الأيمن */}
          <div className="top-right">
            <div className="email-input">
              <img src={user_icon} alt="User Icon" />
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="subscribe">Subscribe</div>
          </div>
        </Slide>
      </div>
      
      <hr />
      
      <Fade direction="up"> {/* تأثير Fade للقسم السفلي */}
        <div className="bottom">
          <p className="bottom-left">
            &copy; 2024 Ahmed Hamada, All rights reserved
          </p>
          <div className="bottom-right">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Connect with Me</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
