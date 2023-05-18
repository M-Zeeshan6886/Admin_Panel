import "./App.css";
import { ChangePasword } from "./components";
import Layout from "./layout/Layout";
import {
  Dashboard,
  Manageempolyee,
  Settings,
  Signin,
  Subscription,
  Support,
} from "./module";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/supportRequest" element={<Support />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/manageEmployee" element={<Manageempolyee />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/changepasword" element={<ChangePasword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
