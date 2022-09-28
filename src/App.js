import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import CreateEvent from "./CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='create' element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
