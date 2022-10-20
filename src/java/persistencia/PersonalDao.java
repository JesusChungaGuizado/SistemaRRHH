/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import java.util.List;
import negocio.Personal;

/**
 *
 * @author Jesus
 */
public interface PersonalDao {
    public List listarPersonal();
    public List listaPersonalReporte();
    public String registrarPersonal(Personal p);
    public Personal buscarPersonal(String dni);
    public String ActualizarPersonal(Personal p);
    public String EliminarPersonal(String dni);
    public List ListComboPersonal();
    
}
