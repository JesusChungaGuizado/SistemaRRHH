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
}
