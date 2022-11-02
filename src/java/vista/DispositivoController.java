/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vista;

import com.google.gson.Gson;
import negocio.Dispositivo;
import negocio.Horario;
import negocio.Personal_Dispositivo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import servicio.DispositivoServicio;

/**
 *
 * @author Jesus
 */
@Controller
public class DispositivoController {
    @Autowired
    private DispositivoServicio ds;
     @RequestMapping(value = "/listEquipos.htm", method = RequestMethod.GET)
    public @ResponseBody
    String ListEquipos(Model model) {
        return new Gson().toJson(ds.listDispositivo());
    }

    @RequestMapping(value = "/registrarEquipo.htm", method = RequestMethod.POST)
    public @ResponseBody
    String registrarEquipo(
            @RequestParam("nombre") String nombre,
            @RequestParam("description") String descr,
            @RequestParam("cantidad") int cantidad, 
            @RequestParam("estado") int estado, 
            Model m) {
        Dispositivo d=new Dispositivo(nombre, descr, cantidad, estado);
        
        return new Gson().toJson(ds.registrarDispositivo(d));
    }

    @RequestMapping(value = "/buscarEquipo.htm", method = RequestMethod.POST)
    public @ResponseBody
    String buscarEquipo(
            @RequestParam("id") int id, Model m) {

        return new Gson().toJson(ds.searchDispositivo(id));
    }
    @RequestMapping(value = "/updateEquipo.htm", method = RequestMethod.POST)
    public @ResponseBody
    String updaterEquipo(
            @RequestParam("idEquipo") int id,
            @RequestParam("nombre") String nombre,
            @RequestParam("description") String descr,
            @RequestParam("cantidad") int cantidad, 
            @RequestParam("estado") int estado, 
            Model m) {
        Dispositivo d= new Dispositivo(id, nombre, descr, cantidad, estado);
        return new Gson().toJson(ds.updateDispositivo(d));
    }
    @RequestMapping(value = "/deleteEquipo.htm", method = RequestMethod.POST)
    public @ResponseBody
    String deleteEquipo(
            @RequestParam("id") int id, Model m) {
        return new Gson().toJson(ds.deleteDispositivo(id));
    }
    @RequestMapping(value = "/asignarEquipo.htm", method = RequestMethod.POST)
    public @ResponseBody
    String asignarEquipo(
            @RequestParam("idPersonal") int idPer,
            @RequestParam("idEquipo") int idEqui,
            @RequestParam("fechaE") String fechaE, 
            @RequestParam("fechaD") String fechaD, 
            Model m) {
        Personal_Dispositivo pd=new Personal_Dispositivo(idPer, idEqui, fechaE, fechaD);      
        return new Gson().toJson(ds.asignarDispositivo(pd));
    }
     @RequestMapping(value = "/listPersonalEquipo.htm", method = RequestMethod.GET)
    public @ResponseBody
    String listPersonalEquipo(Model model) {
        return new Gson().toJson(ds.listPersonalDispositivo());
    }
}
