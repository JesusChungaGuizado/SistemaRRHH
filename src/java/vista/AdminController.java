/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vista;

import com.google.gson.Gson;
import javax.servlet.http.HttpServletRequest;
import negocio.Cargo;
import negocio.Permiso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import servicio.AdminServicio;

/**
 *
 * @author Jesus
 */
@Controller
public class AdminController {

    @Autowired
    private AdminServicio as;

    @RequestMapping(value = "/Login.htm", method = RequestMethod.POST)
    public @ResponseBody
    String ValidateLogin(
        @RequestParam("user") String user,
        @RequestParam("pass") String pass, Model model, HttpServletRequest request) {
        Object[] admin = (Object[]) as.Login(user, pass);
        request.getSession().setAttribute("admin", admin);
        return new Gson().toJson(admin);
    }

    @RequestMapping(value = "/listArea.htm", method = RequestMethod.GET)
    @ResponseBody
    public String listArea(Model model) {
        return new Gson().toJson(as.ListAreas());
    }
    
    @RequestMapping(value = "/searchByArea.htm",method = RequestMethod.POST)
    @ResponseBody
     public String searchCargoByArea(@RequestParam("idArea")int id,Model model) {
        return new Gson().toJson(as.buscarCargoXarea(id));
    }
    
    @RequestMapping(value = "/listCargos.htm",method = RequestMethod.GET)
    @ResponseBody
    public String listCargos(Model model){
        return new Gson().toJson(as.ListCargos());
    }
    
    @RequestMapping(value = "/listTipoCargos.htm",method = RequestMethod.GET)
    @ResponseBody
    public String listTipoCargo(Model model){
        return new Gson().toJson(as.ListTipoCargo());
    }
    
    @RequestMapping(value = "/registrarCargo.htm", method = RequestMethod.POST)
    public @ResponseBody
    String RegistrarCargo(
            @RequestParam("nombre") String nombre,
            @RequestParam("area") int area,
            @RequestParam("cargo") int tipoCargo,
            @RequestParam("jefe") String jefe,
            Model model
    ) {
        Cargo c=new Cargo(nombre, tipoCargo, area, jefe);
        return new Gson().toJson(as.registrarCargo(c));

    }
    
    @RequestMapping(value = "/DeleteCargo.htm", method = RequestMethod.POST)
    public @ResponseBody
    String DeleteCargo( @RequestParam("id") int id, Model model) {
        return new Gson().toJson(as.DeleteCargo(id));
    }
    
    @RequestMapping(value = "/VerDatos.htm", method = RequestMethod.GET)
    public @ResponseBody
    String VerDatos(Model model) {
        return new Gson().toJson(as.VerDatos());
    }
    
    @RequestMapping(value = "/CountPersonalByArea.htm", method = RequestMethod.GET)
    public @ResponseBody
    String CountPersonalByArea(Model model) {
        return new Gson().toJson(as.countPersonalByArea());
    }
     @RequestMapping(value = "/listBirtahys.htm", method = RequestMethod.GET)
    @ResponseBody
    public String listBirtahys(Model model) {
        return new Gson().toJson(as.ListBirthays());
    }
    
    @RequestMapping(value = "/searchUpdateCargo.htm", method = RequestMethod.POST)
    public @ResponseBody
    String searchUpdateCargo( @RequestParam("id") int id, Model model) {
        return new Gson().toJson(as.searchCargo(id));
    }
      @RequestMapping(value = "/updateCargo.htm", method = RequestMethod.POST)
    public @ResponseBody
    String updateCargo(
            @RequestParam("idCargo") int id,
            @RequestParam("nombre") String nombre,
            @RequestParam("area") int area,
            @RequestParam("cargo") int tipoCargo,
            @RequestParam("jefe") String jefe,
            Model model
    ) {
        Cargo ca=new Cargo(id, nombre, tipoCargo, area, jefe);
        return new Gson().toJson(as.updateCargo(ca));

    }
     @RequestMapping(value = "/listRenovacion.htm", method = RequestMethod.GET)
    @ResponseBody
    public String listRenovacionContrato(Model model) {
        return new Gson().toJson(as.ListRenovacionContratos());
    }
}
