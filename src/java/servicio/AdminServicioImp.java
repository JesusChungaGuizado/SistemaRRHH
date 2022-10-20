/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

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

   

}
