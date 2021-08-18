import AppBar from "@material-ui/core/AppBar";
import Button from '@material-ui/core/Button';
import { IconButton, Paper } from "@material-ui/core/index";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Fragment, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    btn: {
        flexGrow: 2,
    },

    menuBtn: {
        marginRight: theme.spacing(2)
    },

    title: {
        flexGrow: 1
    },

    innerContainer: {
        width: 'auto'
    }
}));

/**
 * NavBar is the header component for VibeCheck
 * @returns {JSX.Element}
 * @constructor
 */
export const NavBar = ({ user }) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const LoginButton = () => (
        <Button
            variant={"outlined"}
            color={"inherit"}
            startIcon={<AccountCircleIcon />}
        >
            {user.name}
        </Button>
    )

    const displayLogin = () => {
        if(location.pathname != '/login') {
            return <LoginButton/>
        }
    }


    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    {
                        location.pathname != '/' && <IconButton className={classes.menuBtn}>
                            <MenuIcon />
                        </IconButton>
                    }

                    <Typography className={classes.title} variant="h5">
                        Vibe Check
                    </Typography>


                    {
                        user != null ?
                            displayLogin()
                            :
                            <Fragment>
                                <Button
                                    color={"secondary"}
                                    variant="contained"
                                    onClick={() => {
                                        history.push('/login');
                                    }}
                                >
                                    Login
                                </Button>
                            </Fragment>
                    }
                </Toolbar>
            </AppBar >
        </div >
    )
}