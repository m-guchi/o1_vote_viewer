import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

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

function Main(props) {
    const classes = useStyles();
    const [votePage, setVotePage] = React.useState(false)
    const [group, setGroup] = React.useState([])
    const [loaded, setLoaded] = React.useState(false)

    const handleVotePage = (bool) => {
        setVotePage(bool)
    }

    useEffect(() => {
        fetchGroupData()
    }, []);

    const fetchGroupData = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + 'get_group_data.php')
            const data = response.data.data
            setGroup(data)
            setLoaded(true)
        } catch (error) {
            console.error(error)
        }
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
                {
                    (Boolean(props.setting.running) && loaded) &&
                    [
                        <Video />,
                        <Title setting={props.setting} group={group}/>,
                        <Tickets setting={props.setting} openVotePage={handleVotePage} />
                    ]
                }
                <PlanIntroduction running={Boolean(props.setting.running)} />
                <MainTab group={group}/>
            </div>
        </React.Fragment>
    )
}

export default Main;
