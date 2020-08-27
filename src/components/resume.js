import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
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
                        <h2>Education</h2>


                        {/* Importing education component */}
                        <Education 
                            startYear={'March 2020'}
                            endYear={'June 2020'}
                            schoolName="George Washington University"
                            schoolDescription="Full Stack Web Development Certificate - George Washington University, Washington, DC | 2020
                            A 24-week intensive boot camp program focused on gaining technical programming and market-driven skills."
                            />

                        <Education 
                            startYear={2012}
                            endYear={2015}
                            schoolName="George Mason University"
                            schoolDescription="MA in History, Concentration in Applied History with New Media and Information Technology Emphasis"
                            />

                        {/* div line */}
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                            <Experience
                                startYear={2016}
                                endYear={2019}
                                jobName="History Teacher and Special Education Teacher - (Loudoun County Public Schools)"
                                jobDescription=""
                            />

                            <Experience
                                startYear={2015}
                                endYear={2016}
                                jobName="Tech Ed Assistant - (Loudoun County Public Schools)"
                                jobDescription=""
                            />

                            <Experience
                                startYear={2014}
                                endYear={2016}
                                jobName="Adjunct Professor of History - (Northern Virginia Community College)"
                                jobDescription=""
                            />

                            <Experience
                                startYear={2013}
                                endYear={2014}
                                jobName="Historical Writing and Web Dev Intern - (National Park Service)"
                                jobDescription=""
                            />

                        {/* div line */}
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <p>Microsoft Office Suite, Node.Js, Express, JavaScript, jQuery, React.js, React, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML5, CSS3, Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API, ES6+, React Hooks, JSON, Sequelize</p>
                            


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;