import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "./Components/Navigator/Navigator";
import ToolForm from "./Components/ToolForm/ToolForm";
import TroubleShooter from "./Components/Troubleshooter/Troubleshooter";
import PROs from "./Components/PROS/PROs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigator />

      <BrowserRouter>
        <div>
          <Routes>
            <Route path="home" element={<ToolForm />} />
            <Route path="troubleshoot" element={<TroubleShooter />} />
            <Route path="pros" element={<PROs />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
