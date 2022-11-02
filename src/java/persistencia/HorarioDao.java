/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import java.util.List;
import negocio.Asistencia;
import negocio.Horario;

/**
 *
 * @author Jesus
 */
public interface HorarioDao {
    public List listHorario();
    public String registrarHorario(Horario h);
    public Horario searchHorario(int id);
    public String updateHorario(Horario id);
    public String deleteHorario(int id);
    public List listAsistencia();
    public String registrarAsistencia(Asistencia a);
    public Object[] searchAsistencia(int id);
    public String updateAsistencia(Asistencia a);
    public String deleteAsistencia(int id);
    public List FiltrarByFecha(String fecha);
    public List listInasistencias();
}
