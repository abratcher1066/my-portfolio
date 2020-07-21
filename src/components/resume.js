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
                                src="https://www.shareicon.net/data/512x512/2017/07/13/888372_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Andrew Bratcher</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(123) 456-7890</p>
                        <h5>Email</h5>
                        <p>someone@example.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
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
                            schoolDescription="Lorem ipsum fdsi0fjadspoifjoaidfjlokdsaifnjm sad fdsajf sapkdfj dsafPOSAJFPOA F fdsf asadsfasdf ljadskf jlkdsa jdsaoq dfsouoewsur kjds DSOJfds jk."
                            />

                        <Education 
                            startYear={2012}
                            endYear={2015}
                            schoolName="My 2nd University"
                            schoolDescription="Lorem ipsum fdsi0fjadspoifjoaidfjlokdsaifnjm sad fdsajf sapkdfj dsafPOSAJFPOA F fdsf asadsfasdf ljadskf jlkdsa jdsaoq dfsouoewsur kjds DSOJfds jk."
                            />

                        {/* div line */}
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                            <Experience
                                startYear={2009}
                                endYear={2012}
                                jobName="First Job"
                                jobDescription="Lorem ipsum fdsi0fjadspoifjoaidfjlokdsaifnjm sad fdsajf sapkdfj dsafPOSAJFPOA F fdsf asadsfasdf ljadskf jlkdsa jdsaoq dfsouoewsur kjds DSOJfds jk."
                            />

                            <Experience
                                startYear={2012}
                                endYear={2016}
                                jobName="Second Job"
                                jobDescription="Lorem ipsum fdsi0fjadspoifjoaidfjlokdsaifnjm sad fdsajf sapkdfj dsafPOSAJFPOA F fdsf asadsfasdf ljadskf jlkdsa jdsaoq dfsouoewsur kjds DSOJfds jk."
                            />

                            <Experience
                                startYear={2012}
                                endYear={2016}
                                jobName="Third Job"
                                jobDescription="Lorem ipsum fdsi0fjadspoifjoaidfjlokdsaifnjm sad fdsajf sapkdfj dsafPOSAJFPOA F fdsf asadsfasdf ljadskf jlkdsa jdsaoq dfsouoewsur kjds DSOJfds jk."
                            />

                        {/* div line */}
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills 
                            skill="HTML/CSS"
                            progress={75}
                        />
                        <Skills 
                            skill="Javascript"
                            progress={66}
                        />
                        <Skills 
                            skill="React"
                            progress={42}
                        />
                        <Skills 
                            skill="SQL"
                            progress={72}
                        />
                            


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;