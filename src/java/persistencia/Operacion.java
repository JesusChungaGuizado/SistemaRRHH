/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Jesus
 */
public class Operacion {

    public static String ejecutar(String sql) {
        String msg = null;
        try {
            Connection cn = new Conexion().getConexion();
            if (cn == null) {
                msg = "No hay Conexion con la Base de Datos";
            } else {
                //Statement st = cn.createStatement();
                CallableStatement cs=cn.prepareCall(sql);
                //st.executeUpdate(sql);
                cs.execute();
                cn.close();
            }
        } catch (SQLException e) {
            msg = e.getMessage();
        }
        return msg;
    }

    public static List listar(String sql) {
        List lista = new ArrayList();
        try {
            Connection cn = new Conexion().getConexion();
            if (cn == null) {
                lista = null;
            } else {
                CallableStatement cs=cn.prepareCall(sql);
                ResultSet rs = cs.executeQuery();
                ResultSetMetaData rm = rs.getMetaData();
                int numCol = rm.getColumnCount();
                while (rs.next()) {
                    Object[] fila = new Object[numCol];
                    for (int i = 0; i < numCol; i++) {
                        fila[i] = rs.getObject(i + 1);
                    }
                    lista.add(fila);
                }
                cn.close();
            }
        } catch (SQLException e) {
            lista = null;
        }
        return lista;
    }

    public static Object[] buscar(String sql) {
        Object[] fila = null;
        List lista = listar(sql);
        if (lista != null) {
            if (lista.size() > 0) {
                fila = (Object[]) lista.get(0);
            }
        }
        return fila;
    }
//    public static int totalCategoria(String sql){
//        int total=0; 
//        List lista= listar(sql);
//        total=lista.size();
//        return total;
//    }
    public static Object[] ObtenerUltimoPedido(String sql){
        List lista= listar(sql);
        Object[] codPedido = null;
         if (lista != null) {
             if (lista.size() > 0) {
                codPedido = (Object[]) lista.get(0);
            }
            
        }
        return codPedido;
    }
    
}
