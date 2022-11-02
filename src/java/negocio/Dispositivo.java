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
public class Dispositivo {
    private int idDispositivo;
    private String imagen;
    private String nombre;
    private String description;
    private int cantidad ;
    private int estado;

    public Dispositivo(int idDispositivo, String nombre, String description, int cantidad, int estado) {
        this.idDispositivo = idDispositivo;
        this.nombre = nombre;
        this.description = description;
        this.cantidad = cantidad;
        this.estado = estado;
    }

    public Dispositivo(String nombre, String description, int cantidad, int estado) {
      
        this.nombre = nombre;
        this.description = description;
        this.cantidad = cantidad;
        this.estado = estado;
    }

    public Dispositivo() {
    }

    public int getIdDispositivo() {
        return idDispositivo;
    }

    public void setIdDispositivo(int idDispositivo) {
        this.idDispositivo = idDispositivo;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }
    
    
}
