import React, { Component } from 'react'
import { Button, IconButton, ListItemText, ListItem, List, Divider, Drawer } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Resume from '../Pages/Resume/Resume';
import Home from '../Pages/Home/Home';
import FNIcon from '../FNIcon.png';
import { withStyles } from '@material-ui/core/styles';
import profilepic from './profilepic.jpg';

const style = theme => ({
    paper: {
        width: 200,
        "text-align": "center",
        "justify-content" : "center",
        "align-items": "center",
        "background-color" : "#52BE80"
    },
    root: {
        "text-align": "center",
        "justify-content" : "center"
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
                            <ListItem button>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <IconButton aria-label="home">
                                        <img src={profilepic} style={mystyle} alt="Francis Nguyen Icon" />
                                    </IconButton>
                                </Link>
                            </ListItem>
                            
                            <ListItem button classes={{ root : classes.root }}>
                                <Link to="/Resume" style={{ textDecoration: 'none' }}>
                                    Resume
                                </Link>
                            </ListItem>

                            <ListItem button classes={{ root : classes.root }}>
                                <Link to="/Experience" style={{ textDecoration: 'none' }}>
                                    Experience
                                </Link>
                            </ListItem>
                    
                            <ListItem button classes={{ root : classes.root }}>
                                <Link to="/Volunteer">
                                    Volunteer
                                </Link>
                            </ListItem>

                            <ListItem button classes={{ root : classes.root }}>
                                <Link to="/Interest">
                                    Interest
                                </Link>
                            </ListItem>

                            <ListItem button classes={{ root : classes.root }}>
                                <Link to="/Contact">
                                    Contact
                                </Link>
                            </ListItem>
                        </List>
                    </Drawer>

                    <Switch>
                        <Route exact path="/">
                            <main>
                                <Home />
                            </main>

                        </Route>
                        <Route exact path="/Resume">
                            <Resume />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default withStyles(style)(Navbar);
