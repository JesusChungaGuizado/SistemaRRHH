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
public class Cargo {
    private String idCargo;
    private String nombreCargo;
    private int tipoCargo;
    private int area;
    private String jefe;

    public Cargo(String nombreCargo, int tipoCargo, int area, String jefe) {
        this.nombreCargo = nombreCargo;
        this.tipoCargo = tipoCargo;
        this.area = area;
        this.jefe = jefe;
    }

    public String getIdCargo() {
        return idCargo;
    }

    public void setIdCargo(String idCargo) {
        this.idCargo = idCargo;
    }

    public String getNombreCargo() {
        return nombreCargo;
    }

    public void setNombreCargo(String nombreCargo) {
        this.nombreCargo = nombreCargo;
    }

    public int getTipoCargo() {
        return tipoCargo;
    }

    public void setTipoCargo(int tipoCargo) {
        this.tipoCargo = tipoCargo;
    }

    public int getArea() {
        return area;
    }

    public void setArea(int area) {
        this.area = area;
    }

    public String getJefe() {
        return jefe;
    }

    public void setJefe(String jefe) {
        this.jefe = jefe;
    }

    
   
    
}
