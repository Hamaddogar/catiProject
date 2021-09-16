 import  React from 'react'
  import Home from './Home/Home'
   import About  from './Home/About/About'
   import Contact from './Home/Contact/contact'
    import SignIn from './Home/SignIn/SignIn'
  import { BrowserRouter, Route, Link } from "react-router-dom";
  
function App() {
  return (
  
   <BrowserRouter>
     <Route  exact path="/"  component ={Home}/>
     <Route path="/about"  component ={About}/>
     <Route path="/Contact"  component ={Contact}/>
      <Route path ="/SignIn" component ={SignIn}/>


   </BrowserRouter>
  );
}

export default App;
