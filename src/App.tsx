import Home from "./screens/Home";
import Layout from "./template/Layout";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import MediaDetail from "./screens/MediaDetail/MediaDetail";
function App() {
  return (
    <>
      <SkeletonTheme baseColor="#767676" highlightColor="#a1a1a1">
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/media/:id">
                <MediaDetail />
              </Route>
              <Redirect path="/" to="/home" />
            </Switch>
          </Layout>
        </Router>
      </SkeletonTheme>
    </>
  );
}

export default App;
