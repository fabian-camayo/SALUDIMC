package com.salud.IMC.saludIMC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.salud.IMC.saludIMC.repository.PatientRepository;
import com.salud.IMC.saludIMC.data.Patient;
import com.salud.IMC.saludIMC.exception.ResourceNotFoundException;
import java.util.List;
import javax.validation.Valid;
import org.springframework.http.ResponseEntity;
import java.util.Map;
import java.util.HashMap;
import org.springframework.web.bind.annotation.ResponseBody;
import com.salud.IMC.saludIMC.data.dto.ImcCalculator;

/**
 *
 * @author Fabian Camayo
 */
@CrossOrigin(origins = "http://localhost:4200") 
@RestController 
@RequestMapping("/api/v1")
public class PatientController {
 
    @Autowired
	private PatientRepository patientRepository;

	@GetMapping("/patients")
	public List<Patient> getAllPatient() {
		return patientRepository.findAll();
	}

	@GetMapping("/patients/{id}")
	public ResponseEntity<Patient> getPatientsById(@PathVariable(value = "id") Long patientId)
			throws ResourceNotFoundException {
		Patient patient = patientRepository.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not found for this id :: " + patientId));
		return ResponseEntity.ok().body(patient);
	}

	@PostMapping("/patients")
	public Patient createPatient(@Valid @RequestBody Patient patient) {

                patient.setImc(imcResult(patient.getSize(), patient.getWeight()));
		return patientRepository.save(patient);
	}

	@PutMapping("/patients/{id}")
	public ResponseEntity<Patient> updatePatient(@PathVariable(value = "id") Long patientId,
			@Valid @RequestBody Patient patientDetails) throws ResourceNotFoundException {
		Patient patient = patientRepository.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not found for this id :: " + patientId));
                
                patient.setName(patientDetails.getName());
                patient.setAge(patientDetails.getAge());
                patient.setWeight(patientDetails.getWeight());
                patient.setSize(patientDetails.getSize());
                patient.setImc(imcResult(patientDetails.getSize(), patientDetails.getWeight()));

		final Patient updatedPatient = patientRepository.save(patient);
		return ResponseEntity.ok(updatedPatient);
	}

	@DeleteMapping("/patients/{id}")
	public Map<String, Boolean> deletePatient(@PathVariable(value = "id") Long patientId)
			throws ResourceNotFoundException {
		Patient patient = patientRepository.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not found for this id :: " + patientId));

		patientRepository.delete(patient);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
        
       @PostMapping("/imc-calculator")
	public  @ResponseBody Map<String, Object>  imcCalculator(@RequestBody ImcCalculator imcCalculator) {
        
            HashMap<String, Object> map = new HashMap<>();
            map.put("imc", imcResult(imcCalculator.getSize(),imcCalculator.getWeight()));
         return map;
	}
        
        public Float imcResult(Integer size, Integer weight){
            float sizecm = (float)size/100;
            float imc = (float) weight / (sizecm * sizecm); 
            return imc;
        }
    
}
