import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {footerHref} from "../../constants/footerHref";
import Box from "@material-ui/core/Box";


export default function Footer() {
    return (
        <Box pt={4}>
            <Typography variant="body2" color="textSecondary" align="center" className="Typography">
                {'Copyright ©  '}
                <Link color="inherit" href={footerHref}>
                    Angry Lab
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}