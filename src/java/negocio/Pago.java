/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package negocio;

/**
 *
 * @author Jesus
 */
public class Pago {
    private double sueldo;
    private String pension;

    public Pago(double sueldo, String pension) {
        this.sueldo = sueldo;
        this.pension = pension;
    }
    public double getSueldo() {
        return sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }

    public String getPension() {
        return pension;
    }

    public void setPension(String pension) {
        this.pension = pension;
    }
    public double PagoTotal(){
        double Total= getSueldo() + PagoFeriado() - descuentos();
        return Total ;
    }
     public double PagoFeriado(){
        return 1*2*(double)(getSueldo()/30);
    }
      public double descuentos(){
        double desc = 0;
          switch (getPension()) {
              case "AFP":
                  desc=getSueldo()*0.10;
                  break;
              case "ONP":
                   desc=getSueldo()*0.13;
                  break;
          }
        return desc;
    }
}
