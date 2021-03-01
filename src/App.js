import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import { useState, useEffect }  from 'react';
import axios from 'axios';
import Logout from './Logout'
import NotFound from './NotFound';

function App() {

  const [email, setEmail] = useState();
  
       useEffect( ()=> {
         const checkUser =  async() => {
          try {
            const res = await axios.get('user')
            console.log(res.data.user);
            setEmail(res.data.user.email);
          } catch (error) {
            console.log(error.message);
          }
         }
      checkUser();
       }, [])


  return (
    <div className="container">
   
         <Router>

             <div className="nav bg-dark d-flex justify-content-between">
             <div className="d-flex">
             <Link className="nav-item nav-link text-white" to="/">Home</Link>
             </div>
             {email ?
             <div className="d-flex">
                     <Link className="nav-item nav-link text-white" to="/register">{email && email}</Link>
             <Link className="nav-item nav-link text-white" to="/logout">Logout</Link>
             </div> :
             <div className="d-flex">
    
             <Link className="nav-item nav-link text-white" to="/register">Register</Link>
             <Link className="nav-item nav-link text-white" to="/login" >Login</Link>
             </div> 
               }
             </div>

            <Switch>
              <Route exact path="/">
                 {email ? <Redirect to="/" /> : <Login />}
              </Route>
              <Route path="/register">
                {email ? <Redirect to="/" /> : <Register />}
              </Route>
              <Route path="/login">
               {email ? <Redirect to="/" /> : <Login />}
              </Route>
              <Route path="/logout">
              <Logout />
              </Route>
              <Route path="*">
                 <NotFound />
              </Route>
            </Switch>
         </Router>
         
        </div>
 
  );
}

export default App;
