import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/" element={<Home />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
