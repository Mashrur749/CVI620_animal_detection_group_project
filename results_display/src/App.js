import ImageGallery from './components/ImageGallery'

import './App.css';
import imageData from './seedData.js';

function App() {
  return (
    <div className="App">
      <ImageGallery data={imageData}/>
    </div>
  );
}

export default App;
