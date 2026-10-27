import { Link } from "react-router-dom";
// import SocialLinks from "../components/SocialLinks";
import profile from "../assets/profile.png";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>I'm Gloria Eve</h1>
        <p>I design and build websites that are clean, fast and easy to use.</p>

        <div className="hero-actions">
          <Link to="/project" className="btn btn-primary">
            View my projects
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact me
          </Link>
        </div>

        <SocialLinks />
      </div>
      <div className="hero-photo">
      <img src={profile} alt="Gloria Eve" />
    </div>   
      
    </section>
  );
}