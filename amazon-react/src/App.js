import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./backend/firebase";
import { useStateValue } from "./backend/StateProvider";

function App() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <h1>I am the payment page</h1>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
