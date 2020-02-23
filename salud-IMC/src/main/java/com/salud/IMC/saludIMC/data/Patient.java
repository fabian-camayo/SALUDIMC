package com.salud.IMC.saludIMC.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
/**
 *
 * @author Fabian Camayo
 */
@Entity
@Table(name = "patients")
public class Patient {
    	private Long id;
	private String name;
	private Integer age;
	private Integer weight;
        private Integer size;
        private Float imc;
    public Patient() {
    }

    public Patient(Long id, String name, Integer age, Integer weight, Integer size, Float imc) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.size = size;
        this.imc = imc;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "age", nullable = false)
    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Column(name = "weight", nullable = false)
    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    @Column(name = "size", nullable = false)
    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    @Column(name = "imc", nullable = false)
    public Float getImc() {
        return imc;
    }

    public void setImc(Float imc) {
        this.imc = imc;
    }
    
    
    @Override
    public String toString() {
	return "Patient [id=" + id + ", Name=" + name + ", Age=" + age + ", Weight=" + weight +", Size="+ size + ", IMC="+ imc +"]";
    }
}
