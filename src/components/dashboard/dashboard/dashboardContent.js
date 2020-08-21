import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {styles} from "../../../styles/content";
import Segments from "../Segments";


function DashboardContent(props) {
    const { classes } = props;

    return (
        <Paper className={classes.paper}>
            <Segments/>
        </Paper>
    );
}

DashboardContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardContent);