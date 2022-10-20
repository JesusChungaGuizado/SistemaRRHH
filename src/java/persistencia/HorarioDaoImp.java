/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import java.util.List;
import negocio.Horario;
import org.springframework.stereotype.Service;

/**
 *
 * @author Jesus
 */
@Service
public class HorarioDaoImp implements HorarioDao {

    @Override
    public List listHorario() {
        String sql = "{call ListHorarios()}";
        return Operacion.listar(sql);

    }

    @Override
    public String registrarHorario(Horario h) {
        String sql = "{call RegistrarHorario('" + h.getNombreHorario() + "','" + h.getHoraInicio() + "','" + h.getHoraFin() + "')}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public String updateHorario(Horario h) {
        String sql = "{call UpdateHorario("+h.getIdHorario()+",'" + h.getNombreHorario() + "','" + h.getHoraInicio() + "','" + h.getHoraFin() + "')}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public String deleteHorario(int id) {
        String sql = "{call DeleteHorario(" + id + ")}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public Horario searchHorario(int id) {
        String sql = "{call SearchHorario(" + id + ")}";
        Object[] fil = (Object[]) Operacion.buscar(sql);
        if (fil != null) {
            Horario h = new Horario();
            h.setIdHorario((int) fil[0]);
            h.setNombreHorario(fil[1].toString());
            h.setHoraInicio(fil[2].toString());
            h.setHoraFin(fil[3].toString());
            return h;
        }
        return null;
    }

}
