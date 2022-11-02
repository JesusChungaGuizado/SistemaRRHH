/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import java.util.List;
import negocio.Permiso;

/**
 *
 * @author Jesus
 */
public interface PermisoDao {
     public String RegistrarPermiso(Permiso pe);
    public List ListPermisos();
    public String deletePermiso(int id);
    public Object[] searchPermiso(int id);
    public String updatePermiso(Permiso pe);
}
