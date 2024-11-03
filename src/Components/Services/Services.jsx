import "./serv.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import { Fade } from "react-awesome-reveal"; // استيراد تأثير Fade

const Services = () => {
  return (
    <div id="serv" className="Services">
      <div className="serv-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="serv-container">
        {Services_Data.map((item, index) => (
          <Fade key={index} direction="up" delay={index * 100}> {/* إضافة تأثير على كل عنصر خدمة */}
            <div className="serv-formate">
              <h3>{item.s_no}</h3>
              <h2>{item.s_name}</h2>
              <p>{item.s_desc}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Services;
