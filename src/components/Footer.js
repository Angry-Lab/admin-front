import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export default function Footer() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'2020 ©  '}
            <Link color="inherit" href="https://material-ui.com/">
                Angry Lab
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}