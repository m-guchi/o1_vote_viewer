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
                <Typography>
                    <ol>
                        <li>投票チケットをゲット！
                            <br/>※「投票チケット」は漫才発表中にゲットできます
                        </li>
                        <li>投票チケットを２枚集めて予選の投票をしよう！</li>
                        <li>投票チケットを３枚集めて決勝の投票をしよう！</li>
                    </ol>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default HowToVote;