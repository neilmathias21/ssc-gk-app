import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Practice from "./pages/Practice/Practice";
import PracticeSession from "./pages/PracticeSession/PracticeSession";

import RandomPractice from "./pages/RandomPractice/RandomPractice";
import SubjectPractice from "./pages/SubjectPractice/SubjectPractice";
import ChapterPractice from "./pages/ChapterPractice/ChapterPractice";

//import NotFound from "./pages/NotFound/NotFound";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/practice" element={<Practice />} />

          <Route
              path="/practice/random"
              element={<RandomPractice />}
          />

          <Route
              path="/practice/subject"
              element={<SubjectPractice />}
          />

          <Route
              path="/practice/chapter"
              element={<ChapterPractice />}
          />

          <Route
              path="/practice/session"
              element={<PracticeSession />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;