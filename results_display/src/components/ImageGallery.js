import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1em 0",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  galleryTitle: {
    padding: ".2em"
  },
  sectionTitle:{
    background: "rgba(0,0,0,1)",
    margin: ".5em 0",
    padding: ".5em",
    color: "white"
  },
  image: {
      width: "300px",

  }
}));

export default function FullWidthGrid(props) {
    
    const imageData = props.data;
    const title = props.title;
    console.log(props)

    const classes = useStyles();

  let imageTilesWithAnimal = [];
  let imageTilesWithoutAnimal = [];  
  
  console.log(props);

  props.data.forEach((e, idx) => {

    let comp = 
      (<Grid key={idx} item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img className={classes.image} src={`/images/${props.dataset}-preds/`+e.filename} alt={e.filename}/>
        </Paper>
      </Grid>);


    if(e.hasAnimal === 1){
      imageTilesWithAnimal.push(comp)
    } else{
      imageTilesWithoutAnimal.push(comp)
    }
  })





  return (
    <div className={classes.root}>
        <header>
            <Typography align={"center"} variant="h2" className={classes.galleryTitle}> {title} </Typography>
        </header>

        <Typography align={"center"} variant="h3" className={classes.sectionTitle}>Images With Animal</Typography>
        <Grid container spacing={0}>
            {imageTilesWithAnimal}
        </Grid>

        <Typography align={"center"} variant="h3" className={classes.sectionTitle}>Images Without Animal</Typography>
        <Grid container spacing={0}>
            {imageTilesWithoutAnimal}
        </Grid>
    </div>
  );
}
