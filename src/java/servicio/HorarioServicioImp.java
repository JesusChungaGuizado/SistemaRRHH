/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.util.List;
import negocio.Horario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import persistencia.HorarioDao;

/**
 *
 * @author Jesus
 */
@Service
public class HorarioServicioImp implements HorarioServicio {

    @Autowired
    private HorarioDao hd;

    @Override
    public List listHorarios() {
        return hd.listHorario();
    }

    @Override
    public String registrarHorario(Horario h) {
        String msg = hd.registrarHorario(h);
        if (msg == null) {
            msg = "Registro Exitoso";
        }
        return msg;
    }

    @Override
    public Horario searchHorario(int id) {
         Horario p= hd.searchHorario(id) ;
        if (p!=null ) {
            return p;
        }
        return null;
    }

    @Override
    public String updateHorario(Horario id) {
        String msg = hd.updateHorario(id);
        if (msg == null) {
            msg = "Datos Actualizados";
        }
        return msg;
    }

    @Override
    public String deleteHorario(int id) {
        String msg=hd.deleteHorario(id);
        if (msg==null) {
            msg="Registro eliminado";
        }
        return msg;
    }

}
