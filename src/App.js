import { Provider } from 'react-redux';
import './App.css';
import ImageContainer from './ImageContainer';
import Searchbox from './Searchbox';
import appStore from './appStore';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Searchbox/>
      <ImageContainer/>
    </div>
    </Provider>
  );
}

export default App;
