package com.salud.IMC.saludIMC.repository;

import com.salud.IMC.saludIMC.data.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 *
 * @author Fabian Camayo
 */
public interface PatientRepository extends JpaRepository<Patient, Long>{
    
}
