import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';


function TicketsCount (props) {
    return(
        <Typography align="center">
            {
                [0,1,2].map((val) => (
                    <React.Fragment key={val}>
                        {val < props.count ? <ConfirmationNumberIcon /> : <ConfirmationNumberOutlinedIcon />}
                    </React.Fragment>
                ))
            }
        </Typography>
    )
}

export default TicketsCount;