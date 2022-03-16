import Home from "./screens/Home";
import Layout from "./template/Layout";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
function App() {
  return (
    <>
      <SkeletonTheme baseColor="#767676" highlightColor="#a1a1a1">
        <Layout>
          <Home />
        </Layout>
      </SkeletonTheme>
    </>
  );
}

export default App;
