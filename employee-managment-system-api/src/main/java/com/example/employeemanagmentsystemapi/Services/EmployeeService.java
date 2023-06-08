package com.example.employeemanagmentsystemapi.Services;

import com.example.employeemanagmentsystemapi.Model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);


    Employee updateEmployeeById(Long id,Employee employee);
}
