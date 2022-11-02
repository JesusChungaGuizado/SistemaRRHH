/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import negocio.Asistencia;
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
        Horario p = hd.searchHorario(id);
        if (p != null) {
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
        String msg = hd.deleteHorario(id);
        if (msg == null) {
            msg = "Registro eliminado";
        }
        return msg;
    }

    @Override
    public List listAsistencia() {
        List listado = hd.listAsistencia();
        List data = new ArrayList();
        Asistencia p;
        if (listado != null) {
            for (int i = 0; i < listado.size(); i++) {
                Object[] fil = (Object[]) listado.get(i);
                p = new Asistencia();
                p.setFecha(getFecha(fil[0].toString()));
                p.setIdEmpleado((int) fil[1]);
                p.setNombre(fil[2].toString());
                p.setApellido(fil[3].toString());
                p.setHoraInicio(getHora(fil[4].toString()));
                p.setHoraFin(getHora(fil[5].toString()));
                p.setEntrada(getHora(fil[6].toString()));
                p.setSalida(getHora(fil[7].toString()));
                p.setIdAsistencia((int) fil[8]);
                p.setHorasTrabajadas();
                data.add(p);
            }
            return data;
        }
        return null;
    }

    public String getFecha(String fe) {
        String date = "";
        try {
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
            Date fecha = formatter.parse(fe);
            date = formato.format(fecha);
        } catch (Exception e) {
        }

        return date;
    }

    public String getHora(String hora) {
        String time = "";
        try {
            SimpleDateFormat formatter = new SimpleDateFormat("hh:mm:ss");
            //"HH:mm aa"
            SimpleDateFormat formatTime = new SimpleDateFormat("HH:mm aa");
            Date fecha = formatter.parse(hora);
            time = formatTime.format(fecha);
        } catch (Exception e) {
        }
        return time;
    }

    public Date getHoraDate(String hora) {
        Date time = null;
        try {
            SimpleDateFormat formatter = new SimpleDateFormat("hh:mm:ss");
            //"HH:mm aa"

            time = formatter.parse(hora);

        } catch (Exception e) {
        }
        return time;
    }

    @Override
    public String registrarAsistencia(Asistencia a) {
        String msg = hd.registrarAsistencia(a);
        if (msg == null) {
            msg = "Registro Exitoso";
        }
        return msg;
    }

    @Override
    public Object[] searchAsistencia(int id) {
        Object[] p = hd.searchAsistencia(id);

        if (p != null) {
            Object[] ob = new Object[8];
            ob[0] = p[0];
            ob[1] = p[1].toString();
            ob[2] = p[2].toString();
            ob[3] = p[3].toString();
            ob[4] = p[4];
            ob[5] = p[5];
            ob[6] = p[6];
            ob[7] = p[7];
            return ob;
        }
        return null;
    }

    @Override
    public String updateAsistencia(Asistencia a) {
        String msg = hd.updateAsistencia(a);
        if (msg == null) {
            msg = "Datos Actualizados";
        }
        return msg;
    }
    @Override
    public String deleteAsistencia(int id){
        String msg = hd.deleteAsistencia(id);
        if (msg == null) {
            msg = "Registro eliminado";
        }
        return msg;
    }

    @Override
    public List FiltrarByFecha(String fecha) {
        List listado = hd.FiltrarByFecha(fecha);
        List data = new ArrayList();
        Asistencia p;
        if (listado != null) {
            for (int i = 0; i < listado.size(); i++) {
                Object[] fil = (Object[]) listado.get(i);
                p = new Asistencia();
                p.setFecha(getFecha(fil[0].toString()));
                p.setIdEmpleado((int) fil[1]);
                p.setNombre(fil[2].toString());
                p.setApellido(fil[3].toString());
                p.setHoraInicio(getHora(fil[4].toString()));
                p.setHoraFin(getHora(fil[5].toString()));
                p.setEntrada(getHora(fil[6].toString()));
                p.setSalida(getHora(fil[7].toString()));
                p.setIdAsistencia((int) fil[8]);
                p.setHorasTrabajadas();
                data.add(p);
            }
            return data;
        }
        return null;
    }
     @Override
    public List listInasistencias(){
        return hd.listInasistencias();
    }
}
