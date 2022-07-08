// import './App.css';
import {Route} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Product from './pages/Product';
import MainHeader from './Components/MainHeader';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <div>
      {/* <header>

      </header> */}
      <MainHeader />
      <main>
      <Route path="/welcome">
        <WelcomePage />
      </Route>

      <Route path="/product">
        <Product />
      </Route>

      <Route path="/productdetail/:productId">
        <ProductDetail />
      </Route>
      </main>
    </div>
  );
}

export default App;
