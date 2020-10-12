import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MemberIntroduction from './MemberIntroduction';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0.3rem 0',
    },
}));

function MemberList(props) {
    const classes = useStyles();
    return(
        <Grid container className={classes.root} spacing={1}>
            {
                Object.values(props.group).map((val) => (
                    <MemberIntroduction
                        no={val.no}
                        name={val.name}
                        detail={val.detail}
                        final={val.final}
                    />
                ))
            }
        </Grid>
)
}

export default MemberList;