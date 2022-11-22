/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vista;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import servicio.PagoServicioImp;

/**
 *
 * @author Jesus
 */
@Controller
public class PagoController {
    @Autowired PagoServicioImp ps;
    
    @RequestMapping(value = "/calcularPago.htm", method = RequestMethod.POST)
    public @ResponseBody
    String calcularPago( 
            @RequestParam("idPersonal") int id, 
            @RequestParam("operacion") String operacion, 
            Model model) {
        return new Gson().toJson(ps.calcularPago(id, operacion));
    }
}
