import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "../../../styles/content";
import Orders from "../Orders";


function SegmentsContent(props) {
    const { classes } = props;

    return (
        <Paper className={classes.paper}>
            <div className={classes.contentWrapper}>
                <Orders/>
            </div>
        </Paper>
    );
}

SegmentsContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SegmentsContent);