import {useState} from 'react';
import { Route, Switch, Link, useHistory, Redirect } from 'react-router-dom';

import ImageGallery from './components/ImageGallery'
import SampleImageGallery from './components/SampleImageGallery'
import ConfusionMatrix from './components/ConfusionMatrix'

import './App.css';
import imageData from './seedData.js';

let sampelState = ["test-set-one", "test-set-two"];



function App() {
  
  let [currSet, setCurrSet] = useState(sampelState[0]);
  
  let history = useHistory();


  let handleClick = (testSet) => {
    setCurrSet(testSet)
    history.push(`/${testSet}/sample-image-set`);
    
  }
  

  return (
    <div className="App">
      <nav>

        <div className="sampleButtons">
          <Link onClick={(e)=> {handleClick(sampelState[0])}}>Smaple One</Link>
          <Link className="sampleButton" onClick={(e)=> {handleClick(sampelState[1])}}>Smaple Two</Link>
        </div>

        <Link to={`/${currSet}/alg-result`}>Algorithm Result</Link>
        <Link to={`/${currSet}/sample-image-set`}>Sample Image Set </Link>
        <Link to={`/${currSet}/ground-truth`}>Ground Truth</Link>
        <Link to={`/${currSet}/confusion-matrix`}> Confusion Matrix </Link>
        
      </nav>  
      
      <Switch>
        <Redirect path="/" exact to={`/${currSet}/sample-image-set`}/>       
        <Route path={`/${currSet}/sample-image-set`} render={() => <SampleImageGallery data={imageData} dataset={currSet} title="Sample Image Set"/>} />
        <Route path={`/${currSet}/alg-result`} render={() => <ImageGallery data={imageData} dataset={currSet} title="Algorithm Results"/>} />
        <Route path={`/${currSet}/ground-truth`} render={() => <ImageGallery data={imageData} dataset={currSet} title="Ground Truth"/>} />
        <Route path={`/${currSet}/confusion-matrix`} render={() => <ConfusionMatrix dataset={currSet} title="Confusion Matrix"/>} />
      </Switch>
    </div>

  );
}

export default App;
