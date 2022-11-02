/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vista;

import com.google.gson.Gson;
import negocio.Asistencia;
import negocio.Horario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import servicio.HorarioServicio;

/**
 *
 * @author Jesus
 */
@Controller
public class HorarioController {

    @Autowired
    private HorarioServicio hs;

    @RequestMapping(value = "/listHorarios.htm", method = RequestMethod.GET)
    public @ResponseBody
    String ListHorario(Model model) {
        return new Gson().toJson(hs.listHorarios());
    }

    @RequestMapping(value = "/registrarHorario.htm", method = RequestMethod.POST)
    public @ResponseBody
    String registrarHorario(
            @RequestParam("nombre") String nomb,
            @RequestParam("horaInicio") String fechaI,
            @RequestParam("horaFinal") String fechaF, Model m) {
        Horario h = new Horario(nomb, fechaI, fechaF);
        return new Gson().toJson(hs.registrarHorario(h));
    }

    @RequestMapping(value = "/buscarHorario.htm", method = RequestMethod.POST)
    public @ResponseBody
    String buscarHorario(
            @RequestParam("id") int id, Model m) {

        return new Gson().toJson(hs.searchHorario(id));
    }
    @RequestMapping(value = "/updateHorario.htm", method = RequestMethod.POST)
    public @ResponseBody
    String updaterHorario(
            @RequestParam("idHorario")int id,
            @RequestParam("nombre") String nomb,
            @RequestParam("horaInicio") String fechaI,
            @RequestParam("horaFinal") String fechaF, Model m) {
        Horario h = new Horario(id,nomb, fechaI, fechaF);
        return new Gson().toJson(hs.updateHorario(h));
    }
    @RequestMapping(value = "/deleteHorario.htm", method = RequestMethod.POST)
    public @ResponseBody
    String deleteHorario(
            @RequestParam("id") int id, Model m) {

        return new Gson().toJson(hs.deleteHorario(id));
    }
    @RequestMapping(value = "/listAsistencia.htm", method = RequestMethod.GET)
    public @ResponseBody
    String ListAsistencia(Model model) {
        return new Gson().toJson(hs.listAsistencia());
    }
    
    @RequestMapping(value = "/registrarAsistencia.htm", method = RequestMethod.POST)
    public @ResponseBody
    String registrarAsistencia(
            @RequestParam("idPersonal") int idPersonal,
            @RequestParam("fecha") String fecha,
            @RequestParam("horaInicio") String horaI,
            @RequestParam("horaSalida") String horaS, Model m) {
          Asistencia a=new Asistencia(idPersonal, fecha, horaI, horaS);
          a.setHorasTrabajadas();
        return new Gson().toJson(hs.registrarAsistencia(a));
    }
    
    @RequestMapping(value = "/buscarAsistencia.htm", method = RequestMethod.POST)
    public @ResponseBody
    String buscarAsistencia(
            @RequestParam("id") int id, Model m) {

        return new Gson().toJson(hs.searchAsistencia(id));
    }
    @RequestMapping(value = "/updateAsistencia.htm", method = RequestMethod.POST)
    public @ResponseBody
    String updateAsistencia(
            @RequestParam("idAsistencia") int idAsis,
            @RequestParam("fecha") String fecha,
            @RequestParam("horaInicio") String horaI,
            @RequestParam("horaSalida") String horaS, Model m) {
          Asistencia a=new Asistencia();
          a.setIdAsistencia(idAsis);
          a.setFecha(fecha);
          a.setEntrada(horaI);
          a.setSalida(horaS);
          a.setHorasTrabajadas();
        return new Gson().toJson(hs.updateAsistencia(a));
    }
    @RequestMapping(value = "/deleteAsistencia.htm", method = RequestMethod.POST)
    public @ResponseBody
    String deleteAsistencia(
            @RequestParam("id") int id, Model m) {

        return new Gson().toJson(hs.deleteAsistencia(id));
    }
     @RequestMapping(value = "/filtrarByFecha.htm", method = RequestMethod.POST)
    public @ResponseBody
    String filtrarByFecha(
            @RequestParam("fecha") String fecha, Model m) {

        return new Gson().toJson(hs.FiltrarByFecha(fecha));
    }
    @RequestMapping(value = "/listInasistencias.htm", method = RequestMethod.GET)
    public @ResponseBody
    String ListInasistencias(Model model) {
        return new Gson().toJson(hs.listInasistencias());
    }
}
