import { Route, Switch, Link } from 'react-router-dom';

import ImageGallery from './components/ImageGallery'
import ConfusionMatrix from './components/ConfusionMatrix'

import './App.css';
import imageData from './seedData.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/alg-result">Algorithm Result</Link>
        <Link to="/sample-image-set">Sample Image Set </Link>
        <Link to="/ground-truth">Ground Truth</Link>
        <Link to="/confusion-matrix"> Confusion Matrix </Link>
      </nav>  
      
      <Switch>
          <Route path="/sample-image-set" render={() => <ImageGallery data={imageData} title="Sample Image Set"/>} />
          <Route path="/alg-result" render={() => <ImageGallery data={imageData} title="Algorithm Results"/>} />
          <Route path="/ground-truth" render={() => <ImageGallery data={imageData} title="Ground Truth"/>} />
          <Route path="/confusion-matrix" render={() => <ConfusionMatrix data={imageData} title="Confusion Matrix"/>} />
      </Switch>
    </div>

  );
}

export default App;
