/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import java.util.ArrayList;
import java.util.List;
import negocio.Candidato;
import negocio.Personal;
import org.springframework.stereotype.Service;

/**
 *
 * @author Jesus
 */
@Service
public class PersonalDaoImp implements PersonalDao {

    @Override
    public String registrarPersonal(Personal p) {
        String sql = "{call RegistrarPersonal('" + p.getNombre() + "','" + p.getApellido() + "'," + p.getEdad() + ",'" + p.getSexo() + "','" + p.getFechaNacimiento() + "','" + p.getDni() + "','" + p.getDireccActual() + "','" + p.getDireccSunat() + "','" + p.getArea() + "'," + p.getSueldo() + ",'" + p.getCargo() + "','" + p.getBanco() + "','" + p.getCuenta() + "','" + p.getFondoPension() + "','" + p.getTipoContrato() + "','" + p.getHorario() + "')}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public Personal buscarPersonal(String dni) {
        String sql = "{call SearchPersonalByDni('" + dni + "')}";
        Object[] fil = (Object[]) Operacion.buscar(sql);
        if (fil != null) {
            Personal p = new Personal();
            p.setIdEmpleado((int) fil[0]);
            p.setNombre(fil[1].toString());
            p.setApellido(fil[2].toString());
            p.setEdad((int) fil[3]);
            p.setSexo(fil[4].toString());
            p.setFechaNacimiento(fil[5].toString());
            p.setDni(fil[6].toString());
            p.setDireccActual(fil[7].toString());
            p.setDireccSunat(fil[8].toString());
            p.setArea(fil[9].toString());
            p.setSueldo((double) fil[10]);
            p.setCargo(fil[11].toString());
            p.setBanco(fil[12].toString());
            p.setCuenta(fil[13].toString());
            p.setFondoPension(fil[14].toString());
            p.setTipoContrato(fil[18].toString());
            p.setHorario(fil[19].toString());
            return p;
        }
        return null;
    }

    @Override
    public Object[] buscarPersonalById(int id) {
        String sql = "{call SearchPersonal(" + id + ")}";
        Object[] fil = (Object[]) Operacion.buscar(sql);
        if (fil != null) {
            return fil;
        }
        return null;
    }

    @Override
    public String ActualizarPersonal(Personal p) {
        String sql = "{call UpdatePersonal(" + p.getIdEmpleado() + ",'" + p.getNombre() + "','" + p.getApellido() + "'," + p.getEdad() + ",'" + p.getSexo() + "','" + p.getFechaNacimiento() + "','" + p.getDni() + "','" + p.getDireccActual() + "','" + p.getDireccSunat() + "'," + p.getArea() + "," + p.getSueldo() + "," + p.getCargo() + ",'" + p.getBanco() + "','" + p.getCuenta() + "','" + p.getFondoPension() + "','" + p.getTipoContrato() + "','" + p.getHorario() + "')}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public String EliminarPersonal(String dni) {
        String sql = "{call DeletePersonal('" + dni + "')}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public List listarPersonal() {
        String sql = "{call ListarPersonal()}";
        return Operacion.listar(sql);
    }

    @Override
    public List listaPersonalReporte() {
        String sql = "{call ListarPersonalReporte()}";
        List listado = Operacion.listar(sql);
        List data = new ArrayList();
        Personal p;
        if (listado != null) {
            for (int i = 0; i < listado.size(); i++) {
                Object[] fil = (Object[]) listado.get(i);
                p = new Personal();
                p.setIdEmpleado((int) fil[0]);
                p.setNombre(fil[1].toString());
                p.setApellido(fil[2].toString());
                p.setEdad((int) fil[3]);
                p.setSexo(fil[4].toString());
                p.setFechaNacimiento(fil[5].toString());
                p.setDni(fil[6].toString());
                p.setDireccActual(fil[7].toString());
                p.setDireccSunat(fil[8].toString());
                p.setArea(fil[9].toString());
                p.setSueldo((double) fil[10]);
                p.setCargo(fil[11].toString());
                p.setBanco(fil[12].toString());
                p.setCuenta(fil[13].toString());
                p.setFondoPension(fil[14].toString());
                p.setFechaIngreso(fil[15].toString());
                data.add(p);
            }
            return data;
        }
        return null;
    }

    @Override
    public List ListComboPersonal() {
        String sql = "{call  ListPersonalSearch()}";
        return Operacion.listar(sql);
    }

    @Override
    public String RegistrarCandidato(Candidato c) {
        String sql = "{call RegistrarCandidato('" + c.getNombre() + "','" + c.getDni() + "','" + c.getCelular() + "','" + c.getPuesto() + "','" + c.getLinkedin() + "')}";
        return Operacion.ejecutar(sql);
    }

    @Override
    public List ListCandidato() {
        String sql = "{call  ListCandidato()}";
        return Operacion.listar(sql);
    }

    @Override
    public Candidato buscarCandidatoByDni(String dni) {
        String sql = "{call SearchCandidatoByDni('" + dni + "')}";
        Object[] fil = Operacion.buscar(sql);
        if (fil != null) {
            Candidato c = new Candidato();
            c.setIdCandidato(fil[0].toString());
            c.setNombre(fil[1].toString());
            c.setDni(fil[2].toString());
            c.setCelular(fil[3].toString());
            c.setPuesto(fil[4].toString());
            c.setLinkedin(fil[5].toString());
            return c;
        }
        return null;
    }

}
