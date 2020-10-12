import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0.3rem 0',
    },
}));

function HowToVote () {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5">
                    投票方法
                </Typography>
            </CardContent>
        </Card>
    )
}

export default HowToVote;