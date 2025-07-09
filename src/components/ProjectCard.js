import { Col } from "react-bootstrap";
import githubIcon from '../assets/github.svg';

export const ProjectCard = ({ title, description, imgUrl, github, link }) => {
  const CardContent = (
    <div
      className="proj-imgbx advanced-card card-bg-image"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className="card-bg-gradient" />
      <div className="proj-txtx advanced-card-content card-bg-content">
        <h4 className="project-title">{title}</h4>
        <span className="project-desc">{description}</span>
        {github && (
          <a href={github} className="github-link-btn" target="_blank" rel="noopener noreferrer" title="View on GitHub" onClick={e => e.stopPropagation()}>
            <img src={githubIcon} alt="GitHub" style={{ width: 28, height: 28, marginTop: 12 }} />
          </a>
        )}
      </div>
    </div>
  );
  return (
    <Col size={12} sm={6} md={4} className="project-card-col">
      {(link || github) ? (
        <a href={link || github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          {CardContent}
        </a>
      ) : CardContent}
    </Col>
  );
}