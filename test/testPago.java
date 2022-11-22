
import java.util.List;
import negocio.Pago;
import persistencia.AdminDaoImp;
import persistencia.PersonalDaoImp;
import servicio.AdminServicioImp;
import servicio.PagoServicioImp;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Jesus
 */
public class testPago {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        PagoServicioImp p=new PagoServicioImp();
        PersonalDaoImp pe=new PersonalDaoImp();
        AdminServicioImp a=new AdminServicioImp();
        Pago pago=new Pago(1800, "AFP");
        System.out.println(pago.PagoFeriado());
        System.out.println(pago.PagoTotal());
        System.out.println(pago.descuentos());
        System.out.println(pe.buscarPersonalById(1)[3]);
       
    }
    
}
