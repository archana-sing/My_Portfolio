import React from 'react'
import Styles from './Portfolio.module.css'
import busHire from '../../Images/bushire1.png'
import meetup from '../../Images/Landing Page.png'
import fitneespal from '../../Images/find_your_fit_landing.PNG'
import codecov from '../../Images/Screenshot_2020-11-26 The Leading Code Coverage Solution codecov.png'
import {AiFillGithub } from "react-icons/ai";
import { SiMaterialUi } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {SiCss3} from "react-icons/si";
import {AiFillHtml5 } from "react-icons/ai";
import {SiMongodb} from "react-icons/si";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import codecovVideo from '../../Videos/codecov.mp4'
import meetupvideo from '../../Videos/meetup.mp4'
import MyfitnessPalVideo from '../../Videos/fitnesspal.mp4'
import redbusvideo from '../../Videos/team_triangle_redbus.mp4'
import { DiJavascript1 } from "react-icons/di";

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid silver',
     // boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2, 3),
    },
  }));

const Portfolio = () => {
    const classes = useStyles();
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
  
    const handleOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };
    const handleOpen2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };
      const handleOpen3 = () => {
        setOpen3(true);
      };
    
      const handleClose3 = () => {
        setOpen3(false);
      };
      const handleOpen4 = () => {
        setOpen4(true);
      };
    
      const handleClose4 = () => {
        setOpen4(false);
      };
    return (
        <div>
            <h1 style = {{marginTop : "50px" , marginBottom : "60px" , fontSize : "40px"}}>My Work</h1>
            <div className = {Styles.projects}>
                <div className = {Styles.project_cards}>
                    <img src = {busHire} alt = "redbus" height = "300px" width = "580px"/>
                    <div className = {Styles.proect_cards_text}>
                        <h3>Redbus Clone</h3>
                        <p>A web application, which provides bus booking and hiring feature.</p>
                        
                        <div className = {Styles.preview_div}>
                            <button className = {Styles.preview_button} onClick={handleOpen1}>Preview</button>
                            <a className = {Styles.link} href = "https://github.com/nitansh11/redbus" target = "blank"><button className = {Styles.preview_button}>Github Repo</button></a>
                        </div>
                        <div className = {Styles.preview_div}>
                            <AiFillHtml5 className = {Styles.tech_stacks_icons}/>
                            <SiCss3 className = {Styles.tech_stacks_icons}/>
                            <FaReact className = {Styles.tech_stacks_icons}/>
                            <SiMaterialUi className = {Styles.tech_stacks_icons}/>
                            <SiMongodb className = {Styles.tech_stacks_icons}/>
                        </div>
                    </div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open1}
                         onClose={handleClose1}
                         closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                    <Fade in={open1}>
                    <div className={classes.paper}>
                            <video width="1000" height="600" controls >
                                <source src={redbusvideo} type="video/mp4"/>
                            </video>
                    </div>
                    </Fade>
                </Modal>
                </div>
            </div>


          {/* Meetup */}
            <div className = {Styles.project_cards}>
                    <img src = {meetup} alt = "meetup" height = "300px" width = ""/>
                    <div className = {Styles.proect_cards_text}>
                        <h3>Meetup Clone</h3>
                        <p>A web application, where users can organize their own events and join an event on the basis of their interests.</p>
                       
                        <div className = {Styles.preview_div}>
                            <button className = {Styles.preview_button} onClick={handleOpen2}>Preview</button>
                            <a className = {Styles.link} href = "https://github.com/ranjithkumark8/echo_meetup" target = "blank"><button className = {Styles.preview_button}>Github Repo</button></a>
                        </div>
                        <div className = {Styles.preview_div}>
                            <AiFillHtml5 className = {Styles.tech_stacks_icons}/>
                            <SiCss3 className = {Styles.tech_stacks_icons}/>
                            <FaReact className = {Styles.tech_stacks_icons}/>
                            <SiMaterialUi className = {Styles.tech_stacks_icons}/>
                        </div>
                    </div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open2}
                         onClose={handleClose2}
                         closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                    <Fade in={open2}>
                    <div className={classes.paper}>
                            <video width="1000" height="600" controls >
                                <source src={meetupvideo} type="video/mp4"/>
                            </video>
                    </div>
                    </Fade>
                </Modal>
            </div>


            {/* MyfitnessPal */}
            <div className = {Styles.project_cards}>
                    <img src = {fitneespal} alt = "fitnesspal" height = "300px" width = "580px"/>
                    <div className = {Styles.proect_cards_text}>
                        <h3>Myfitnesspal Clone</h3>
                        <p>A web application, where user can keep track of your food and exercises.</p>
                       
                        <div className = {Styles.preview_div}>
                            <button className = {Styles.preview_button} onClick={handleOpen3}>Preview</button>
                            <a className = {Styles.link} href = "https://github.com/pranit95/Find-Your-Fit" target = "blank"> <button className = {Styles.preview_button}>Github Repo</button></a>
                        </div>
                        <div className = {Styles.preview_div}>
                            <AiFillHtml5 className = {Styles.tech_stacks_icons}/>
                            <SiCss3 className = {Styles.tech_stacks_icons}/>
                            <DiJavascript1 className = {Styles.tech_stacks_icons}/>
                        </div>
                    </div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open3}
                         onClose={handleClose3}
                         closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                    <Fade in={open3}>
                    <div className={classes.paper}>
                            <video width="1000" height="600" controls >
                                <source src={MyfitnessPalVideo} type="video/mp4"/>
                            </video>
                    </div>
                    </Fade>
                </Modal>
            </div>

            {/* CodeCovClone */}
            <div className = {Styles.project_cards} style = {{marginBottom : "40px"}}>
                    <img src = {codecov} alt = "codecov" height = "300px" width = "580px"/>
                    <div className = {Styles.proect_cards_text}>
                        <h3>Codecov Clone</h3>
                        <p>Some web pages, perfectly clone from Codecov.</p>
                      
                        <div className = {Styles.preview_div}>
                            <button className = {Styles.preview_button} onClick={handleOpen4}>Preview</button>
                            <a className = {Styles.link} href = "https://github.com/AnayBhoraskar/TEAM_IRON" target = "blank"> <button className = {Styles.preview_button} onClick={handleOpen4}>Github Repo</button></a>
                        </div>
                        <div className = {Styles.preview_div}>
                            <AiFillHtml5 className = {Styles.tech_stacks_icons}/>
                            <SiCss3 className = {Styles.tech_stacks_icons}/>
                            <DiJavascript1 className = {Styles.tech_stacks_icons}/>
                        </div>
                    </div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open4}
                         onClose={handleClose4}
                         closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                    <Fade in={open4}>
                    <div className={classes.paper}>
                            <video width="1000" height="600" controls >
                                <source src={codecovVideo} type="video/mp4"/>
                            </video>
                    </div>
                    </Fade>
                </Modal>
            </div>


        </div>
        
    )
}

export default Portfolio
