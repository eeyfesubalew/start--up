import "./Team.scss";
import team1 from "../assets/team-1.png";
import team2 from "../assets/team-2.png";
import team3 from "../assets/team-3.png";
const Team = () => {
  return (
    <section className="team-section">
      <div className="team-title-container">
        <h3 className="team-title">
          <span className="team-title-big">Meet Our </span>
          <span className="team-title-small">Creative Team Members</span>
        </h3>
      </div>
      <div className="teams-container">
        <div className="team">
          <div className="team-img-cont">
            <img src={team1} />
          </div>
          <p className="team-name">Isabela Moreira</p>
          <p className="team-position">Founder and CEO</p>
        </div>
        <div className="team">
          <div className="team-img-cont">
            <img src={team2} />
          </div>
          <p className="team-name">Seyfe Esubalew</p>
          <p className="team-position">Software Engineer</p>
        </div>
        <div className="team">
          <div className="team-img-cont">
            <img src={team3} />
          </div>
          <p className="team-name">Seyfe Esubalew</p>
          <p className="team-position">Software Engineer</p>
        </div>
      </div>
    </section>
  );
};
export default Team;
