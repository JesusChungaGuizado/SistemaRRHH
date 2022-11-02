/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.util.List;
import negocio.Dispositivo;
import negocio.Personal_Dispositivo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import persistencia.DispositivoDao;

/**
 *
 * @author Jesus
 */
@Service
public class DispositivoServicioImp implements DispositivoServicio{
    @Autowired
    private DispositivoDao dd;
    @Override
    public List listDispositivo() {
        return dd.listDispositivo();
    }

    @Override
    public String registrarDispositivo(Dispositivo d) {
         String msg =dd.registrarDispositivo(d) ;
        if (msg == null) {
            msg = "Registro Exitoso";
        }
        return msg;
    }

    @Override
    public String updateDispositivo(Dispositivo d) {
         String msg = dd.updateDispositivo(d);
        if (msg == null) {
            msg = "Datos Actualizados";
        }
        return msg;
    }

    @Override
    public String deleteDispositivo(int id) {
        String msg = dd.deleteDispositivo(id);
        if (msg == null) {
            msg = "Registro eliminado";
        }
        return msg;
    }

    @Override
    public Dispositivo searchDispositivo(int id) {
    Dispositivo p = dd.searchDispositivo(id);
        if (p != null) {
            return p;
        }
        return null;

    }

    @Override
    public String asignarDispositivo(Personal_Dispositivo ped) {
        String msg =dd.asignarDispositivo(ped) ;
        if (msg == null) {
            msg = "Registro Exitoso";
        }
        return msg;    }
     @Override
    public List listPersonalDispositivo(){
        return dd.listPersonalDispositivo();
    }
}
