import React, { Component } from 'react';

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
        width: "40vw",
        float: "left",
        margin: "0 50px"
        
    },
    tableCell: {
        paddingRight: "50px"
    }
});


    

export default function ConfusionMatrixTable(props) {
    const classes = useStyles();
    return (
        
        <div>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        
                            <TableCell></TableCell>
                            <TableCell>
                                <Typography align={"center"} variant="h6" className={classes.sectionTitle}> <b>{props.tableName}</b> </Typography>
                            </TableCell>
                            <TableCell></TableCell>
                                
                        </TableRow>
                            
                        <TableRow>
                            <TableCell><b>Pred/GroundTruth</b></TableCell>
                            <TableCell className={classes.tableCell} align="right"><b>Animal</b></TableCell>
                            <TableCell className={classes.tableCell} align="right"><b>No Animal</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Animal</b>
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">{props.TP}</TableCell>
                            <TableCell className={classes.tableCell} align="right">{props.FP}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>No Animal</b>
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">{props.FN}</TableCell>
                            <TableCell className={classes.tableCell} align="right">{props.TN}</TableCell>
                        </TableRow>
                        <TableRow>
                    </TableRow>

                    </TableBody>
                </Table>


                <Table  aria-label="simple table">
                <TableHead>
                </TableHead>
                <TableBody>
                    <TableRow>
                        
                        <TableCell className={classes.tableCell} align="right"></TableCell>
                        <TableCell className={classes.tableCell} align="right"> <b>Calculation</b> </TableCell>
                        <TableCell className={classes.tableCell} align="right"><b>Result</b></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <b>Precision</b>
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">{props.TP} / ({props.TP} + {props.FP})</TableCell>
                        <TableCell className={classes.tableCell} align="right">{props.Precision}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <b>Recall</b>
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">{props.TP} / ({props.TP} + {props.FN})</TableCell>
                        <TableCell className={classes.tableCell} align="right">{props.Recall}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <b>F-measure</b>
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right"> 2 * (({props.Precision} * {props.Recall}) / ({props.Precision} + {props.Recall})) </TableCell>
                        <TableCell className={classes.tableCell} align="right">{props.fMeasure}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>

            </TableContainer>

        </div>
        

    );
}

