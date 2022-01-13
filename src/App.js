
import {
  Routes,
  Route
} from "react-router-dom";
import { AnalysingResults, Home, QuestionOne, QuestionTwo, Results, Transit, Hospitals } from "./views";

function App() {
  return (
    <Routes>
       <Route path="/" index element={<Home />} />
        <Route path="/questions/one" element={<QuestionOne />} />
          <Route path="/questions/two" element={<QuestionTwo />} />
          <Route path="/questions/analysing" element={<AnalysingResults />} />
          <Route path="/questions/results" element={<Results />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/transit" element={<Transit />} />
    </Routes>
  );
}

export default App;
