/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.util.List;
import negocio.Cargo;
import negocio.Permiso;

/**
 *
 * @author Jesus
 */
public interface AdminServicio {
    public Object[] Login(String user,String pass);
    public List ListAreas();
    public List buscarCargoXarea(int id);
     public List ListCargos();
     public List ListTipoCargo();
     public String registrarCargo(Cargo p);
      public String DeleteCargo(int id);
      public List VerDatos();
      public List countPersonalByArea();
      public List ListBirthays() ;
      public Object[] searchCargo(int id);
    public String updateCargo(Cargo c);
    
    
}
