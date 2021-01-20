import React, { Component } from 'react';
import Image from 'material-ui-image'; //https://www.npmjs.com/package/material-ui-image
import { Box, Container, Grid } from '@material-ui/core';
import profilepic from './profilepic.jpg';
class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const imageStyle = {
            height: '300px',
            width: '300px',
            'border-radius': '50%'
        };
        return (
            <div>
                <Grid>
                    <Grid container justify="center">
                        <Grid item>
                            {/* Cannot use Image from material-ui-image with grid, idk why */}
                            <img style={imageStyle} alt={"Francis Nguyen"} src={profilepic} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid
                        container direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <Grid item>
                            Francis
                        </Grid>

                        <Grid item>
                            Nguyen
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home;
