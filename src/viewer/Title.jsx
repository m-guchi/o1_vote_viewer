import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        margin: '1rem 0'
    },
    round: {
        border: '3px solid #ff850c',
        borderRadius: '1.1rem',
        color: '#ff850c',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '0.3rem',
        marginRight: '0.7rem',
        padding: '0.2rem 0.4rem',
    },
    entryName: {
        borderBottom: '2px solid #333',
        display: 'inline',
        fontWeight: '600',
        fontSize: '1.3rem',
        marginTop: '0.4rem',
    },
    entry: {
        fontSize: '1.4rem',
        fontWeight: '600',
    },
    entrySub: {
        fontSize: '0.9rem',
        marginRight: '0.4rem',
    },
    name: {
        fontSize: '1.3rem',
        fontWeight: '600',
        marginLeft: '0.8rem',
    },
}));

function Title () {
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.title}>
                <span className={classes.round}>予選</span>
                <div className={classes.entryName}>
                    <span className={classes.entry}><span className={classes.entrySub}>No.</span>8</span>
                    <span className={classes.name}>限界集落</span>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Title;