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
                                <Typography align={"center"} variant="h6" className={classes.sectionTitle}> {props.tableName} </Typography>
                            </TableCell>
                            <TableCell></TableCell>
                                
                        </TableRow>
                            
                        <TableRow>
                            <TableCell>Pred/GroundTruth</TableCell>
                            <TableCell className={classes.tableCell} align="right">Animal</TableCell>
                            <TableCell className={classes.tableCell} align="right">No Animal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Animal
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">{props.TP}</TableCell>
                            <TableCell className={classes.tableCell} align="right">{props.FP}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                No Animal
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
                        <TableCell className={classes.tableCell} align="right"> Calculation </TableCell>
                        <TableCell className={classes.tableCell} align="right">Result</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Precision
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">{props.TP} / ({props.TP} + {props.FP})</TableCell>
                        <TableCell className={classes.tableCell} align="right">{props.Precision}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Recall
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">{props.TP} / ({props.TP} + {props.FN})</TableCell>
                        <TableCell className={classes.tableCell} align="right">{props.Recall}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            F-measure
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

