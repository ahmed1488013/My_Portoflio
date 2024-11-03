import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_img from "../../assets/WhatsApp Image 2024-10-30 at 03.37.27_d4c0d3a5.jpg";
import { Fade } from "react-awesome-reveal"; // استيراد تأثير Fade

const About = () => {
  return (
    <div id="about" className="about">
      <Fade direction="up"> {/* تأثير على العنوان */}
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="Decorative pattern" />
        </div>
      </Fade>
      <div className="about-section">
        <div className="about-left">
          <Fade direction="left"> {/* تأثير على الصورة */}
            <img src={about_img} alt="Profile" />
          </Fade>
        </div>
        <div className="about-right">
          <Fade direction="right"> {/* تأثير على النص */}
            <div className="about-para">
              <p>
                Passionate about web development, I bring a strong foundation in
                front-end technologies, with a focus on creating engaging and
                responsive user interfaces. My goal is to build seamless digital
                experiences that make a positive impact.
              </p>
              <p>
                With a commitment to continuous learning, I keep up with the
                latest industry trends and advancements. I’m dedicated to refining
                my skills in web technologies to deliver high-quality,
                professional work on every project.
              </p>
            </div>
          </Fade>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>TypeScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Sass</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <Fade direction="up"> {/* تأثير على الإنجازات */}
          <div className="about-achievment">
            <h1>1</h1>
            <p>YEAR OF EXPERIENCE</p>
          </div>
        </Fade>
        <hr />
        <Fade direction="up" delay={100}> {/* تأثير على الإنجازات */}
          <div className="about-achievment">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
        </Fade>
        <hr />
        <Fade direction="up" delay={200}> {/* تأثير على الإنجازات */}
          <div className="about-achievment">
            <h1>4</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
