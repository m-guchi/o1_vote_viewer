import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import logo from '../image/o-1.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 140,
        marginTop: '0.6rem',
    },
    cover: {
        width: 140,
    },
}));

function PlanIntroduction (props) {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                component='img'
                image={logo}
                title="Live from space album cover"
            />
            <CardContent>
                <Typography variant="subtitle1" color="primary">
                    {props.running ? "企画中(～18:45)" : "準備中(11/22 16:45～)"}
                </Typography>
                <Typography variant="h5">
                    O-1 Grand Prix
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    実行委員企画
                </Typography>
                {/* <Typography variant="body">
                    大阪大学お笑いの祭典、今年も開催！
                </Typography> */}
            </CardContent>
        </Card>
    )
}

export default PlanIntroduction;