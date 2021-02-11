import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Link from  '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { Link as LinkRouter } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'

const AppFrame = () => {
    return(
        <Grid container justify="center">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link component={LinkRouter} to="/main" color="inherit" aria-label="menu"> 
                            <IconContext.Provider value={{size: "2em"}}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography varian="h6" color="inherit" >
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container item xs={12} sm={11} md={10} lg={8}>
                My Application
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {}

export default AppFrame;