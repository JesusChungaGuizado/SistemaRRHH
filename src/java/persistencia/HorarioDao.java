/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import java.util.List;
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
}
