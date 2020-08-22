import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Segment1 from "../fullSegment";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Graph from "./Graph";
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Orders from "../Orders";
import {Grid} from "@material-ui/core";



const useStyles = makeStyles({
    table: {
        minWidth: 650,
        minHeight: 450,
    },
});


function createData(id, name, calories, day, carbs, button) {
    return { id, name, calories, day, carbs, button };
}


const bb = <Graph/>;


const rows = [
    createData(0,'По дальности пересылки', 159, "+6.0", bb, 0 ),
    createData(1,'По потраченным деньгам', 237, "+9.0", bb, 0),
    createData(2,'По чем и ком место', 262, "+16.0", bb, 0),
    createData(3,'Торт займи место', 305, "+3.7", bb, 0),
    createData(4,'По активности место', 356, "+16.0", bb, 0),
];

export default function Segments() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead style={{backgroundColor: '#ebeff1'}}>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="center">Нитка</TableCell>
                        <TableCell align="center">Вхождений/сутки</TableCell>
                        <TableCell align="center">Прибыль</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} hover>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="center" style={{color: '#007600'}}>{row.day}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center">
                                <Button outline
                                        variant="contained"
                                        color="primary"
                                        onClick={handleClickOpen}
                                        contentID={row.id}
                                >
                                    <FolderOpenIcon/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>



            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" fullWidth={true} maxWidth={"md"} open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <b1>По дальности пересылки</b1>
                </DialogTitle>
                <DialogContent dividers style={{minHeight: 550, minWidth: 500}}>
                    <Typography gutterBottom>
                        Пользователи этого сегмента предпочитают заплатить меньше, но ждать свое отправление дольше.
                        Мы могли бы предложить им более выгодный тариф или иное мотивирующее предложение.
                    </Typography>
                    <Typography gutterBottom>
                        Данные пользователи характеризуются расстоянием и стоимостью отправления:
                    </Typography>
                    <Orders/>
                    <Typography gutterBottom>
                        Текущая прибыльность сегмента:
                    </Typography>
                    <Graph/>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
            </>
    );
}