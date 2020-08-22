import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import {styles} from "../../../styles/content";
import Segments from "./Segments";


function DashboardContent(props) {
    const { classes } = props;

    return (
//<>
        //<div style={{flexWrap: 'wrap', display: 'flex', align: 'center'}}>
            //<Paper style={{marginBottom: 15}}>{<MainChart1/>}</Paper>
            //<Paper style={{marginBottom: 15, marginLeft: 15}}> {<MainChart1/>}</Paper>
            //<Paper style={{marginBottom: 15, marginLeft: 15}}> {<MainChart1/>}</Paper>
        //</div>
            <Paper className={classes.paper}>
                <Segments/>
            </Paper>

//</>
    );
}

DashboardContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardContent);