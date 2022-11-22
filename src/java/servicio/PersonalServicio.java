/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.util.List;
import negocio.Candidato;
import negocio.Personal;

/**
 *
 * @author Jesus
 */
public interface PersonalServicio {
    public String registrarPersonal(Personal p);
    public Personal buscarPersonal(String dni);
    public String ActualizarPersonal(Personal p);
    public String EliminarPersonal(String dni);
    public List ListarPersonal();
    public List ListarPersonalReporte();
    public List ListComboPersonal() ;
    public String RegistrarCandidato(Candidato c);
    public List ListCandidato();
}
