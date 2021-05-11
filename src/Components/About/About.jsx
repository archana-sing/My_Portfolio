import React from 'react'
import{ Link} from 'react-router-dom'
import Styles from './About.module.css'
import Portfolio from '../Portfolio/Portfolio'
import {AiFillPhone } from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillGithub } from "react-icons/ai";
import {AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import file from '../../Resume/resume archana.pdf'
// import {RiDatabase2Fill } from "react-icons/ri";
// import {SiCss3} from "react-icons/si";
// import {RiReactjsLine } from "react-icons/ri";
// import {AiOutlineApartment} from "react-icons/ai";
// import {useHistory} from 'react-router-dom';
import profile_pic from '../../Images/my_profile_pic.jpg'
// import gitcommit from '../../Images/My git commits.png'

// import video from '../../Videos/meetup.mp4'

const About = () => {
    // let history = useHistory();
    // const handleClick =() => {
    //     history.push("/projects")
    // }
    return (
        <div>
            <div className = {Styles.header}>
                <Link className = {Styles.link} to = "/My_Portfolio">About</Link> 
                <a className = {Styles.link} href = "#projects">Projects</a> 
           
            </div>
            <div >
                <div style = {{textAlign : "center" , margin : "20px center"}}>
                    <img className = {Styles.profile_pic} src = {profile_pic} alt = "Archana"/>
                    <div>
                        <h1 style = {{fontSize : "39px",textAlign : "center"}}>Archana Singh</h1>
                        <h3 style = {{textAlign : "center"}}>Full Stack web Developer</h3>
                    </div>
                    <div className = {Styles.contact_div}>
                    <MdEmail className = {Styles.icons}/>
                    <h4>abhiarchana14@gmail.com</h4>
                    <AiFillHome className = {Styles.icons}/>
                    <h4>Pune , India</h4>
                    <AiFillPhone className = {Styles.icons}/>
                    <h4>6374442683</h4>
                    </div>
                    <h3>Hi, I'm Archana Singh</h3>
                    <h3>A passionate coder, who focuses on writing clean, elegant and efficient code.</h3>
                    <h3>Looking for a challenging role in software industry.</h3>
                    <div style = {{display : "flex" , justifyContent : "space-around", width : "100px" , margin : "10px auto"}}>
                        <a className = {Styles.contact_icons} href = "https://www.linkedin.com/in/singh-archana" target = "blank"><AiFillLinkedin/></a>
                        <a className = {Styles.contact_icons} style = {{marginRight : "30px"}} href = "https://github.com/archana-sing" target = "blank"><AiFillGithub/></a>
                    </div>
                    <a  href={file} download="myFile"><button  className = {Styles.resumeButton}>Download Resume</button></a>
                </div>
                
               
                {/* ****************************Tech Stacks Section ******************************************/}
               
                <h1 style = {{marginTop : "50px" , marginBottom : "35px" , fontSize : "30px"}}>Tech Stacks</h1>
                <div className = {Styles.container_lang_div}>
                    <div  className = {Styles.lang_cards}>
                        <img className = {Styles.lang_pic} src = "data:image/png;base64,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" alt = "html"/>
                        <h3>HTML</h3>
                    </div >
                    <div className = {Styles.lang_cards}>
                    <img className = {Styles.lang_pic} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsXtUwt8M2BvVv1457LmiZ-zCfvi9RFhLFg&usqp=CAU" alt = "css"/>
                    <h3>CSS</h3>
                    </div>
                    <div className = {Styles.lang_cards}>
                    <img className = {Styles.lang_pic} src = "https://aalinds.github.io/assets/images/react1.svg" alt = "react"/>
                    <h3>React</h3>
                    </div>
                    <div className = {Styles.lang_cards}>
                    <img className = {Styles.lang_pic} src = "data:image/jpeg;base64,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" alt = "nodejs"/>
                    <h3>Node.js</h3>
                    </div>
                    <div className = {Styles.lang_cards}>
                    <img className = {Styles.lang_pic} src = "data:image/png;base64,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" alt = "mongodb"/>
                    <h3>MongoDB</h3>
                    </div>
                    <div className = {Styles.lang_cards}>
                    <img className = {Styles.lang_pic} src = "data:image/png;base64,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" alt = "git"/>
                    <h3>Git</h3>
                    </div>
                </div>
                <div className = {Styles.divider_div}></div>
                <a name = "projects"><Portfolio/></a>
                {/* <h1 style = {{marginTop : "50px" , marginBottom : "40px" , fontSize : "40px"}}>Proficiencies</h1>
                <div className = {Styles.container_proficiency}>
                    <div  className = {Styles.lang_cards}>
                        <RiReactjsLine className = {Styles.proficiencies}/>
                       
                        <h3>React app</h3>
                        
                    </div >
                    <div className = {Styles.lang_cards}>
                        <SiCss3 className = {Styles.proficiencies}/>
                    
                    <h3>Frontend</h3>
                    </div>
                    <div className = {Styles.lang_cards}>
                        <RiDatabase2Fill className = {Styles.proficiencies} />
                   
                    <h3>Backend</h3>
                    </div>
                    <div className = {Styles.lang_cards}>
                        <AiOutlineApartment className = {Styles.proficiencies}/>
                        <h3>Data Structure and algorithms</h3>
                    </div>
                </div> */}

{/*               
                <div className = {Styles.divider_div}></div>
                <h1 style = {{marginTop : "50px" , marginBottom : "40px" , fontSize : "40px"}}>Git Commits</h1>
                <img className = {Styles.gitComit_image} src = {gitcommit} alt = "git" style = {{marginBottom : "40px"}} />
                <div style = {{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                    <button className = {Styles.resumeButton} onClick = {handleClick}>See my Projects</button>
                </div> */}
            </div>
        </div>
    )
}

export default About
