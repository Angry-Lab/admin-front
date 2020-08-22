import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "../../../styles/content";
import Orders from "../dashboard/charts/Orders";
import Graph from "../dashboard/charts/Graph";
import SegmentGraph11 from "../dashboard/charts/segmentGraph11";
import SegmentGraph12 from "../dashboard/charts/segmentGraph12";


function SegmentsContent(props) {
    const { classes } = props;

    return (
        <Paper className={classes.paper}>
            <div className={classes.contentWrapper}>
                <SegmentGraph12/>
                <SegmentGraph11/>
                <Orders/>
            </div>
        </Paper>
    );
}

SegmentsContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SegmentsContent);