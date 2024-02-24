import { Provider } from 'react-redux';
import './App.css';
import ImageContainer from './ImageContainer';
import Searchbox from './Searchbox';
import appStore from './appStore';
import Buttons from './Buttons';
import { useState } from 'react';

function App() {

  const [Status,setStatus] = useState(0);
  console.log(Status);

  return (
    <Provider store={appStore}>
    <div className="App">
      <Searchbox/>
      <ImageContainer Status={Status}/>
      <Buttons Status={Status} setStatus={setStatus}/>
    </div>
    </Provider>
  );
}

export default App;
