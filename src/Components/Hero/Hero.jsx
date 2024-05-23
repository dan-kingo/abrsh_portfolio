import "./Hero.css";
import profilePic from "../../assets/profile_img.svg";
const Hero = () => {
  return (
    <div id="hero" className="hero-section">
      <img src={profilePic} alt="" />
      <h1>
        <span>I'm abrsH,</span> Experienced Video Editor based in Ethiopia.
      </h1>
      <p>
        With a keen eye for detail and a passion for storytelling, I bring a
        unique blend of creativity and technical expertise to every video
        project
      </p>

      <div className="cta">
        <button className="contact-me">Contact Me</button>
        <button className="download-cv">Download CV</button>
      </div>
    </div>
  );
};
export default Hero;
