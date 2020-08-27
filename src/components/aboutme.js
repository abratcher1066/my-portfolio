import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Aboutmedesc from './aboutmedesc';
import Experience from './experience';
import Skills from './skills';


class AboutMe extends Component {
    render() {
        return(
            <div>
                <Grid>
                    {/* Left side of page */}
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="https://avatars0.githubusercontent.com/u/37027181?s=460&u=4723e2a3cab54fd90eaae4a1a3913037af2d4f74&v=4"
                                alt="avatar"
                                style={{height: '400px'}}
                                class="avatar-img"
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Andrew Bratcher</h2>
                        <h4 style={{color: 'grey'}}>Full Stack Junior Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>Please feel free to drop me a note!</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Phone</h5>
                        <a href="tel:571-484-2025">571-484-2025</a>
                        <h5>Email</h5>
                        <a href = "mailto:abc@example.com?subject = Feedback&body = Message">Abratcher1066@gmail.com</a>
                        <h5>Web</h5>
                        <a href="https://github.com/abratcher1066">https://github.com/abratcher1066</a>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>


                    {/* Right side of page */}
                    <Cell className="resume-right-col" col={8}>
                        <h2>About Me</h2>


                        {/* Importing education component */}

                        <Aboutmedesc/>

                        {/* div line */}
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        {/* <h2>Mini Gallery</h2> */}


                            {/* <img 
                            src= "https://i.ibb.co/T18XM5g/lambchop.jpg"
                            style={{height: '400px', border: '3px solid #833fb2'}}
                            /> */}
                            <img 
                            src= "https://i.ibb.co/RzhqGKx/85114267-10158074181947370-4766010975126028288-n.jpg"
                            style={{height: '400px', border: '3px solid #833fb2'}}
                            />
                            <img
                            src= "https://i.ibb.co/vPpTN6p/brets.png"
                            style={{height: '400px', border: '3px solid #833fb2'}}
                            />

                        {/* div line */}
                        <hr style={{borderTop: '3px solid #e22947'}} />



                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default AboutMe;