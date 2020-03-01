/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.salud.IMC.saludIMC.data.dto;

/**
 *
 * @author Fabian Muñoz
 */
public class Graphics {
    
    private Integer underweight;
    private Integer healthy;
    private Integer overweight;
    private Integer obese;

    public Graphics() {
    }

    public Graphics(Integer underweight, Integer healthy, Integer overweight, Integer obese) {
        this.underweight = underweight;
        this.healthy = healthy;
        this.overweight = overweight;
        this.obese = obese;
    }

    public Integer getUnderweight() {
        return underweight;
    }

    public void setUnderweight(Integer underweight) {
        this.underweight = underweight;
    }

    public Integer getHealthy() {
        return healthy;
    }

    public void setHealthy(Integer healthy) {
        this.healthy = healthy;
    }

    public Integer getOverweight() {
        return overweight;
    }

    public void setOverweight(Integer overweight) {
        this.overweight = overweight;
    }

    public Integer getObese() {
        return obese;
    }

    public void setObese(Integer obese) {
        this.obese = obese;
    }
    
    
}
