import {Navbar,Container,Nav}from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import logo from '../assets/logo2.jpg';
import navicon1 from '../assets/linkedin.svg';
import navicon2 from '../assets/github.svg';
import navicon3 from '../assets/twitter.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Debounce scrollspy update
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        const sections = [
          { id: 'home', offset: 0 },
          { id: 'skills', offset: 0 },
          { id: 'projects', offset: 0 },
          { id: 'connect', offset: 0 },
        ];
        sections.forEach(section => {
          const el = document.getElementById(section.id);
          if (el) {
            section.offset = el.getBoundingClientRect().top + window.scrollY;
          }
        });
        const scrollPos = window.scrollY + window.innerHeight / 3;
        let current = 'home';
        for (let i = 0; i < sections.length; i++) {
          if (scrollPos >= sections[i].offset) {
            current = sections[i].id;
          }
        }
        setActiveLink(current);
      }, 120);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo"  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/habeeb-182522225/"><img src={navicon1} alt="" /></a>
                <a href="https://github.com/hxbeeb"><img src={navicon2} alt="" /></a>
                <a href="https://x.com/hxbeeb_x"><img src={navicon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </Router>
  )
}