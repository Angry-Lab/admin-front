import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        minHeight: 450,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('По дальности пересылки', 159, 6.0, 24, 4.0),
    createData('По потраченным деньгам', 237, 9.0, 37, 4.3),
    createData('По чем и ком', 262, 16.0, 24, 6.0),
    createData('Торт', 305, 3.7, 67, 4.3),
    createData('По активности', 356, 16.0, 49, 3.9),
];

export default function Segments() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead style={{backgroundColor: '#ebeff1'}}>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Я</TableCell>
                        <TableCell align="right">За сутки&nbsp;(g)</TableCell>
                        <TableCell align="right">За деньги&nbsp;(g)</TableCell>
                        <TableCell align="right">За я&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}