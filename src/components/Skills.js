import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bg from '../assets/color-sharp.png';
import meter1 from '../assets/skills/react.png';
import meter2 from '../assets/skills/flutter.png';
import meter3 from '../assets/skills/node.png';
import express from '../assets/skills/express.png';
import postgre from '../assets/skills/postgre.png';
import sql from '../assets/skills/sql.png';
import jet from '../assets/skills/jetpack compose.png';
import 'animate.css/animate.min.css';
import TrackVisibility from 'react-on-screen';
import SkillCard from './SkillCard';

export const Skills=()=>{
    const skills = [
      // Languages
      { name: 'C++', img: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png', level: 'Advanced', category: 'Languages' },
      { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png', level: 'Advanced', category: 'Languages' },
      { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png', level: 'Advanced', category: 'Languages' },
      { name: 'Python', img: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png', level: 'Advanced', category: 'Languages' },
      { name: 'Java', img: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png', level: 'Advanced', category: 'Languages' },
      { name: 'HTML', img: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png', level: 'Advanced', category: 'Languages' },
      { name: 'CSS', img: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png', level: 'Advanced', category: 'Languages' },
      { name: 'Tailwind CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 'Intermediate', category: 'Languages' },
      { name: 'Dart', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', level: 'Intermediate', category: 'Languages' },
      { name: 'Kotlin', img: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/kotlin/kotlin.png', level: 'Intermediate', category: 'Languages' },
      // Frameworks
      { name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 'Intermediate', category: 'Frameworks' },
      { name: 'ReactJS', img: meter1, level: 'Advanced', category: 'Frameworks' },
      { name: 'ExpressJs', img: express, level: 'Advanced', category: 'Frameworks' },
      { name: 'NodeJs', img: meter3, level: 'Advanced', category: 'Frameworks' },
      { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 'Intermediate', category: 'Frameworks' },
      { name: 'SQL', img: sql, level: 'Intermediate', category: 'Frameworks' },
      { name: 'PostgreSQL', img: postgre, level: 'Intermediate', category: 'Frameworks' },
      { name: 'Flutter', img: meter2, level: 'Intermediate', category: 'Frameworks' },
      { name: 'Jetpack Compose', img: jet, level: 'Beginner', category: 'Frameworks' },
      // Tools
      { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 'Advanced', category: 'Tools' },
      { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 'Advanced', category: 'Tools' },
      { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 'Advanced', category: 'Tools' },
      { name: 'Visual Studio', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg', level: 'Intermediate', category: 'Tools' },
      { name: 'IntelliJ', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg', level: 'Intermediate', category: 'Tools' },
    ];

    const categories = ['Languages', 'Frameworks', 'Tools'];
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill skills-section" id="skills" style={{padding: '60px 0'}}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                    <TrackVisibility>
                {({ isVisible }) =>(
                <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                        <h2 style={{fontWeight: 700, fontSize: '2.5rem', marginBottom: 10}}>Technical Skills</h2>
                        <p style={{color: '#bbb', fontSize: '1.1rem', marginBottom: 30}}>Mastering the Art of Software Development</p>
                        </div> )}</TrackVisibility>
                        {categories.map(category => (
                          <div key={category} style={{marginBottom: 40}}>
                            <h4 style={{fontWeight: 600, marginBottom: 18, color: '#3867d6'}}>{category}</h4>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" itemClass="carousel-item-padding-40-px">
                              {skills.filter(skill => skill.category === category).map(skill => (
                                <SkillCard key={skill.name} name={skill.name} img={skill.img} level={skill.level} />
                              ))}
                            </Carousel>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={bg} alt="Background" />
    </section>
      )
}