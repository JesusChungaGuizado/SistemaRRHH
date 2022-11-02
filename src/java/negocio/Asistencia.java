/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package negocio;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 *
 * @author Jesus
 */
public class Asistencia extends Horario {
    private int idAsistencia;
    private int idEmpleado;
    private String fecha;
    private String entrada;
    private String salida;
    private String nombre;
    private String apellido;
    private String horasTrabajadas;

    public Asistencia(int idEmpleado, String fecha, String entrada, String salida) {
        this.idEmpleado = idEmpleado;
        this.fecha = fecha;
        this.entrada = entrada;
        this.salida = salida;
    }
    public Asistencia(int idAsistencia, int idEmpleado, String fecha, String entrada, String salida) {
        this.idAsistencia = idAsistencia;
        this.idEmpleado = idEmpleado;
        this.fecha = fecha;
        this.entrada = entrada;
        this.salida = salida;
    }

    public Asistencia() {
    }

    public int getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(int idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;

    }

    public String getEntrada() {
        return entrada;
    }

    public void setEntrada(String entrada) {
        this.entrada = entrada;
    }

    public String getSalida() {
        return salida;
    }

    public void setSalida(String salida) {
        this.salida = salida;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setHorasTrabajadas() {
        String hTrabajadas = "";
        try {
            SimpleDateFormat formatter = new SimpleDateFormat("hh:mm");
            Date ent = formatter.parse(getEntrada());
            Date sal = formatter.parse(getSalida());
            long hEntrada = ent.getTime();
            long hSalida = sal.getTime();
            long resta = hSalida - hEntrada;
            int seconds = (int) (resta / 1000) % 60;
            int minutes = (int) ((resta / (1000 * 60)) % 60);
            int hours = (int) ((resta / (1000 * 60 * 60)) % 24);
            Calendar c = Calendar.getInstance();
            c.set(Calendar.SECOND, seconds);
            c.set(Calendar.MINUTE, minutes);
            c.set(Calendar.HOUR_OF_DAY, hours);
            hTrabajadas = formatter.format(c.getTime());
        } catch (Exception e) {
        }
        this.horasTrabajadas= hTrabajadas;
    }

    public String getHorasTrabajadas() {
        return horasTrabajadas;
    }

    public int getIdAsistencia() {
        return idAsistencia;
    }

    public void setIdAsistencia(int idAsistencia) {
        this.idAsistencia = idAsistencia;
    }

  
    
}
