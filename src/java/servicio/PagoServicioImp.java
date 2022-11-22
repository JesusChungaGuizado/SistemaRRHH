/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.util.ArrayList;
import java.util.List;
import negocio.Pago;
import negocio.Personal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import persistencia.PersonalDao;

/**
 *
 * @author Jesus
 */
@Service
public class PagoServicioImp {
    @Autowired
    private PersonalDao pd;
    
    public List calcularPago(int id,String operation){
       List lista=new ArrayList();
        Object[]p =pd.buscarPersonalById(id);
       double result=0;
        if (p != null) {
            Pago pago=new Pago((double)p[3],p[4].toString());
            switch (operation) {
                case "1":
                    result=(double)pago.PagoTotal();
                    break;
                case "2":
                    result=(double)pago.PagoFeriado();
                    break;
                default:
                    result=(double)pago.descuentos();
                    break;
            }
            lista.add(0,p);
        }
        Object[]oper=new Object[2];
        oper[0]=operation;
        oper[1]=result;
        lista.add(1,oper);
        
        return lista;
    }
   
}
