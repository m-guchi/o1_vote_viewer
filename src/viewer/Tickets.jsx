import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Typography } from '@material-ui/core';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import { useCookies } from 'react-cookie';

// import StarIcon from '@material-ui/icons/Star';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import TicketsCount from './TicketsCount';
import axios from 'axios';


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
        disable: true,
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
        disable: true,
        text: "投票ありがとうございます",
    },
}


function Tickets (props) {
    const classes = useStyles();
    const [cookies] = useCookies(['user'])
    const [buttonLoaded, setButtonLoaded] = useState(false)

    const [ticketNum, setTicketNum] = useState(props.ticketNum)
    // const [ticketNum, setTicketNum] = useState(3)

    const needTicket = {
        1: 2,
        2: 3,
    }

    console.log(ticketNum, )
    const buttonInitialStatus = () => {
        if (Boolean(props.setting.vote) ){
            if (Boolean(props.setting.vote_accept) ){
                if (ticketNum >= needTicket[props.setting.round]){
                    return 'availableVote'
                }else{
                    return 'unableVote'
                }
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
    // const [button, setButton] = useState('availableVote')

    const handleGetTicket = () => {
        axios.post(process.env.REACT_APP_API_URL + 'post_ticket.php',{
            user_id: cookies.user_id,
        })
        .then(function (response) {
            if (response.data.ok){
                setButton('alreadyTicket')
                setTicketNum(response.data.count)
            }else{
                console.error(response.data.error)
                if (response.data.error==='already_vote'){
                    setButton('alreadyTicket')
                    setTicketNum(response.data.count)
                }
            }
        })
        .catch(function (error) {
            console.error(error)
        })
    }

    const setting = props.setting


    const checkTicketAlready = () => {
        axios.post(process.env.REACT_APP_API_URL + 'get_ticket.php', {
            user_id: cookies.user_id,
        })
        .then(function (response) {
            if (response.data.ok && response.data.already && !setting.vote) {
                setButton('alreadyTicket')
            }
            if (setting.vote) setButtonLoaded(true)

        })
        .catch(function (error) {
            console.error(error)
        })
    }

    const checkVoteAlready = () => {
        axios.post(process.env.REACT_APP_API_URL + 'get_vote.php', {
            user_id: cookies.user_id,
        })
        .then(function (response) {
            console.log(response.data)
            console.log(setting.vote)
            if (response.data.ok && response.data.already && setting.vote) {
                setButton('alreadyVote')
            }
            if (!setting.vote) setButtonLoaded(true)
        })
        .catch(function (error) {
            console.error(error)
        })
    }
    
    useEffect(() => {
        // console.log(props.setting)
        checkTicketAlready()
        checkVoteAlready()
        setButton(buttonInitialStatus)
    }, [setting.running, setting.round, setting.vote, setting.vote_accept, setting.ticket_accept, setting.group_id, props.vote])

    const handleButton = (openVotePage) => {
        if (buttonList[button].click === "vote") return props.openVotePage(true)
        if (buttonList[button].click === "ticket") return handleGetTicket()
    }

    return(
        <div className={classes.ticlet}>
            {buttonLoaded
                ?
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
                :
                <Button
                    disabled
                    size='large'
                    variant="contained"
                    onClick={handleButton}
                >　</Button> 
            }
            
            <Card className={classes.ticletsBox}>
                <Typography align="center" variant="body2">
                    枚数:{ticketNum}枚 (予選投票は2枚、決勝投票は3枚必要)
                </Typography>
                <TicketsCount count={ticketNum}/>
            </Card>
        </div>
    )
}

export default Tickets;