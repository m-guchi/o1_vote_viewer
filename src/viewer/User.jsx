import React, { useState,useEffect } from 'react'
import { useCookies } from 'react-cookie';
import axios from 'axios';

import Main from './Main';


function User () {

    const [cookies, setCookie] = useCookies(['user'])
    const [setting, setSetting] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [ticketNum, setTicketNum] = useState(0)

    useEffect(() => {
        if (!cookies.user_id || cookies.user_id===undefined) fetchUserId()
        checkTicketAlready()
        loopFetchState(10000)
    }, []);

    function sleep(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }

    const loopFetchState = async (delay) => {
        let breakFg = false
        while(true){
            await axios.get(process.env.REACT_APP_API_URL + 'get_status.php')
            // eslint-disable-next-line no-loop-func
            .then(function (response){
                setSetting(response.data.setting)
                setLoaded(true)
                breakFg = !Boolean(response.data.setting.running)
            })
            .catch(function(error){
                console.error(error)
            })
            if (breakFg) {
                return Promise.resolve(1);
            }
            await sleep(delay);
        }
    }

    const fetchUserId = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + 'get_user_id.php')
            const data = response.data.id
            setCookie('user_id', data, { path: '/' })
        } catch (error) {
            console.error(error)
        }
    }

    const checkTicketAlready = () => {
        axios.post(process.env.REACT_APP_API_URL + 'get_ticket.php', {
            user_id: cookies.user_id,
        })
            .then(function (response) {
                if (response.data.ok) {
                    setTicketNum(response.data.count)
                }
            })
            .catch(function (error) {
                console.error(error)
            })
    }

    return(
        <React.Fragment>
            { loaded && <Main setting={setting} ticketNum={ticketNum} /> }
        </React.Fragment>
    )
}

export default User;