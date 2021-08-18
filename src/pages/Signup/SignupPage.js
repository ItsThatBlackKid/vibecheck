import Card from '@material-ui/core/Card'
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import {useState} from "react";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    container: {
        flexGrow: 1,
    },
    card: {
        height: '35vh',
        width: '40vw'
    }
}))

export const SignupPage = () => {
    document.title = "Signup"

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [signedUp, setSignedUp] = useState(false)

    const classes = useStyles();

    const signUp = () => {
        let storedUsers = []
         storedUsers = JSON.parse(localStorage.getItem('users'));
        console.log(storedUsers);
        if (storedUsers == null) {
            storedUsers = [];
        }

        storedUsers.push(userInfo);
        localStorage.setItem('users', JSON.stringify(storedUsers));
        setSignedUp(true);
    }

    return (
        <Grid container
              spacing={10}
              justifyContent={"center"}
              alignItems={"center"}
              className={classes.container}>
            <Grid item>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    signUp()}}>
                    <Card className={classes.card}>
                        <CardHeader title={"Sign up"} style={{textAlign: 'center'}}>
                        </CardHeader>
                        <CardContent>

                            <Grid container spacing={1} direction={"column"} alignItems={"center"}
                                  justifyContent={"center"}>
                                <Grid item>
                                    <TextField value={userInfo.name}
                                               id={"name"}
                                               name={"name"}
                                               label={"Name"}
                                               onChange={(e) => {
                                                   setUserInfo({
                                                       ...userInfo,
                                                       name: e.target.value
                                                   })
                                               }}/>
                                </Grid>
                                <Grid item>
                                    <TextField value={userInfo.email}
                                               id={"email"}
                                               name={"email"}
                                               label="Email"
                                               onChange={(e) => {
                                                   setUserInfo({
                                                       ...userInfo,
                                                       email: e.target.value
                                                   })
                                               }}/>
                                </Grid>

                                <Grid item>
                                    <TextField value={userInfo.password}
                                               id={"password"}
                                               name={"password"}
                                               label={"Password"}
                                               type="password"
                                               onChange={(e) => {
                                                   setUserInfo({
                                                       ...userInfo,
                                                       password: e.target.value
                                                   })
                                               }}/>
                                </Grid>
                            </Grid>
                            <Grid item>
                                {
                                    signedUp && <Typography align={"center"}>User created</Typography>
                                }
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid container justifyContent={"center"}>
                                <Grid item>
                                    <Button type={"submit"} size="small" variant={"contained"} color="primary">
                                        Signup
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </form>
            </Grid>
        </Grid>
    )
}