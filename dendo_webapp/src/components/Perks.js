import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

    wrapper:{
        height: '100vh',
        width: '100vw',
        paddingTop:'20%'
    }

}));




function Perks() {
    const classes = useStyles();


    return (
        <div className={classes.wrapper} id='perks'>
            <Typography>Perks</Typography>
        </div>
    )
}

export default Perks
