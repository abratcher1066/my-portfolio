import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() { 
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            class="img-fluid"
                            src="https://avatars0.githubusercontent.com/u/37027181?s=460&u=4723e2a3cab54fd90eaae4a1a3913037af2d4f74&v=4"
                            alt="avatar"
                            className="avatar-img"
                            />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express | MongoDB</p>

                            <div className="social-links">

                            {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                            {/* GitHub */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;