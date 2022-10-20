/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package negocio;

/**
 *
 * @author Jesus
 */
public class Horario {
    private int idHorario;
    private String nombreHorario ;
    private String horaInicio;
    private String horaFin;

    public Horario(int idHorario, String nombreHorario, String horaInicio, String horaFin) {
        this.idHorario = idHorario;
        this.nombreHorario = nombreHorario;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
    }

    public Horario(String nombreHorario, String horaInicio, String horaFin) {
        this.nombreHorario = nombreHorario;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
    }

    public Horario() {
    }

    public int getIdHorario() {
        return idHorario;
    }

    public void setIdHorario(int idHorario) {
        this.idHorario = idHorario;
    }

    public String getNombreHorario() {
        return nombreHorario;
    }

    public void setNombreHorario(String nombreHorario) {
        this.nombreHorario = nombreHorario;
    }

    public String getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(String horaInicio) {
        this.horaInicio = horaInicio;
    }

    public String getHoraFin() {
        return horaFin;
    }

    public void setHoraFin(String horaFin) {
        this.horaFin = horaFin;
    }
    
}
