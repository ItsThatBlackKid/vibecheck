import {Button, Grid, makeStyles, TextField, Box, Paper, IconButton} from "@material-ui/core/index";
import SendIcon from '@material-ui/icons/Send';
import Typography from "@material-ui/core/Typography/Typography";
import {useHistory} from 'react-router-dom';
import logo from "../../logo.svg";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    }
}));


export const LandingPage = () => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <Grid container column justifyContent='center' alignItems={"center"}>
            <Grid  item xs container spacing={3} direction={"column"} alignItems={"center"} justifyContent={"center"}>
                <Grid item >
                    <Paper>

                    </Paper>
                </Grid>
                <Grid item xs>
                <Typography  variant={"h2"}>Join the community!</Typography>
                </Grid>
                <Grid container xs direction={"row"} spacing={1} alignItems={"center"} justifyContent={"center"}>
                    <Grid item>
                            <Button endIcon={<SendIcon/>} variant={"outlined"} color={"inherit"} onClick={() => {history.push('/signup')}}>
                                Sign up
                            </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}