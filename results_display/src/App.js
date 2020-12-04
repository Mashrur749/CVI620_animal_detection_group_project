import {useState} from 'react';
import { Route, Switch, Link, useHistory, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


import {Button} from '@material-ui/core';

import ImageGallery from './components/ImageGallery'
import SampleImageGallery from './components/SampleImageGallery'
import ConfusionMatrix from './components/ConfusionMatrix'

import './App.css';

import testSetOnePreds from './data/test-set-1-preds.json'
import testSetTwoPreds from './data/test-set-2-preds.json'

import imageData from "./seedData"


let sampelState = ["test-set-1", "test-set-2"];



function App() {
  
  const location = useLocation();

  let [currSet, setCurrSet] = useState(sampelState[0]);
  let [disableSampleBtn, setDisableSampleBtn] = useState(false);
  
  let history = useHistory();


  let enableBtn = () => {
    setDisableSampleBtn(false);
  }

  let disableBtn = () => {
    setDisableSampleBtn(true);
  }

  let handleClick = (testSet) => {
    setCurrSet(testSet)
    console.log(location.pathname)
    history.push(`/${testSet}/${location.pathname.split("/")[2]}`);
  }
  

  return (
    <div className="App">
      <nav>

        <div className="sampleButtons">
            <Button variant="contained" disabled={disableSampleBtn}>
              <Link disabled onClick={(e)=> {handleClick(sampelState[0])}}>Test Set One</Link>
            </Button>
            <Button variant="contained" disabled={disableSampleBtn}>
              <Link className="sampleButton" onClick={(e)=> {handleClick(sampelState[1])}}>Test Set Two</Link>
            </Button>

          </div>

        <Link onClick={enableBtn} to={`/${currSet}/alg-result`}>Algorithm Result</Link>
        <Link onClick={enableBtn} to={`/${currSet}/sample-image-set`}>Sample Image Set </Link>
        <Link onClick={disableBtn} to={`/confusion-matrix`}> Confusion Matrix </Link>
      </nav>  
      
      <Switch>
        <Redirect path="/" exact to={`/test-set-1/sample-image-set`}/>
        <Route path={`/test-set-1/sample-image-set`} render={() => <SampleImageGallery data={testSetOnePreds} dataset={currSet} title="Sample Image Set"/>} />
        <Route path={`/test-set-1/alg-result`} render={() => <ImageGallery data={testSetOnePreds} dataset={currSet} title="Algorithm Results"/>} />
        
        <Route path={`/test-set-2/sample-image-set`} render={() => <SampleImageGallery data={testSetTwoPreds} dataset={currSet} title="Sample Image Set"/>} />
        <Route path={`/test-set-2/alg-result`} render={() => <ImageGallery data={testSetTwoPreds} dataset={currSet} title="Algorithm Results"/>} />

        <Route path={`/confusion-matrix`} render={() => <ConfusionMatrix dataset={currSet} title="Confusion Matrix" disableBtn={disableBtn}/>} />        
        
      </Switch>
    </div>

  );
}

export default App;
