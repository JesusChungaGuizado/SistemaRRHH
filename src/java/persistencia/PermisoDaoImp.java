/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import java.util.List;
import negocio.Permiso;
import org.springframework.stereotype.Service;

/**
 *
 * @author Jesus
 */
@Service
public class PermisoDaoImp implements PermisoDao{
    
    @Override
    public String RegistrarPermiso(Permiso pe) {
        String sql = "{call RegistrarPermiso("+pe.getIdPersonal()+",'"+pe.getFechaInicio()+"','"+pe.getFechaFinal()+"','"+pe.getDescripcion()+"')}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public List ListPermisos() {
        String sql = "{call ListarPermisos()}";
        return Operacion.listar(sql);
    }

    @Override
    public String deletePermiso(int id) {
        String sql = "{call DeletePermiso("+id+")}";
        return Operacion.ejecutar(sql);
    }

    
    
}
