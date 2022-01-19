import {Rout, Route} from 'react-router-dom';
import MainHeader from './MainHeader';
const Welcome = () => {
    return (
      <section>
    <h1>Welcome</h1>
    <MainHeader />
    <Route path="/Welcome/newUser">
      <p>Welcom New User!</p>
    </Route>
    </section>
    )
  };
  
  export default Welcome;