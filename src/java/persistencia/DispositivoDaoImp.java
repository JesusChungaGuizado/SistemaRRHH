/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import java.util.List;
import negocio.Dispositivo;
import negocio.Personal_Dispositivo;
import org.springframework.stereotype.Service;

/**
 *
 * @author Jesus
 */
@Service
public class DispositivoDaoImp implements DispositivoDao {

    @Override
    public List listDispositivo() {
        String sql = "{call ListarDispositivos()}";
        return Operacion.listar(sql);
       }

    @Override
    public String registrarDispositivo(Dispositivo d) {
         String sql = "{call RegistrarDispositivo('"+d.getNombre()+ "','"+d.getDescription()+"',"+d.getCantidad()+","+d.getEstado()+")}";
         return Operacion.ejecutar(sql);
    }

    @Override
    public String updateDispositivo(Dispositivo d) {
        String sql = "{call UpdateDispositivo("+d.getIdDispositivo()+",'"+d.getNombre()+ "','"+d.getDescription()+"',"+d.getCantidad()+","+d.getEstado()+")}";
         return Operacion.ejecutar(sql);
         }

    @Override
    public String deleteDispositivo(int id) {
         String sql = "{call DeleteDispositivo(" + id + ")}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public Dispositivo searchDispositivo(int id) {
         String sql = "{call SearchDispositivo(" + id + ")}";
        Object[] fil = (Object[]) Operacion.buscar(sql);
        if (fil != null) {
            Dispositivo h = new Dispositivo();
            h.setIdDispositivo((int)fil[0]);
            h.setNombre(fil[1].toString());
            h.setDescription(fil[2].toString());
            h.setCantidad((int)fil[3]);
            h.setEstado((int)fil[4]);
            return h;
        }
        return null;
    }

    @Override
    public String asignarDispositivo(Personal_Dispositivo ped) {
        String sql = "{call AsignarEquipo("+ped.getIdPesonal()+ ","+ped.getIdEquipo()+",'"+ped.getFechaEntrega()+"','"+ped.getFechaDevo()+"')}";
         return Operacion.ejecutar(sql);
    }
    
      @Override
     public List listPersonalDispositivo(){
        String sql = "{call ListPersonalDispositivo()}";
        return Operacion.listar(sql);
     }
}
