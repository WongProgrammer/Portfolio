import React, { Component } from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, ButtonBase, Divider, CardHeader, Avatar } from '@material-ui/core';
import archonia from './archonia.jpeg';
import city from './city.png';
import county from './county.png';

export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.cityHandler = this.cityHandler.bind(this);
        this.archoniaHandler = this.archoniaHandler.bind(this);
        this.countyHandler = this.countyHandler.bind(this);
    }
    cityHandler() {
        window.open("https://gsd.lacity.org/services/management-information-services")
    }
    archoniaHandler() {
       window.open("https://www.archonia.us/en-us/")
    }
    countyHandler() {
       window.open("https://parks.lacounty.gov/");
    }
    render() {
        const fontStyle = {
            color: "#424140",
        };
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
                        <Typography variant="h2" style={fontStyle}>Experience</Typography>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        spacing={2}
                        justify="space-between"
                        style={{ paddingLeft: "5%", paddingRight: "5%" }}
                    >
                        <Grid item>
                            <Card name="Francis" style={{ maxWidth: 325 }}>
                                <CardActionArea onClick={this.archoniaHandler}>
                                    <CardHeader
                                        avatar={<Avatar aria-label="Archonia" src={archonia} />}
                                        title="Archonia.US"
                                        subheader="August 2020 - Present"
                                    />
                                    <Divider />
                                    <CardContent>
                                        <Typography variant="h6">
                                            Ecommerence Assistant
                                        </Typography>
                                        <Typography variant="body1">
                                            <ul>
                                                <li>
                                                    Developed, tested, bug fixed features of current web applications with PHP, Jquery, and SQL
                                                </li>
                                                <li>
                                                    Documented, edited, and revised training manuals and documentation of the online shop and inventory web application
                                                </li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Card style={{ maxWidth: 325 }}>
                                <CardActionArea onClick={this.cityHandler}>
                                    <CardHeader
                                        avatar={<Avatar aria-label="City of Los Angeles" src={city} />}
                                        title="City of Los Angeles"
                                        subheader="August 2019 - Present"
                                    />
                                    <Divider />
                                    <CardContent>
                                        <Typography variant="h6">
                                            System Analyst Intern
                                        </Typography>
                                        <Typography variant="body1">
                                            <ul>
                                                <li>
                                                    Assisted in the redesign and ADA compliant of the city’s website on WordPress
                                                </li>
                                                <li>
                                                    Developed a PC Setup checklist web application with NodeJS, React, HTML, CSS, Bootstrap
                                                </li>
                                                <li>
                                                    Tested new technology, installed and configured computer hardware, software, systems, networks, printers and scanners, and setted up new accounts for over 500 users
                                                </li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Card style={{ maxWidth: 325 }}>
                                <CardActionArea onClick={this.countyHandler}>
                                    <CardHeader
                                        avatar={<Avatar aria-label="Los Angeles County Parks and Recreation" src={county} />}
                                        title="Los Angeles County Parks and Recreation"
                                        subheader="August 2019 - May 2020"
                                    />
                                    <Divider />
                                    <CardContent>
                                        <Typography variant="h6">
                                            Software Engineer Intern
                                        </Typography>
                                        <Typography variant="body1">
                                            <ul>
                                                <li>
                                                    Developed an event registration form for event holders to register their event in LA County
                                                </li>
                                                <li>
                                                    Built a search function, admin portal, and used the Google Map API to create a park finder
                                                </li>
                                                <li>
                                                    Technologies used are C#, ASP.NET, MVC, Microsoft SQL, JS, Bootstrap
                                                </li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        )
    }
}
