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
public class Personal_Dispositivo {
    private int idPesonal;
    private int idEquipo;
    private String fechaEntrega;
    private String fechaDevo;

    public Personal_Dispositivo(int idPesonal, int idEquipo, String fechaEntrega, String fechaDevo) {
        this.idPesonal = idPesonal;
        this.idEquipo = idEquipo;
        this.fechaEntrega = fechaEntrega;
        this.fechaDevo = fechaDevo;
    }

    public int getIdPesonal() {
        return idPesonal;
    }

    public void setIdPesonal(int idPesonal) {
        this.idPesonal = idPesonal;
    }

    public int getIdEquipo() {
        return idEquipo;
    }

    public void setIdEquipo(int idEquipo) {
        this.idEquipo = idEquipo;
    }

    public String getFechaEntrega() {
        return fechaEntrega;
    }

    public void setFechaEntrega(String fechaEntrega) {
        this.fechaEntrega = fechaEntrega;
    }

    public String getFechaDevo() {
        return fechaDevo;
    }

    public void setFechaDevo(String fechaDevo) {
        this.fechaDevo = fechaDevo;
    }
    
    
}
