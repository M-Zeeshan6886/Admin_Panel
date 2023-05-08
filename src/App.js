import "./App.css";
import { Signin } from "./module";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
