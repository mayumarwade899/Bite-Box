import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Success from "./components/Success"
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
