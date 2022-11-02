/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.sql.Connection;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import persistencia.AdminDaoImp;
import persistencia.Conexion;
import persistencia.HorarioDao;
import persistencia.HorarioDaoImp;
import servicio.AdminServicioImp;
import servicio.HorarioServicio;
import servicio.HorarioServicioImp;

/**
 *
 * @author Jesus
 */
public class prueba {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws ParseException {
        Conexion con = new Conexion();
        Connection cn = con.getConexion();
        if (cn != null) {
            System.out.println("Si hay conexion Shoes");
        } else {
            System.out.println("No hay conexion");

        }
        HorarioDao h = new HorarioDaoImp();
       
//        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
//        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat formatter = new SimpleDateFormat("hh:mm");
       
        Date fecha=formatter.parse("08:20:00");
        
        Date fecha2=formatter.parse("16:36:00");
        
        long antes=fecha.getTime();
        long des=fecha2.getTime();
//        System.out.println(format.format(fecha));
//        for (int i = 0; i < h.listAsistencia().size(); i++) {
//            Object[] ob = (Object[]) h.listAsistencia().get(i);
//            System.out.println(ob[0].toString());
//            System.out.println(ob[2]);
//            System.out.println(ob[3]);
//            System.out.println(ob[4]);
//            System.out.println(ob[5]);
//            System.out.println(ob[4]);
//        }
        long resta=des-antes;
 // Getting the current current time
   int seconds = (int) (resta / 1000) % 60;
    int minutes = (int) ((resta / (1000 * 60)) % 60);
    int hours = (int) ((resta / (1000 * 60 * 60)) % 24);
       
    Calendar c = Calendar.getInstance();
    c.set(Calendar.SECOND, seconds);
    c.set(Calendar.MINUTE, minutes);
    c.set(Calendar.HOUR_OF_DAY, hours);
   
        Date date = new Date();
 
       
        System.out.println("Current Time is : " + date);
  System.out.println("Entrada : " + antes);
   System.out.println("Salida : " + des);
        // set format in 12 hours
        SimpleDateFormat formatTime = new SimpleDateFormat("HH:mm ");
        // hh = hours in 12hr format
        // mm = minutes
        // aa = am/pm
 
        String time = formatTime.format(
            resta); // changing the format of 'date'
 
        // display time as per format
      
//          HorarioServicioImp hs=new HorarioServicioImp();
//        System.out.println(hs.getHora("08:00:00"));
  System.out.println("Hora calendario:"+formatTime.format(c.getTime()));
   AdminDaoImp adss =new AdminDaoImp();
   
     Object[] s =adss.searchUpdateCargo(2);
        System.out.println( s[4].toString() );
        
        try {
          
        } catch (Exception e) {
            System.out.println( e);
        }
    }
   
   
}
