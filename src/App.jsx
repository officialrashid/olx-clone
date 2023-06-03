import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";
import { AuthContext, FirebaseContext } from "./store/firebaseContext";
import Post from './store/PostContext'; // Adjusted import statement

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    console.log(user);
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Post>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signUp">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/view">
          <ViewPost />
        </Route>
      </Router>
    </Post>
  );
}

export default App;
