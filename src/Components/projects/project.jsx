import "./project.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow from "../../assets/arrow_icon.svg";
import { Fade } from "react-awesome-reveal"; // استيراد تأثير Fade

const Project = () => {
  return (
    <div id="project" className="Project">
      <div className="project-title">
        <h1>My latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="pro-container">
        {mywork_data.map((item, index) => (
          <Fade key={index} direction="up" delay={index * 100}> {/* إضافة تأثير على كل مشروع */}
            <a href={item.link}>
              <img src={item.w_img} alt="" />
            </a>
          </Fade>
        ))}
      </div>
      <div className="show-more">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Project;
