import {Grid, Card, Button, CardActions, CardContent, CardMedia, Typography, Paper} from "@material-ui/core"
import {PostCard} from "../../components/PostCard";
import {PostEditor} from "../../components/PostEditor";
import {useState} from "react";


export const HomePage = () => {
    const [posts, setPosts] = useState([{
        id: 0,
        user: "Sao Kanneh",
        body: "Hello world",
        likes: 0,
    },
        {
            id: 1,
            user: "Sao Kanneh",
            body: "Lorem Ipsum",
            likes: 0,
        },

        {
            id: 2,
            user: "Sao Kanneh",
            body: "Lorem Ipsum",
            likes: 0,
        }]
    )

    const side = [
        {
            id: 0,
            body: "Account"
        },
        {
            id: 1,
            body: "Friends"
        },
        {
            id: 2,
            body: "Settings"
        }]


    const addPost = (newPost) => {
        console.log("hello");
        let newState = [...posts, {
            ...newPost,
            id: posts.length++,
            likes: 0,
        }]

        setPosts(newState);
    }


    return (
        <Grid container spacing={6} direction="row">
            <Grid xs={3} item container spacing={3} direction="column">
                {
                    side.map((ops) => {
                        return <Grid item key={ops.id}>
                            <Card>
                                <CardContent>
                                    {ops.body}
                                </CardContent>
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
            <Grid item xs={8} container spacing={3} direction="column">
                <Grid item>
                    <PostEditor addPost={addPost} />
                </Grid>
                {
                    posts.map((post) => {
                        return <Grid item key={post.id}>
                            <PostCard post={post}/>
                        </Grid>
                    })
                }
            </Grid>

        </Grid>
    )
}