import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import HowToVoteIcon from '@material-ui/icons/HowToVote';

const useStyles = makeStyles((theme) => ({
    ticlet: {
        display: 'grid',
        margin: '1.1rem 0.3rem 1.3rem',
    },
}));

const buttonList = {
    availableTicket: {
        color: "secondary",
        icon: <StarBorderIcon />,
        text: "投票チケットを獲得",
        click: "ticket",

    },
    notAvailableTicket: {
        color: "secondary",
        icon: <StarBorderIcon />,
        disable: true,
        text: "チケット獲得時間外",
    },
    alreadyTicket: {
        color: "secondary",
        icon: <StarIcon />,
        text: "チケット獲得済",
    },
    availableVote: {
        color: "primary",
        icon: <HowToVoteIcon />,
        text: "投票はこちら（残り1分）",
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
    const [button, setButton] = useState('availableTicket')

    const handleButton = (openVotePage) => {
        if (buttonList[button].click === "vote") return props.openVotePage(true)
        if (buttonList[button].click === "ticket") return props.openVotePage(true)
    }

    return(
        <div className={classes.ticlet}>
            <Button
                color={buttonList[button].color}
                endIcon={buttonList[button].icon}
                disabled={buttonList[button].disable}
                variant="contained"
                onClick={handleButton}
            >
                {buttonList[button].text}
            </Button>
        </div>
    )
}

export default Tickets;