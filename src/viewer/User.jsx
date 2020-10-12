import React, { useState,useEffect } from 'react'
import { useCookies } from 'react-cookie';
import axios from 'axios';

import Main from './Main';


function User () {

    const [cookies, setCookie] = useCookies(['user'])
    const [setting, setSetting] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetchStatus()
        if (!cookies.user_id) fetchUserId()
    }, []);

    const fetchStatus = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + 'get_status.php')
            setSetting(response.data.setting)
            setLoaded(true)
        } catch (error) {
            console.error(error)
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

    return(
        <React.Fragment>
            { loaded && <Main setting={setting} /> }
        </React.Fragment>
    )
}

export default User;