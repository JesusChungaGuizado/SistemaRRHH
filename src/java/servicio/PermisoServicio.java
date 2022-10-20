/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.util.List;
import negocio.Permiso;
/**
 *
 * @author Jesus
 */
public interface PermisoServicio {
      public String RegistrarPermiso(Permiso pe);
      public List ListPermisos();
      public String DeletePermiso(int idPersonal);
}
