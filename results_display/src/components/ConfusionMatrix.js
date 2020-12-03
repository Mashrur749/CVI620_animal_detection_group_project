import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ConfusionMatrixTable from './ConfusionMatrixTable'

import Typography from '@material-ui/core/Typography'

import confusionMatrix from '../data/confusion-matrix.json'

console.log(confusionMatrix)


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
                <Typography align={"center"} variant="h2" className={classes.title}></Typography>
            </header>

            <Typography align={"center"} variant="h3" className={classes.sectionTitle}>Test Set - 1 Confusion Matrix</Typography>
            <ConfusionMatrixTable TP={confusionMatrix.testSetOne.TP} TN={confusionMatrix.testSetOne.TN} FP={confusionMatrix.testSetOne.FP} FN={confusionMatrix.testSetOne.FN} Precision={confusionMatrix.testSetOne.precision} Recall={confusionMatrix.testSetOne.recall} fMeasure={confusionMatrix.testSetOne.fMeasure}/>

            <Typography align={"center"} variant="h3" className={classes.sectionTitle}>Test Set - 2 Confusion Matrix</Typography>
            <ConfusionMatrixTable TP={confusionMatrix.testSetTwo.TP} TN={confusionMatrix.testSetTwo.TN} FP={confusionMatrix.testSetTwo.FP} FN={confusionMatrix.testSetTwo.FN} Precision={confusionMatrix.testSetTwo.precision} Recall={confusionMatrix.testSetTwo.recall} fMeasure={confusionMatrix.testSetTwo.fMeasure}/>
        </div>
    );
}