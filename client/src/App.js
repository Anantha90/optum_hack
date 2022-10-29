import { Route, Routes } from "react-router-dom"
import Homepage from "./components/Homepage";
import DoctorRegister from "./components/DoctorRegister";
import DoctorLogin from "./components/DoctorLogin";
import PatientLogin from "./components/PatientLogin";
import PatientRegister from "./components/PatientRegister";
import Navbar from "./components/Navbar";
import Patient from "./components/Patient";

export function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path = "/patient" element={<Patient/>}/>
        <Route path="/doctor/register" element={<DoctorRegister />} />
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/patient/register" element={<PatientRegister />} />
        <Route path="/patient/login" element={<PatientLogin />} />
      </Routes>
    </>
  )
}