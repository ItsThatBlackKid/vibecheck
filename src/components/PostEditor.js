import {Paper, SvgIcon, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {IconButton} from "@material-ui/core/index";
import SendIcon from "@material-ui/icons/Send";
import {useState} from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";


export const PostEditor = ({addPost}) => {
    const [post, setPost] = useState({
        user: 'Sao Kanneh',
        body: "",
    })


    return (
        <Paper style={{display: "flex", flexDirection: "row"}}>
            <IconButton>
                <AccountCircleIcon/>
            </IconButton>

            <TextField value={post.body} style={{flexGrow: 1}}
                       onChange={(e) => {
                           setPost(prevState => ({
                               ...prevState,
                               body: e.target.value
                           }))
                       }}
                       variant="outlined"
            />

            <Button onClick={() => {
                addPost(post)
                post.body = ""
            }}>Post</Button>
        </Paper>
    )
}
