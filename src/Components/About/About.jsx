import "./About.css";
import profilePic from "../../assets/dan (1).jpg";

const About = () => {
  return (
    <div className="about-section" id="about">
      <h1>About Me</h1>
      <div className="abouts">
        <div className="about-img">
          <img src={profilePic} alt="" />
        </div>
        <div className="about-para">
          <p className="p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            neque harum. Enim totam dolore eum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Adipisci, neque harum.
          </p>
          <p className="p2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            explicabo quae nobis iure provident. Saepe eum, impedit sit vero
            ducimus repellat. Commodi! explicabo quae nobis iure provident.
            Saepe eum, impedit sit vero ducimus repellat.
          </p>

          <div className="about-skills">
            <div className="about-skill">
              <p>Capcut</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Motion Graphics</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Visual Effects </p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p> Storytelling </p>
              <hr style={{ width: "95%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="achievements">
        <div className="each-achieve">
          <h3>2+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="each-achieve">
          <h3>15+</h3>
          <p>Project Completed</p>
        </div>
        <div className="each-achieve">
          <h3>3+</h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
