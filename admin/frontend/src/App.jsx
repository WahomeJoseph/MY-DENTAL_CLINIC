/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import './App.css'
import Dashboard from './pages/admin/Dashboard'
import Appointments from './pages/admin/Appointments'
import AddPatients from './pages/admin/AddPatients'
import Doctors from './pages/admin/Doctors'
import AddDoctors from './pages/admin/AddDoctors'
import Reports from './pages/admin/Reports'
import Patients from './pages/admin/Patients'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        < Route path='/' element={<Dashboard/>}/>
        < Route path='appointments' element={<Appointments/>}/>
        < Route path='addPatients' element={<AddPatients/>}/>
        < Route path='viewRecords' element={<Patients/>}/>
        < Route path='doctors' element={<Doctors/>}/>
        < Route path='addDoctors' element={<AddDoctors/>}/>
        < Route path='reports' element={<Reports/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
