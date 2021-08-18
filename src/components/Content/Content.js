import {Container} from "@material-ui/core/index";
import {Fragment} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles( (theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
    }
}));


export const Content = ({children}) => {
    const classes = useStyles();
    return(
        <Fragment>
            <div className={classes.toolbar} />
            <Container className={classes.content}>
                {children}
            </Container>
        </Fragment>

    )
}