/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vista;

import com.google.gson.Gson;
import negocio.Permiso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import servicio.PermisoServicio;

/**
 *
 * @author Jesus
 */
@Controller
public class PermisoController {
    @Autowired PermisoServicio ps;
    
    @RequestMapping(value = "/registrarPermiso.htm", method = RequestMethod.POST)
    public @ResponseBody
    String RegistrarPermiso(
            @RequestParam("idPersonal") int idPersonal,
            @RequestParam("fechaInicio") String fechaInicio,
            @RequestParam("fechaFinal") String fechaFinal,
            @RequestParam("descripcion") String descripcion,
            Model model) {
        Permiso pe=new Permiso(idPersonal, fechaInicio, fechaFinal, descripcion);
        return new Gson().toJson(ps.RegistrarPermiso(pe));
    }
    
    @RequestMapping(value = "/ListPermisos.htm", method = RequestMethod.GET)
    public @ResponseBody
    String ListPermiso(Model model) {
        return new Gson().toJson(ps.ListPermisos());
    }
     @RequestMapping(value = "/deletePermiso.htm", method = RequestMethod.POST)
    public @ResponseBody
    String DeletePermiso(@RequestParam("idPersonal") int id, Model model) {
        return new Gson().toJson(ps.DeletePermiso(id));
    }
}
