/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import java.util.List;
import negocio.Cargo;
import negocio.Permiso;

/**
 *
 * @author Jesus
 */
public interface AdminDao {
    public Object[] Login(String user,String pas);
    public List ListAreas();
    public List buscarCargoXarea(int id);
    public List ListCargos();
    public List ListTipoCargo();
    public String RegistrarCargo(Cargo cargo);
    public String DeleteCargo(int id);
    public List verDatos();
    public List countPersonalByArea();
    public Object[] SearchCargoByName(String name);
    public List ListBirthays();
    public Object[] searchUpdateCargo(int idC);
    public String updateCargo(Cargo c);
           
}
