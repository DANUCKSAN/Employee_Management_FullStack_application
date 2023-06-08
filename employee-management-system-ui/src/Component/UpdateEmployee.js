import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const [employee,setEmployee]=useState(
        {
            id:id,
            firstName:"",
            lastName:"",
            emailId:""
        });

        const handleChange=(e)=>{
            const value=e.target.value;
            setEmployee({...employee,[e.target.name]:value});
        }

        useEffect(()=>{
           const fetchData=async ()=>{
            try{
                const response= await EmployeeService.getEmployeeById(employee.id);
                setEmployee(response.data);
            }catch (error){
                console.log(error)
            }
           };
           fetchData();
        },[])

    const updateEmployee=(e)=>{
        e.preventDefault();
        console.log(employee);
        EmployeeService.updateEmployeeById(employee,id)
        .then((response)=>{
            navigate("/employeeList")
        })
        .catch((error)=>{
            console.log(error);
        })
    }
   
    
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
    <div className='px-8 py-8'>
    <div className='font-thin text-2xl tracking-wider'>
    <h1>updateEmployee</h1>
    </div>
    <div className='items-center justify-center h-14 w-full my-4'>
        <label 
        className='block text-gray-600 text-sm font-normal'>
            First Name
        </label>
        <input 
        onChange={(e)=>handleChange(e)}
        name='firstName'
        value={employee.firstName}
        type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
    </div>
    <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>
            Last Name
        </label>
        <input 
        onChange={(e)=>handleChange(e)}
        name='lastName'
        value={employee.lastName}
        type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
    </div>
    <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>
            Email
        </label>
        <input 
        onChange={(e)=>handleChange(e)}
        name='emailId'
        value={employee.emailId}
        type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
    </div>
    <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
        <button 
        onClick={updateEmployee}
        className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700'>
            update</button>
            <button 
            onClick={()=>navigate("/employeeList")}
            className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700'>
            Cancel</button>
       
    </div>
    </div>
    </div>
  )
}

export default UpdateEmployee;