import React, { Component } from 'react'
import { Button, IconButton, ListItem, List, Divider, Drawer } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Education from '../Pages/Education/Education';
import Experience from '../Pages/Experience/Experience';
import Projects from '../Pages/Projects/Projects';
import Interest from '../Pages/Interest/Interest';
import Home from '../Pages/Home/Home';
import { withStyles } from '@material-ui/core/styles';
import profilepic from './profilepic.jpg';

//Modify the css of material ui components
const style = theme => ({
    paper: {
        width: 200,
        "text-align": "center",
        "justify-content": "center",
        "align-items": "center",
        "background-color": "#63F092"
    },
    root: {
        "text-align": "center",
        "justify-content": "center"
    }
});

class Navbar extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        //The Image is affecting how my buttons are being formatted!!!
        const mystyle = {
            height: 150,
            width: 150,
            "border-radius": "50%"
        };

        const mainStyle = {
            "margin-left": 200
        };

        const navLinkStyle = {
            color : "#424140",
            textDecoration: 'none', 
            "font-weight" : "bold",
            "font-size" : "125%"
        }

        const { classes } = this.props;

        return (
            <div>
                <Router>
                    <Drawer
                        variant="permanent"
                        anchor="left"
                        classes={{ paper: classes.paper }}
                    >
                        <Divider />
                        <List>
                            <ListItem>
                                <NavLink to="/" style={{ textDecoration: 'none' }}>
                                    <IconButton aria-label="home">
                                        <img src={profilepic} style={mystyle} alt="Francis Nguyen Icon" />
                                    </IconButton>
                                </NavLink>
                            </ListItem>

                            <ListItem classes={{ root: classes.root }}>
                                <Button>
                                    <NavLink to="/Education" style={navLinkStyle}>
                                        Education
                                    </NavLink>
                                </Button>
                            </ListItem>

                            <ListItem classes={{ root: classes.root }}>
                                <Button>
                                    <NavLink to="/Experience" style={navLinkStyle}>
                                        Experience
                                    </NavLink>
                                </Button>
                            </ListItem>

                            <ListItem classes={{ root: classes.root }}>
                                <Button>
                                    <NavLink to="/Projects" style={navLinkStyle}>
                                        Projects
                                    </NavLink>
                                </Button>
                            </ListItem>

                            <ListItem classes={{ root: classes.root }}>
                                <Button>
                                    <NavLink to="/Interest" style={navLinkStyle}>
                                        Interest
                                    </NavLink>
                                </Button>
                            </ListItem>
                        </List>
                    </Drawer>

                    <Switch>
                        <Route exact path="/">
                            <div style={mainStyle}>
                                <Home />
                            </div>
                        </Route>

                        <Route exact path="/Education">
                            <div style={mainStyle}>
                                <Education />
                            </div>
                        </Route>

                        <Route exact path="/Experience">
                            <div style={mainStyle}>
                                <Experience />
                            </div>
                        </Route>

                        <Route exact path="/Projects">
                            <div style={mainStyle}>
                                <Projects />
                            </div>
                        </Route>

                        <Route exact path="/Interest">
                            <div style={mainStyle}>
                                <Interest />
                            </div>
                        </Route>

                    </Switch>
                </Router>
            </div>
        )
    }
}

export default withStyles(style)(Navbar);
