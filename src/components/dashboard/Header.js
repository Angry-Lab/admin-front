import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import {styles} from "../../styles/header";
import SegmentsContent from './segments/segmentsContent';
import DashboardContent from "./dashboard/dashboardContent";
import logo from '../../images/logo.png';
import Orders from "./dashboard/charts/Orders";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Header(props) {
    const { classes, onDrawerToggle } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar style={{marginTop: -30}}/>
            </AppBar>
            <AppBar
                component="div"
                className={classes.secondaryBar}
                color="primary"
                position="static"
                elevation={0}
            >
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            <img src={logo} style={{maxBlockSize:55, marginBottom:-15}}/>
                        </Grid>

                        <Grid item style={{marginBottom:-5}}>
                            <Button variant="contained" color="green">
                                Выйти
                            </Button>
                        </Grid>
                        <Grid item style={{marginBottom:-5}}>
                            <IconButton color="inherit" className={classes.iconButtonAvatar} style={{minWidth: 50, minHeight: 50}}>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAZyFdywMPXJlTpPImDs4x5RkRvjCqAk6tsA&usqp=CAU" alt="My Avatar" style={{minWidth: 50, minHeight: 50}}/>
                            </IconButton>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar
                component="div"
                className={classes.secondaryBar}
                color="primary"
                position="static"
                elevation={0}
            >
                <Tabs value={value} onChange={handleChange} textColor="inherit">
                    <Tab textColor="inherit" label="Обзор" {...a11yProps(0)} />
                    <Tab textColor="inherit" label="Аналитика" {...a11yProps(1)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <DashboardContent/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SegmentsContent/>
            </TabPanel>
        </React.Fragment>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);