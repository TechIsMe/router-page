import './App.css';
import {Route} from 'react-router-dom';

import WelcomePage from './Components/WelcomePage';
import Product from './Components/Product';

function App() {
  return (
    <div className="App">
      <Route path="/welcome">
        <WelcomePage />
      </Route>

      <Route path="/product">
        <Product />
      </Route>
    </div>
  );
}

export default App;
