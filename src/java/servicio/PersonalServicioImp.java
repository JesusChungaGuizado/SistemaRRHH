/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.util.List;
import negocio.Personal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import persistencia.PersonalDao;


/**
 *
 * @author Jesus
 */
@Service
public class PersonalServicioImp implements PersonalServicio {

    @Autowired
    private PersonalDao pd;

    @Override
    public String registrarPersonal(Personal p) {
        String msg = "";
        Personal pe = pd.buscarPersonal(p.getDni());
        if (pe != null) {
            msg = "Este usuario ya existe";
        } else {
            String rpta = pd.registrarPersonal(p);
            if (rpta == null) {
                msg = "Registro Exitoso";
            }
        }
        return msg;
    }

    @Override
    public Personal buscarPersonal(String dni) {
        Personal p = pd.buscarPersonal(dni);
        if (p != null) {
            return p;
        }
        return null;
    }

    @Override
    public String ActualizarPersonal(Personal p) {
        String msg = pd.ActualizarPersonal(p);
        if (msg == null) {
            msg = "Datos Actualizados";
        }
        return msg;
    }

    @Override
    public String EliminarPersonal(String dni) {
        String msg = pd.EliminarPersonal(dni);
        if (msg == null) {
            msg = "Registro eliminado";
        }
        return msg;
    }

    @Override
    public List ListarPersonal() {
        return pd.listarPersonal();
    }

    @Override
    public List ListarPersonalReporte() {
        return pd.listaPersonalReporte();
    }

    @Override
    public List ListComboPersonal() {
        return pd.ListComboPersonal();
    }

}
