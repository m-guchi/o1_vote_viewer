import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core'

import Header from './Header'
import Video from './Video'
import Title from './Title'
import PlanIntroduction from './PlanIntroduction'
import MainTab from './MainTab'
import Vote from './Vote'
import Tickets from './Tickets';



const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem auto 4rem',
        width: '90vw',
        maxWidth: '900px',
    },
    wrapper: {
        width: '100vw',
        height: '100%',
        position: 'fixed',
        overflowY: 'Scroll',
        top: 0,
        zIndex: 99,
        backgroundColor: 'rgba(0,0,0,0.6)'
    }
}));

const group = {
    0: {
        id: 0,
        no: 1,
        name: "神企画",
        detail: "aaaa",
    },
    1: {
        id: 1,
        no: 2,
        name: "フラミンゴ",
        detail: "bbbb",
    },
    2: {
        id: 2,
        no: 3,
        name: "わびのカルパス",
        detail: "cccc",
    },
    3: {
        id: 3,
        no: 4,
        name: "WADA",
        detail: "dddd",
        final: true,
    },
    4: {
        id: 4,
        no: 5,
        name: "リサイクルズ",
        detail: "eeee",
        final: true,

    },
    5: {
        id: 5,
        no: 6,
        name: "限界集落",
        detail: "ffff",
        final: true,

    },
    // 6: {
    //     id: 6,
    //     no: 7,
    //     name: "和牛",
    //     detail: "昨年度優勝者！！",
    // },
}

function Main() {
    const classes = useStyles();
    const [votePage, setVotePage] = React.useState(false)

    const handleVotePage = (bool) => {
        setVotePage(bool)
    }

    return(
        <React.Fragment>
            {votePage &&
                <div className={classes.wrapper}>
                    <Vote closeVotePage={handleVotePage} group={group}/>
                </div>
            }
            <div className={classes.root}>
                <Header />
                <Video />
                <Title />
                <Tickets openVotePage={handleVotePage} />
                <PlanIntroduction running={true} />
                <MainTab group={group}/>
            </div>
        </React.Fragment>
    )
}

export default Main;
