import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const styles = (theme) => ({
    root: {
    },
    buttonContainer: {
        paddingTop: '20%',
    },
    button: {
        backgroundColor: 'cyan',
        color: '#feffff',
    },
    link: {
        textDecoration: 'none'
    }
});

const Buttons = (props) => {

    // const handleClick = (path) => {
    //     window.parent.postMessage(path, '*')
    // }

    const {
        classes
    } = props;

    return (
        <div className={classes.root}>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="row"
                spacing={3}
                className={classes.buttonContainer}
            >
                <Grid item >
                    <Button
                        variant="contained"
                        className={classes.button}
                    >
                        <a
                            href="http://localhost:3000/success?caseID=123&sessionID=123"
                            className={classes.link}
                        >
                            Success
                        </a>
                    </Button>
                </Grid>
                <Grid item >
                    <Button
                        variant="contained"
                        className={classes.button}
                    >
                        <a
                            className={classes.link}
                            href="http://localhost:3000/error"
                        >
                            Error
                        </a>
                    </Button>
                </Grid>
                <Grid item >
                    <Button
                        variant="contained"
                        className={classes.button}
                    >
                        <a
                            href="http://localhost:3000/saveforlater"
                            className={classes.link}
                        >
                            Save for later
                        </a>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
export default withStyles(styles, { withTheme: true })(Buttons);

