import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Typography } from '@material-ui/core';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
// import StarIcon from '@material-ui/icons/Star';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import TicketsCount from './TicketsCount';

const useStyles = makeStyles((theme) => ({
    ticlet: {
        display: 'grid',
        margin: '1.1rem 0.3rem 1.3rem',
    },
    ticletsBox: {
        paddingTop: '0.4rem',
    },
}));

const buttonList = {
    availableTicket: {
        color: "secondary",
        icon: <ConfirmationNumberOutlinedIcon />,
        text: "投票チケットを獲得",
        click: "ticket",

    },
    notAvailableTicket: {
        color: "secondary",
        icon: <ConfirmationNumberOutlinedIcon />,
        disable: true,
        text: "チケット獲得時間外",
    },
    alreadyTicket: {
        color: "secondary",
        icon: <ConfirmationNumberIcon />,
        text: "チケット獲得済",
    },
    availableVote: {
        color: "primary",
        icon: <HowToVoteIcon />,
        text: "投票はこちら",
        click: "vote",
    },
    unableVote: {
        color: "primary",
        icon: <HowToVoteIcon />,
        disable: true,
        text: "投票できません",
    },
    notAvailableVote: {
        color: "primary",
        icon: <HowToVoteIcon />,
        disable: true,
        text: "投票期間外です",
    },
    alreadyVote: {
        color: "primary",
        icon: <HowToVoteIcon />,
        text: "投票ありがとうございます",
    },
}


function Tickets (props) {
    const classes = useStyles();
    const buttonInitialStatus = () => {
        if (Boolean(props.setting.vote) ){
            if (Boolean(props.setting.vote_accept) ){
                return 'availableVote'
            }else{
                return 'notAvailableVote'
            }
        }else{
            if (Boolean(props.setting.ticket_accept)) {
                return 'availableTicket'
            } else {
                return 'notAvailableTicket'
            }
        }
    }
    const [button, setButton] = useState(buttonInitialStatus)

    const handleGetTicket = () => {
        setButton('alreadyTicket')
    }

    const handleButton = (openVotePage) => {
        if (buttonList[button].click === "vote") return props.openVotePage(true)
        if (buttonList[button].click === "ticket") return handleGetTicket()
    }

    return(
        <div className={classes.ticlet}>
            <Button
                color={buttonList[button].color}
                endIcon={buttonList[button].icon}
                disabled={buttonList[button].disable}
                size='large'
                variant="contained"
                onClick={handleButton}
            >
                {buttonList[button].text}
            </Button>
            <Card className={classes.ticletsBox}>
                <Typography align="center" variant="body2">
                    枚数:１枚 (予選投票は２枚、決勝投票は３枚)
                </Typography>
                <TicketsCount count={1}/>
            </Card>
        </div>
    )
}

export default Tickets;