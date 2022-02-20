import { Routes, Route } from "react-router-dom";
import "./tailwind.css";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/auth/Login.page";
import AthletesPage from "./pages/athlete/Athletes.page";
import AthleteDetailPage from "./pages/athlete/AthleteDetail.page";
import SearchPage from "./pages/athlete/Search.page";
import AthleteRegisterPage from "./pages/athlete/Register.page";
import MeasureWritePage from "./pages/measure/Write.page";
import MeasureViewPage from "./pages/measure/View.page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/athletes" element={<AthletesPage />} />
        <Route path="/athletes/search" element={<SearchPage />} />
        <Route path="/athletes/register" element={<AthleteRegisterPage />} />
        <Route path="/athletes/:id" element={<AthleteDetailPage />} />
        <Route path="/athletes/:id/write" element={<MeasureWritePage />} />
        <Route path="/athletes/:id/view" element={<MeasureViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
