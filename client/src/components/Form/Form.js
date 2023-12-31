

import React, { useState } from 'react';
import { STATES } from 'mongoose';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';


const Form = () => {

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags:'',
        selectedFile:'',
    })

    const classes = useStyles();

    const handleSubmit = () => {}

    const clear = () => {}

    return(
        <Paper className={clasess.paper}>
            <form autoComplete="off" nonValidate /*className= {`$classes.root $classes.form`} onSubmit={handleSubmit} */  >  
                <Typography variant="6"> Creating a Memorie </Typography>
                <TextField name='creator' variant = "outlined" label='Creator' fullWidth value={PostAddTwoTone.creator}onChange={(e)=> setPostData({...postData, creator: e.target.value})} />
                <TextField name='title' variant = "outlined" label='Title' fullWidth value={PostAddTwoTone.title}onChange={(e)=> setPostData({...postData, title: e.target.value})} />
                <TextField name='message' variant = "outlined" label='Massage' fullWidth value={PostAddTwoTone.message}onChange={(e)=> setPostData({...postData, message: e.target.value})} />
                <TextField name='tags' variant = "outlined" label='Tags' fullWidth value={PostAddTwoTone.tags}onChange={(e)=> setPostData({...postData, tags: e.target.value})} />
                <div /*className={classes.fileInput} */ >
                    <FileBase type='file' multiple = {false} onDone = {({base64}) => setPostData ({...postData, selectedFile: base64})} />
                </div>
                <Button /*className={classes.ButtonSubmit} */ variant = "container" color = "primary" size = "large" type= "submit" fullWidth >Submit</Button>
                <Button variant = "contained" color = "secondary" size = "small" onClick = {clear} fullWidth >Clear </Button>
            </form>
        </Paper>
    );
}


export default Form;