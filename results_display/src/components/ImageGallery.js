import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1em"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  galleryTitle: {
      marginBottom: "1em"
  },
  image: {
      width: "300px"
  }
}));

export default function FullWidthGrid(props) {
    
    const imageData = props.data;

    const classes = useStyles();

  let imageTiles = imageData.map((tile, idx) => {
    return (<Grid key={idx} item xs={6} sm={3}>
        <Paper className={classes.paper}>
            <img className={classes.image} src={"/images/"+tile.filename}/>
            <Typography align={"left"}> Frame: {tile.frame} </Typography> 
            <Typography align={"left"}> Model Certainty: {tile.model_certainty} </Typography>
        </Paper>
    </Grid>)
  })

  return (
    <div className={classes.root}>
        <header>
            <Typography align={"center"} variant="h2" className={classes.galleryTitle}> Image Analysis Report </Typography>
        </header>

        <Grid container spacing={5}>
            {imageTiles}
        </Grid>

    </div>
  );
}
