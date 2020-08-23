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
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Graph from "./charts/Graph";
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import {segmentContent1, segmentContent2, segmentContent3, segmentContent4} from "./segmentContent";
import Graph2 from "./charts/Graph2";



const useStyles = makeStyles({
    table: {
        minWidth: 650,
        minHeight: 450,
    },
});


function createData(id, name, calories, day, carbs, button) {
    return { id, name, calories, day, carbs, button };
}


//todo: здесь сидит такой угарный костыль вы упадете это короче мой первый калькулятор эдишн
export default function Segments() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [contentId, setContentId] = React.useState(1);
    const [segmentContent, setSegmentContent] = React.useState(segmentContent1);
    const [segmentName, setSegmentName] = React.useState("segmentContent1");


    const handleClickOpen = (e) => {
        setOpen(true);
        setContentId(id);
        console.log(contentId)

        if (contentId === 1) {
            setSegmentContent(segmentContent1)
        } else if (contentId === 2) {
            setSegmentContent(segmentContent2)
        }else if (contentId === 3) {
            setSegmentContent(segmentContent3)
        }else if (contentId === 4) {
            setSegmentContent(segmentContent4)
        }

        if (contentId === 1) {
            setSegmentName("Юр. лица")
        } else if (contentId === 2) {
            setSegmentName("Премиум пользователи")
        }else if (contentId === 3) {
            setSegmentName("Активные")
        }else if (contentId === 4) {
            setSegmentName("Неактивные")
        }
    };


    const handleClose = () => {
        setOpen(false);
    };


    const rows = [
        createData(1,'Юр. лица', 134501, "+65", 65183829, 0 ),
        createData(2,'Премиум пользователи', 129910, "+177", 93743290, 0),
        createData(3,'Активные', 263720, "+96", 88364724, 0),
        createData(4,'Неактивные', 421515, "+33", 130782578, 0),


    ];


    return (
        <>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead style={{backgroundColor: '#ebeff1'}}>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="center">Всего</TableCell>
                        <TableCell align="center">Вхождений/сутки</TableCell>
                        <TableCell align="center">Выручка</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} hover>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="center" style={{color: '#007600'}}>{row.day}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center"><Button outline
                                                              variant="contained"
                                                              color="primary"
                                                              onClick={(e) => (handleClickOpen(e))}
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
                    <b1>{segmentName}</b1>
                </DialogTitle>
                <DialogContent dividers style={{minHeight: 550, minWidth: 500}}>
                    {segmentContent}
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