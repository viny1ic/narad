import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom"
import PatientForm from "./pages/PatientForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/addPatient' element={<PatientForm />} />

      </Routes>
    </div>
  );
}

export default App;
