import {Avatar, Card, CardActions, CardContent, CardHeader, Typography} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import {Fragment} from "react";
import Grid from "@material-ui/core/Grid";

/**
 * PostCard component consumes a post object and renders its fields
 * @constructor
 */

export const PostCard = ({post}) => {

    let TitleComp = () => (
        <Grid container spacing={2} direction={"row"} alignItems={"center"}>
            <Grid item>
                <Avatar><AccountCircleIcon/></Avatar>
            </Grid>
            <Grid item>
                <Typography variant={"h6"}>{post.user}</Typography>
            </Grid>
        </Grid>
    )


    return (
        <Card raised variant={"outlined"}>
            <CardHeader title={
                <TitleComp/>
                    }>

            </CardHeader>
            <CardContent>
                <Typography>
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button>
                    {post.likes} Like
                </Button>
            </CardActions>
        </Card>
    )
}