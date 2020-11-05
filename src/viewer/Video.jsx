import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        position: 'relative',
        height: 0,
        paddingTop: '56.25%',
        width: '100%',
    },
    iframe: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }
}));

function Video (props) {
    const classes = useStyles();
    const link = "https://www.youtube.com/embed/"+props.youtube
    return(
        <div className={classes.box}>
            <iframe className={classes.iframe} title="live" width="640" height="360" src={link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Video;