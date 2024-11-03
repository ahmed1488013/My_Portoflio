import "./hero.css";
import profile_img from "../../assets/jkmj21.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useInView } from 'react-intersection-observer'; // استيراد المكتبة

const Hero = () => {
  const { ref: imgRef, inView: imgInView } = useInView({ threshold: 0.1 });
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1 });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.1 });
  const { ref: actionRef, inView: actionInView } = useInView({ threshold: 0.1 });

  return (
    <div id="home" className="hero">
      <img ref={imgRef} className={`fade ${imgInView ? 'fade-in' : ''}`} src={profile_img} alt="Ahmed Hamada" />
      <h1 ref={titleRef} className={`slide ${titleInView ? 'slide-in' : ''}`}>
        <span>I&apos;m Ahmed Hamada,</span> a frontend developer based in Egypt.
      </h1>
      <p ref={textRef} className={`fade ${textInView ? 'fade-in' : ''}`}>
        Passionate about creating beautiful and functional user interfaces, I specialize in transforming ideas into elegant digital experiences. With a keen eye for design and a solid understanding of web technologies, I strive to deliver high-quality solutions that enhance user engagement and satisfaction.
      </p>
      <div className="hero-action" ref={actionRef}>
        <AnchorLink className={`anchor-link ${actionInView ? 'fade-in' : ''}`} offset={50} href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <div className={`hero-resume ${actionInView ? 'fade-in' : ''}`}>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
