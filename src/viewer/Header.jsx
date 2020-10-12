import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        color: '#553216',
        height: '2em',
        textAlign: 'center'
    },
    headerMain: {
        fontSize: '1.2em',
        fontWeight: '600',
    },
    headerSub: {
        fontSize: '0.9em',
        paddingRight: '0.7em',
        verticalAlign: 'text-bottom',
    }
}));

function Header () {
    const classes = useStyles();
    return(
        <div className={classes.header}>
            <span className={classes.headerSub}>大阪大学まちかね祭</span>
            <span className={classes.headerMain}>O-1 Grand Prix</span>
        </div>
    )
}

export default Header;