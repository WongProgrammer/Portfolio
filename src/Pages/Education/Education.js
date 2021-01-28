import React, { Component } from 'react';
import { Grid, Typography, Card, CardActionArea, CardContent, CardMedia, Chip } from '@material-ui/core';
import csula from './csula.png';
import courses from './courses.json';

export default class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const fontStyle = {
            color: "#424140",
        };

        const imgStyle = {
            height: 250,
            width: 250,
        };

        const contentStyle = {
            display: "flex"
        }

        const courseList = courses.courses.map((course) => {
            return (
                <Grid item>
                    <Chip label={course.title} />
                </Grid>
            )
        });

        return (
            <div>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    style={{ minHeight: '95vh', maxWidth: "85vw"}}
                >
                    <Grid item>
                        <Typography variant="h2" style={fontStyle}>Education</Typography>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardActionArea style={contentStyle}>
                                <CardMedia>
                                    <img style={imgStyle} alt="csula logo" src={csula} />
                                </CardMedia>
                                <CardContent>
                                    <Typography style={fontStyle} variant="h4">Bachelors of Science in Computer Science</Typography>
                                    <Typography style={fontStyle} variant="h5">Calfornia State University of Los Angeles</Typography>
                                    <Typography style={fontStyle} variant="h6">G.P.A: 3.09 / 4.0</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Typography style={fontStyle} variant="h3">Courses</Typography>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        spacing={2}
                        justify="space-between"
                        style={{paddingLeft: "5%", paddingRight: "5%"}}
                    >
                        {courseList}
                    </Grid>
                </Grid>

            </div>
        )
    }
}
