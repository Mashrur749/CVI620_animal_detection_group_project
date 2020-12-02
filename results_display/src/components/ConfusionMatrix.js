import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles({
    title: {
        padding: ".2em"
    },
    tableContainer: {
        minWidth: 650,
        width: "60vw",
        margin:"4em auto",
        
    },
    tableCell: {
        paddingRight: "50px"
    }
});


export default function BasicTable(props) {
    const classes = useStyles();

    return (
        <div >
            <header>
                <Typography align={"center"} variant="h2" className={classes.title}> {props.title} </Typography>
            </header>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Pred/GroundTruth</TableCell>
                        <TableCell className={classes.tableCell} align="right">Positive</TableCell>
                        <TableCell className={classes.tableCell} align="right">Negative</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Positive
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">TP</TableCell>
                        <TableCell className={classes.tableCell} align="right">FP</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell component="th" scope="row">
                        Negative
                    </TableCell>
                    <TableCell className={classes.tableCell} align="right">FN</TableCell>
                    <TableCell className={classes.tableCell} align="right">TN</TableCell>
                </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}