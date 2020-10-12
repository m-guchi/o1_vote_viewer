import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Divider, Grid, Typography } from '@material-ui/core';
import VoteIntroduction from './VoteIntroduction';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem auto 7rem',
        maxWidth: '900px',
        width: '90vw',
    },
    listBox: {
        margin: '0.5rem auto',
        maxWidth: '900px',
        width: '90vw',
    },
    submitFixed: {
        position: 'fixed',
        width: '100%',
        bottom: 0,
        backgroundColor: '#72d665',
        zIndex: '9999',
    },
    submitBox: {
        margin: '0 2.5vw',
    },
    submitContent: {
        margin: '0.8rem auto 1.3rem',
        maxWidth: '900px',
        width: '90%',
    },
    submitBottun: {
        float: 'right',
        marginBottom: '0.8rem',
    },
    bottomBack: {
        color: '#a0a0a0',
        borderColor: '#a0a0a0',
        backgroundColor: 'rgba(0,0,0,0.1)',
    }
}));

function Vote (props) {
    const classes = useStyles();
    const [voteItem, setVoteItem] = React.useState(null)

    const handleVoteItem = (event) => {
        setVoteItem(event)
    }

    const voteItemData = Object.values(props.group).filter(function(item, index) {
        if (item.id == voteItem) return true
    })

    return(
        <React.Fragment>
            <div
                className={classes.root}
            >
                <Card>
                    <Typography
                        align='center'
                        color="primary"
                        variant='h6'
                    >
                        O-1 Grand Prix 投票ページ
                    </Typography>
                    <Typography
                        align='center'
                        color="textprimary"
                        variant='body2'
                    >
                        1番面白かったと思う組を選択してください！！
                    </Typography>
                    <Divider variant='middle' />
                    <Typography
                        align='center'
                    >
                        <Button
                            color='default'
                            endIcon={<CloseIcon/>}
                            onClick={() => props.closeVotePage(false)}
                        >
                            投票ページを閉じる
                        </Button>
                        
                    </Typography>
                </Card>
                <Grid container className={classes.listBox} spacing={1}>
                    {Object.values(props.group).map((val) => (
                        <VoteIntroduction
                            class={false}
                            data={val}
                            checked={val.id===voteItem}
                            onVoteItem={handleVoteItem}
                        />
                    ))}
                </Grid>
                <Typography align='center'>
                    <Button
                        className={classes.bottomBack}
                        endIcon={<CloseIcon />}
                        variant="outlined"
                        onClick={() => props.closeVotePage(false)}
                    >
                        投票ページを閉じる
                        </Button>
                </Typography>
            </div>
            {
                voteItem !== null &&
                <div className={classes.submitFixed}>
                    <div className={classes.submitBox}>
                        <div className={classes.submitContent}>
                            <Typography
                                variant="subtitle"
                            >
                                No.{voteItemData[0].no}
                            </Typography>　
                            <Typography
                                variant="h5"
                                display='inline'
                            >
                                {voteItemData[0].name}
                            </Typography>
                            <div className={classes.submitBottun}>
                                <Button
                                    color='primary'
                                    variant="contained"
                                >
                                    投票
                                </Button>
                            </div>
                            <Typography
                                variant="body2"
                            // display='inline'
                            >
                                ※投票内容は変更できません。
                            </Typography>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Vote;