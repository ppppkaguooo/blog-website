
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import MessageBoard from "./pages/MessageBoard";
import PostDetail from "./pages/PostDetail";

function App(){

  return (
    <div className="App">
      <Router>

        <Header />

        <Switch>
          <Route path="/message-board">
            <MessageBoard />
          </Route>
          <Route path="/posts/:postId">
            <PostDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

