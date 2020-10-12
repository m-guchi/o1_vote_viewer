import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Tabs, Tab} from '@material-ui/core'
import MemberList from './MemberList';
import HowToVote from './HowToVote';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1.6rem',
        flexGrow: 1,
    },
}));

function MainTab (props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('how');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <React.Fragment>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab value="how" label="投票方法" />
                    <Tab value="list" label="出場者一覧" />
                </Tabs>
            </Paper>
            {value === 'list' ? <MemberList group={props.group}/> : <HowToVote />}
        </React.Fragment>
    )
}

export default MainTab;