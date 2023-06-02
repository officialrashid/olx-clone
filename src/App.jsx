import React ,{useEffect,useContext} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { AuthContext, FirebaseContext } from "./store/firebaseContext";

function App() {
  
  const {user,setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
     
    console.log(user);
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signUp">
        <Signup />
      </Route>
      <Route  path="/login">
        <Login />
      </Route>
      
    </Router>
  );
}

export default App;
