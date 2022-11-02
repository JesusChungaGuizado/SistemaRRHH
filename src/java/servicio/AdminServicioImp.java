/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import negocio.Cargo;
import negocio.Permiso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import persistencia.AdminDao;

/**
 *
 * @author Jesus
 */
@Service
public class AdminServicioImp implements AdminServicio {

    @Autowired
    private AdminDao ad;

    @Override
    public Object[] Login(String user, String pass) {
        Object[] p = (Object[]) ad.Login(user, pass);
        if (p != null) {
            return p;
        }
        return null;
    }

    @Override
    public List ListAreas() {
        return ad.ListAreas();
    }

    @Override
    public List buscarCargoXarea(int id) {
        return ad.buscarCargoXarea(id);
    }

    @Override
    public List ListCargos() {
        return ad.ListCargos();
    }

    @Override
    public List ListTipoCargo() {
        return ad.ListTipoCargo();
    }

    @Override
    public String registrarCargo(Cargo p) {
        Object[] as = (Object[]) ad.SearchCargoByName(p.getNombreCargo());
        String msg;
        if (as != null) {
            msg = "Este cargo ya existe";
        } else {
            msg = ad.RegistrarCargo(p);
            if (msg == null) {
                msg = "Registro Exitoso";
            }
        }
        return msg;
    }

    @Override
    public String DeleteCargo(int id) {
        String msg = ad.DeleteCargo(id);
        if (msg == null) {
            msg = "Se eliminó el registro";
        }
        return msg;
    }

    @Override
    public List VerDatos() {
        return ad.verDatos();
    }

    @Override
    public List countPersonalByArea() {
        return ad.countPersonalByArea();
    }
     public String getFecha(String fe) {
        String date = "";
        try {
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat formato = new SimpleDateFormat("EEEEE dd MMMMM");
            Date fecha = formatter.parse(fe);
            date = formato.format(fecha);
        } catch (Exception e) {
        }

        return date;
    }
    @Override
    public List ListBirthays() {
        
         List listado = ad.ListBirthays();
        List data = new ArrayList();
      
        if (listado != null) {
            for (int i = 0; i < listado.size(); i++) {
                Object[] fil = (Object[]) listado.get(i);
                Object[] p= new Object[7];
                p[0]=fil[0].toString();
                 p[1]=fil[1].toString();
                  p[2]=fil[2].toString();
                   p[3]=fil[3].toString();
                    p[4]=fil[4].toString();
                    p[5]=getFecha(fil[4].toString());
                    p[6]=fil[5].toString();
              
                data.add(p);
            }
            return data;
        }
        return null;
    }

    

    @Override
    public String updateCargo(Cargo c) {
         String msg = ad.updateCargo(c);
        if (msg == null) {
            msg = "Datos Actualizados";
        }
        return msg;
    }

    @Override
    public Object[] searchCargo(int id) {
        Object[] fil = (Object[])ad.searchUpdateCargo(id);
        if (fil != null) {
          return fil;
        }
        return null;    
    }

}
