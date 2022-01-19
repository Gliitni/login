import { Route,Switch,Redirect } from 'react-router-dom';
import Welcome from './Welcome.js';
import Login from './Login.js';
import Products from './Products';

import ProductDetails from './ProductDetails';

function App() {
  return (
   
    <div>
      {/* <MainHeader /> */}
      <main>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/Welcome' />
        </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>

      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/Products/:ProductId">
        <ProductDetails />
      </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;