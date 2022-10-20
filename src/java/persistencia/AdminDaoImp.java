/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import java.util.ArrayList;
import java.util.List;
import negocio.Cargo;
import negocio.Permiso;
import org.springframework.stereotype.Service;

/**
 *
 * @author Jesus
 */
@Service
public class AdminDaoImp implements AdminDao {

    @Override
    public Object[] Login(String user, String pass) {
        String sql = "{call Login('" + user + "','" + pass + "')}";
        Object[] fil = (Object[]) Operacion.buscar(sql);
        if (fil != null) {
            return fil;
        }
        return null;
    }

    @Override
    public List ListAreas() {
        String sql = "{call ListAreas()}";
        return Operacion.listar(sql);
    }

    @Override
    public List buscarCargoXarea(int id) {
        String sql = "{call SearchCargo(" + id + ")}";
        return Operacion.listar(sql);
    }

    @Override
    public List ListCargos() {
        String sql = "{call ListarCargo()}";
        return Operacion.listar(sql);
    }

    @Override
    public List ListTipoCargo() {
        String sql = "{call ListTipoCargo()}";
        return Operacion.listar(sql);
    }

    @Override
    public String RegistrarCargo(Cargo c) {
        String sql = "{call RegistrarCargo('" + c.getNombreCargo() + "'," + c.getTipoCargo() + "," + c.getArea() + ",'" + c.getJefe() + "')}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public String DeleteCargo(int id) {
        String sql = "{call DeleteCargo(" + id + ")}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public List verDatos() {
        String sql = "{call CantidadPersonal(1)}";
        String sql2 = "{call CantidadPersonal(0)}";
        List datos = new ArrayList();
        datos.add(0, Operacion.buscar(sql));
        datos.add(1, Operacion.buscar(sql2));

        return datos;
    }

    @Override
    public List countPersonalByArea() {
        String sql = "{call CantPersonalByArea()}";
        return Operacion.listar(sql);
    }

    @Override
    public Object[] SearchCargoByName(String name) {
        String sql = "{call SearchCargoByName('"+name+"')}";
        return Operacion.buscar(sql);
    }

    @Override
    public String RegistrarPermiso(Permiso pe) {
        String sql = "{call RegistrarPermiso(" + pe.getIdPersonal() + ",'" + pe.getFechaInicio() + "','" +pe.getFechaFinal() + "','" +pe.getDescripcion() + "')}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public List ListPermisos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
