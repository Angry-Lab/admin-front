import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SegmentsContent from './segmentsContent';
import Header from '../Header';
import Footer from "../Footer";
import {theme, styles} from "../../../styles/pages";


function SegmentsPage(props) {
    const { classes } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <div className={classes.app}>
                    <Header onDrawerToggle={handleDrawerToggle} />

                    <footer className={classes.footer}>
                        <Footer />
                    </footer>
                </div>
            </div>
        </ThemeProvider>
    );
}

SegmentsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SegmentsPage);