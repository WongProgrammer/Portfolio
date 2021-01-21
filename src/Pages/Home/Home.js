import React, { Component } from 'react';
import { GitHub, LinkedIn, Mail } from '@material-ui/icons';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { SvgIcon, Grid, Typography, Link, Box } from '@material-ui/core';
class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const nameStyle = {
            color: "#424140",
            fontSize: "90px",
        };

        const iconStyle = {
            color: "#D6D4D4",
            fontSize: "55px"
        }
        return (
            <div>       
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '95vh' }}
                >
                    <Grid item>
                        <Typography style={nameStyle}>
                            Francis Nguyen
                        </Typography>
                    </Grid>

                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                        direction="row"
                        style={{ marginBottom: 10 }}
                    >
                        <Grid item>
                            <SvgIcon style={{fontSize : 35}}>
                                <PersonPinIcon></PersonPinIcon>
                            </SvgIcon>
                        </Grid>
                        <Grid item>
                            <Typography style={{ fontSize: 25 }}> Westminster, CA </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                            <Typography
                                style={{ marginLeft: "5em", marginRight: "5em", marginBottom: "1.5em", fontSize: 22 }}
                            >
                                I am an alum from California State University, Los Angeles with a Bachelors Degree in Computer Science. During my years in college I have accumulated a wealth of experience with providing customer and team collaboration from working part-time at Los Angeles City Hall, team projects, clubs, and campus organizations. During my free time and course work. I have gained experience in using a variety of languages like: Java, JavaScript, Python, and related Frameworks such as ReactJS and React Native. My dream is to be able to build amazing and fun applications for people to enjoy!
                        </Typography>
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                    >
                        <Grid item>
                            <Link
                                href="mailto:francisnguyen2344@gmail.com"
                                target="_blank"
                            >
                                <SvgIcon style={iconStyle}>
                                    <Mail></Mail>
                                </SvgIcon>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link
                                href="https://www.linkedin.com/in/huy-francis-nguyen-620b7a15a"
                                target="_blank"
                            >
                                <SvgIcon style={iconStyle}>
                                    <LinkedIn></LinkedIn>
                                </SvgIcon>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link
                                href="https://github.com/WongProgrammer"
                                target="_blank"
                            >
                                <SvgIcon style={iconStyle}>
                                    <GitHub></GitHub>
                                </SvgIcon>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home;
