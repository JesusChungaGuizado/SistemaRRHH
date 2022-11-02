/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.util.List;
import negocio.Dispositivo;
import negocio.Personal_Dispositivo;

/**
 *
 * @author Jesus
 */
public interface DispositivoServicio {
    public List listDispositivo();
    public String registrarDispositivo(Dispositivo d);
    public String updateDispositivo(Dispositivo d);
    public String deleteDispositivo(int id);
    public Dispositivo searchDispositivo(int id);
    public String asignarDispositivo(Personal_Dispositivo ped);
    public List listPersonalDispositivo();
}
