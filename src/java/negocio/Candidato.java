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
public class Candidato {
    private String idCandidato;
    private String nombre;
    private String dni;
    private String celular;
    private String puesto;
    private String linkedin ;

    public Candidato(String idCandidato, String nombre, String dni, String celular, String puesto, String linkedin) {
        this.idCandidato = idCandidato;
        this.nombre = nombre;
        this.dni = dni;
        this.celular = celular;
        this.puesto = puesto;
        this.linkedin = linkedin;
    }
    public Candidato( String nombre, String dni, String celular, String puesto, String linkedin) {
            this.nombre = nombre;
            this.dni = dni;
            this.celular = celular;
            this.puesto = puesto;
            this.linkedin = linkedin;
        }

    public Candidato() {
    }

    
    public String getIdCandidato() {
        return idCandidato;
    }

    public void setIdCandidato(String idCandidato) {
        this.idCandidato = idCandidato;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getPuesto() {
        return puesto;
    }

    public void setPuesto(String puesto) {
        this.puesto = puesto;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }
    
}
