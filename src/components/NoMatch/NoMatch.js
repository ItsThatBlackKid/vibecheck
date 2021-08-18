import {useLocation} from 'react-router-dom';
import Typography from "@material-ui/core/Typography/Typography";
import {Grid} from "@material-ui/core/index";

export const NoMatch = () => {
    const location = useLocation();

    return (
        <Grid container spacing={0} direction="row" alignItems={"center"} justifyContent={"center"}
        >
            <Grid item xs={5}>
                <Typography align={'center'} variant={"h2"}>No match for <code>{location.pathname}</code> </Typography>
            </Grid>
        </Grid>
    )
}