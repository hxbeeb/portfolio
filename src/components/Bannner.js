import { useState,useEffect } from "react"
import { Container,Row ,Col} from "react-bootstrap" 
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/pic.png"
import 'animate.css/animate.min.css';
import TrackVisibility from 'react-on-screen';

 export  const Banner=()=>{
    const [loopNum,setLoopNum]=useState(0);
    const toRotate=["an APP Developer","a Web Developer","an AI Developer"];
    const[isDeleting,setIsDeleting]=useState(false);
    const[text,setText]=useState('');
    const [index, setIndex] = useState(1);
    const period =2000;
    const[delta,setDelta]=useState(300 - Math.random()*100);
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    
    return (<section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({isVisible})=>(
                <div className={isVisible?"animate__animated animate__slideIn":""}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>{"I'm "}<span className="wrap">{text}</span></h1>
                    {/* <p>Lorem Ipsum</p> */}
                    <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25} /></button>
                    </div>)}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="header img" />
                </Col>
            </Row>
        </Container>
    </section>)
 }