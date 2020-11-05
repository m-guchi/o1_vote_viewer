import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        margin: '1rem 0'
    },
    round: {
        border: '3px solid #ff850c',
        borderRadius: '1.1rem',
        color: '#ff850c',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '0.3rem',
        marginRight: '0.7rem',
        padding: '0.2rem 0.4rem',
    },
    entryName: {
        borderBottom: '2px solid #333',
        display: 'inline',
        fontWeight: '600',
        fontSize: '1.3rem',
        marginTop: '0.4rem',
    },
    entry: {
        fontSize: '1.4rem',
        fontWeight: '600',
    },
    entrySub: {
        fontSize: '0.9rem',
        marginRight: '0.4rem',
    },
    name: {
        fontSize: '1.3rem',
        fontWeight: '600',
        marginLeft: '0.8rem',
    },
}));

const round = {
    first: '予選',
    final: '決勝',
}

function Title (props) {
    const classes = useStyles();

    const groupData = Object.values(props.group).filter(function (item, index) {
        if (item.id == props.setting.group_id) return true
    })

    return(
        <React.Fragment>
            <div className={classes.title}>
                <span className={classes.round}>{round[props.setting.round]}</span>
                <div className={classes.entryName}>
                    {Boolean(props.setting.vote) ?
                        Boolean(props.setting.vote_accept)?"投票受付中！":"投票集計中"
                        :
                        groupData.length>0 &&
                        [
                            <span className={classes.entry}><span className={classes.entrySub}>No.</span>{groupData[0].no}</span>,
                            <span className={classes.name}>{groupData[0].name}</span>
                        ]
                    }
                </div>
            </div>

        </React.Fragment>
    )
}

export default Title;