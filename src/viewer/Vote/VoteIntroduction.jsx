import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActionArea, Grid, Typography } from '@material-ui/core';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import HowToVoteIcon from '@material-ui/icons/HowToVote';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';



const useStyles = makeStyles((theme) => ({
    grid: {
        zIndex: '999',
    },
    select: {
        border: '2px solid #FF850C'
    },
    icon: {
        verticalAlign: 'text-bottom',
    },
}));

function VoteIntroduction(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} className={classes.grid}>
            <Card
                className={props.class && classes.select}
                onClick={() => props.onVoteItem(props.data.id)}
            >
                <CardActionArea>
                    <CardContent>
                        <div>
                            {props.checked ?
                                <CheckCircleOutlineIcon className={classes.icon} color="primary" fontSize="small" /> :
                                <RadioButtonUncheckedIcon className={classes.icon} color="disabled" fontSize="small" />
                            }
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                                display='inline'
                            >
                                No.{props.data.no}
                            </Typography>
                        </div>
                        <Typography variant="h5">
                            {props.data.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

    )
}

export default VoteIntroduction;