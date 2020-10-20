import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    final: {
        marginLeft: '0.8rem',
        fontWeight: 'bold',
    },
}));

function MemberIntroduction (props) {
    const classes = useStyles();
    return(
        <Grid item xs={12} md={6} key={props.id}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="subtitle1" color="textSecondary">
                        No.{props.no}
                        {props.final &&
                            <Typography
                                color='primary'
                                display='inline'
                                className={classes.final}
                            >
                                決勝進出！
                            </Typography>
                        }
                    </Typography>
                    <Typography variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="body">
                        {props.detail}
                    </Typography>
                </CardContent>
                {/* <CardMedia
                    className={classes.cover}
                    component='img'
                    // image={logo}
                    title="Live from space album cover"
                /> */}
            </Card>
        </Grid>
    )
}

export default MemberIntroduction;