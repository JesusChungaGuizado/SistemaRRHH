/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vista;

import com.google.gson.Gson;
import negocio.Personal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import servicio.PersonalServicio;

/**
 *
 * @author Jesus
 */
@Controller

public class PersonalController {

    @Autowired
    private PersonalServicio ps;

    @RequestMapping(value = "/listar.htm", method = RequestMethod.GET)
    public @ResponseBody
    String listarPersonal(Model model) {
        model.addAttribute("err", ps.ListarPersonal());
        return new Gson().toJson(ps.ListarPersonal());
    }

    @RequestMapping(value = "/buscar.htm", method = RequestMethod.POST)
    public @ResponseBody
    String buscarPersonal(@RequestParam("dni") String dni, Model model) {
        return new Gson().toJson(ps.buscarPersonal(dni));
    }

    @RequestMapping(value = "/eliminar.htm", method = RequestMethod.POST)
    public @ResponseBody
    String EliminarPersonal(@RequestParam("dni") String dni, Model model) {
        return new Gson().toJson(ps.EliminarPersonal(dni));
    }

    @RequestMapping(value = "/reporteExcel.htm", method = RequestMethod.GET)
    public @ResponseBody
    String GenerarReporte(Model model) {
        return new Gson().toJson(ps.ListarPersonalReporte());
    }

    @RequestMapping(value = "/registrar.htm", method = RequestMethod.POST)
    public @ResponseBody
    String RegistrarPersonal(
            @RequestParam("nombre") String nomb,
            @RequestParam("apellido") String ape,
            @RequestParam("sexo") String sex,
            @RequestParam("fechaNac") String fechNac,
            @RequestParam("document") String doc,
            @RequestParam("edad") int edad,
            @RequestParam("dirActual") String dirActual,
            @RequestParam("dirSunat") String dirSunat,
            @RequestParam("area") String area,
            @RequestParam("cargo") String cargo,
            @RequestParam("pension") String pens,
            @RequestParam("sueldo") double sueldo,
            @RequestParam("banco") String banco,
            @RequestParam("cuenta") String cuenta,
             @RequestParam("contrato") String tipoContrato,
              @RequestParam("horario") String horario,
            Model model
    ) {
        Personal em = new Personal(nomb, ape, edad, sex, fechNac, doc, dirActual, dirSunat, area, sueldo, cargo, banco, cuenta, pens,tipoContrato,horario);
        return new Gson().toJson(ps.registrarPersonal(em));

    }

    @RequestMapping(value = "/update.htm", method = RequestMethod.POST)
    public @ResponseBody
    String ActulizarPersonal(
            @RequestParam("cod") int id,
            @RequestParam("nombre") String nomb,
            @RequestParam("apellido") String ape,
            @RequestParam("sexo") String sex,
            @RequestParam("fechaNac") String fechNac,
            @RequestParam("document") String doc,
            @RequestParam("edad") int edad,
            @RequestParam("dirActual") String dirActual,
            @RequestParam("dirSunat") String dirSunat,
            @RequestParam("area") String area,
            @RequestParam("cargo") String cargo,
            @RequestParam("pension") String pens,
            @RequestParam("sueldo") double sueldo,
            @RequestParam("banco") String banco,
            @RequestParam("cuenta") String cuenta,
            @RequestParam("contrato") String tipoContrato,
              @RequestParam("horario") String horario,
            Model model
    ) {
        Personal em = new Personal(id, nomb, ape, edad, sex, fechNac, doc, dirActual, dirSunat, area, sueldo, cargo, banco, cuenta, pens,tipoContrato,horario);
        return new Gson().toJson(ps.ActualizarPersonal(em));

    }
      @RequestMapping(value = "/listarComboPersonal.htm", method = RequestMethod.GET)
    public @ResponseBody
    String listarComboPersonal(Model model) {
        return new Gson().toJson(ps.ListComboPersonal());
    }
}
