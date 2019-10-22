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

    // const postMessage = () => {
    //     console.log('called postmessage from child')
    //     window.parent.postMessage('clicked on Success! Yayy!')
    // }

    const handleClick = () => {
        console.log('calling your mother now!')
        window.parent.postMessage('home','*')
    }

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
                            href="http://localhost:3000/home"
                            className={classes.link}
                            onClick={handleClick}
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
                            href="http://localhost:3000/services"
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
                            href="http://localhost:3000/utilities"
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

