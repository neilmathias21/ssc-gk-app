import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Practice from "./pages/Practice/Practice";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/practice"
            element={<Practice />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;