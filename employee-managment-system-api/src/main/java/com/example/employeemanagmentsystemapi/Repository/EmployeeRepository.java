package com.example.employeemanagmentsystemapi.Repository;

import com.example.employeemanagmentsystemapi.Entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long> {
}
