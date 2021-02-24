import React, { Component } from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, Divider, CardHeader, Avatar, Chip, CardActions } from '@material-ui/core';
import axios from 'axios';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        };
    }
    async componentDidMount() {
        let temp = [];
        await axios.get(`https://api.github.com/users/WongProgrammer/repos`)
            .then((res) => {
                let projects = res.data;
                let projectNames = projects.map(project => {
                    return project.name;
                });
                let projectDescriptions = projects.map(project => {
                    return project.description;
                });

                for (let i = 0; i < projects.length; i++) {
                    temp.push({ name: projectNames[i], desc: projectDescriptions[i] });
                }
            })
            .catch((err) => {
                console.log(err);
            })

        for (let i = 0; i < temp.length; i++) {
            let languages = await axios.get(`https://api.github.com/repos/WongProgrammer/${temp[i].name}/languages`)
                .then(res => {
                    let result = [];
                    for(const [key, value] of Object.entries(res.data)) {
                        result.push(key);
                    }
                    return result;
                })
            temp[i].langauge = languages;
        }
        this.setState({ projects: temp });
        console.log(this.state.projects)
    }

    render() {
        const fontStyle = {
            color: "#424140",
        };

        // Display all of my projects  
        const displayProjects = this.state.projects.map((project) => {
            // console.log(project);
            return (
                <Grid item>
                    <Card style={{ maxWidth: 325, minWidth: 325 }}>
                        <CardActionArea>
                            <CardHeader
                                title={project.name}
                            />
                            <Divider />
                            <CardContent>
                                <Typography variant="body1">
                                    {project.desc}
                                </Typography>

                                <Typography>
                                   {project.langauge}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            );
        })

        return (
            <div>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    style={{ minHeight: '95vh', maxWidth: "85vw" }}
                >
                    <Grid item>
                        <Typography style={fontStyle} variant="h2">Projects</Typography>
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        spacing={2}
                        justify="space-between"
                        style={{ paddingLeft: "5%", paddingRight: "5%" }}
                    >
                        {displayProjects}
                    </Grid>
                </Grid>
            </div>
        )
    }
}
