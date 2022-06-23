package com.imc.saludimc

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Window
import android.widget.*
import androidx.appcompat.widget.Toolbar

@Suppress("SpellCheckingInspection")
class MainActivity : AppCompatActivity() {



    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        supportRequestWindowFeature(Window.FEATURE_NO_TITLE)
        setContentView(R.layout.activity_main)


        val btnCalcular: Button = findViewById(R.id.btnCalcular)

        // Calcular IMC
        btnCalcular.setOnClickListener {
            calcularIMC()
        }
    }

    private fun calcularIMC() {
        // Referencia de todas las vistas
        val inpNumEstatura: EditText = findViewById(R.id.inpEstatura)
        val inpNumPeso: EditText = findViewById(R.id.inpPeso)
        val estatura:String = (inpNumEstatura.text).toString()
        val peso: String = (inpNumPeso.text).toString()

        val txtIMC: TextView = findViewById(R.id.txtIMC)
        val txtIMCEstado: TextView = findViewById(R.id.txtIMCEstado)
        var IMCEstado = ""
        var IMCColor = Color.GRAY
        val barPorcentaje: ProgressBar = findViewById(R.id.barPorcentaje)

        val imc = peso.toFloat()/(estatura.toFloat()*estatura.toFloat())
        txtIMC.text = (imc).toString()

        if (imc<18.5){
            IMCEstado = "Bajo peso"
            IMCColor = Color.rgb(51,102,255)
        }
        if (imc>=18.5&&imc<=24.9){
            IMCEstado = "Peso normal"
            IMCColor = Color.rgb(153,204,0)
        }
        if (imc>=25.0&&imc<=29.9){
            IMCEstado = "Sobrepeso"
            IMCColor = Color.rgb(255,204,0)
        }
        if (imc>=30.0&&imc<=34.9){
            IMCEstado = "Obesidad clase I"
            IMCColor = Color.rgb(255,153,0)
        }
        if (imc>=35.0&&imc<=39.9){
            IMCEstado = "Obesidad clase II"
            IMCColor = Color.rgb(255,0,0)
        }
        if (imc>=40){
            IMCEstado = "Obesidad clase III"
            IMCColor = Color.rgb(255,0,255)
        }
        barPorcentaje.progress = (imc).toInt()
        barPorcentaje.progressDrawable.setTint(IMCColor)
        txtIMCEstado.text = IMCEstado

        Toast.makeText(this,"IMC CALCULADO CON EXITO!!", Toast.LENGTH_LONG).show()
    }
}