/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.util.List;
import negocio.Permiso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import persistencia.PermisoDao;

/**
 *
 * @author Jesus
 */
@Service
public class PermisoServicioImp implements PermisoServicio {

    @Autowired
    private PermisoDao pd;

    @Override
    public String RegistrarPermiso(Permiso pe) {
        String msg = pd.RegistrarPermiso(pe);
        if (msg == null) {
            msg = "Registro Exitoso";
        }
        return msg;
    }

    @Override
    public List ListPermisos() {
        return pd.ListPermisos();
    }
    
    @Override
    public String DeletePermiso(int idPersonal) {
        String msg = pd.deletePermiso(idPersonal);
        if (msg == null) {
            msg = "Se eliminó el registro";
        }
        return msg;
    }
     @Override
    public Object[] searchPermiso(int id){
     
           Object[] p =(Object[]) pd.searchPermiso(id);

        if (p != null) {
            Object[] ob = new Object[8];
            ob[0] = (int)p[0];
            ob[1] = (int)p[1];
            ob[2] = p[2].toString();
            ob[3] = p[3].toString();
            ob[4] = p[4].toString();
            ob[5] = p[5].toString();
            ob[6] = p[6].toString();
            ob[7] = p[7].toString();
            return ob;
        }
        return null;
    }
    @Override
    public String updatePermiso(Permiso pe){
        String msg = pd.updatePermiso(pe);
        if (msg == null) {
            msg = "Datos Actualizados";
        }
        return msg;
    }
}
