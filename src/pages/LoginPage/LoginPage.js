import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import {useState} from "react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography/Typography";
import {useHistory} from 'react-router-dom'

export const LoginPage = ({setUser}) => {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })
    const history = useHistory();

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    /**
     * Logs user in by comparing email & password with all users
     */
    const login = () => {
        let users = []
        users = JSON.parse(localStorage.users);

        const found = users.filter((user) => {
            return user.email === loginDetails.email && user.password === loginDetails.password
        });

        console.log(found);

        if (found.length <=0) {
            setError("Incorrect email or passwordz");
            setSuccess(false);
        } else {
            setUser(found[0]);
            setError(null);
            setSuccess(true);
            history.push('/home');
        }
    }

    return (
        <Grid container
              spacing={10}
              justifyContent={"center"}
              alignItems={"center"}>

            <Grid item xs={6}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    login();
                }}>
                    <Card>
                        <CardHeader title={"Login"} style={{align: "center",  textAlign: 'center'}}>
                        </CardHeader>
                        <CardContent>
                            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Grid item>
                                    <TextField
                                        label={"Email"}
                                        required
                                        value={loginDetails.email}
                                        onChange={(e) => {
                                            setLoginDetails(prevState =>  ({
                                                ...prevState,
                                                email: e.target.value
                                            }))
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField label={"Password"}
                                               required
                                               type={"password"}
                                               value={loginDetails.password}
                                               onChange={(e) => {
                                                   setLoginDetails(prevState => ({
                                                       ...prevState,
                                                       password: e.target.value
                                                   }))
                                               }}/>
                                </Grid>
                            </Grid>
                            <Grid item>
                                {
                                    error && <Typography align={"center"}>{error}</Typography>
                                }
                                {
                                    success && <Typography align={"center"}>Logged in</Typography>
                                }
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid container justifyContent={"center"}>
                                <Grid item>
                                    <Button type={"submit"} size="small" variant={"contained"} color="primary">
                                        Login
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