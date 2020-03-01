package com.salud.IMC.saludIMC.repository;

import com.salud.IMC.saludIMC.data.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
/**
 *
 * @author Fabian Camayo
 */
public interface PatientRepository extends JpaRepository<Patient, Long>{
    
    //Consulta utilizada para contar las personas de bajo peso
    @Query(value = "SELECT COUNT(*) FROM Patient p WHERE p.imc < 18.5")
    public Integer underweight();
        
    //Consulta utilizada para contar las personas Saludables
    @Query(value = "SELECT COUNT(*) FROM Patient p WHERE p.imc > 18.5 AND p.imc < 24.9")
    public Integer healthy();
    
    //Consulta utilizada para contar las personas con sobrepeso
    @Query(value = "SELECT COUNT(*) FROM Patient p WHERE p.imc > 25.0 AND p.imc < 29.9")
    public Integer overweight();
    
    //Consulta utilizada para contar las personas con obesidad
    @Query(value = "SELECT COUNT(*) FROM Patient p WHERE p.imc > 30.0")
    public Integer obese();
}
