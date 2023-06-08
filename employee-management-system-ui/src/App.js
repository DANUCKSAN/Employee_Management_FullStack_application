
import './App.css';
import React from "react";
import Nav from './Component/Nav';
import AddEmployee from './Component/AddEmployee';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import EmployeeList from './Component/EmployeeList';
import UpdateEmployee from './Component/UpdateEmployee';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route index element={<EmployeeList/>}/>
        <Route path='/' element={<EmployeeList/>}></Route>
        <Route path='/employeeList' element={<EmployeeList/>}/>
        <Route path='/addEmployee' element={<AddEmployee/>}/>
        <Route path='/editEmployee/:id' element={<UpdateEmployee/>}/>
    </Routes>
    </BrowserRouter>


    </div>
   
  );
}

export default App;
