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
public class Personal {
    private int idEmpleado;
    private String nombre;
    private String apellido;
    private int edad;
    private String sexo;  
    private String fechaNacimiento;
    private String dni;
    private String direccActual;
    private String direccSunat;
    private String area;  
    private double sueldo; 
    private String cargo;
    private String banco; 
    private String cuenta; 
    private String fondoPension;
    private String fechaIngreso;
    private String tipoContrato;
    private String horario;

    public Personal(int idEmpleado, String nombre, String apellido, int edad, String sexo, String fechaNacimiento, String dni, String direccActual, String direccSunat, String area, double sueldo, String cargo, String banco, String cuenta, String fondoPension,String tipoContrato,String horario) {
        this.idEmpleado = idEmpleado;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.direccActual = direccActual;
        this.direccSunat = direccSunat;
        this.area = area;
        this.sueldo = sueldo;
        this.cargo = cargo;
        this.banco = banco;
        this.cuenta = cuenta;
        this.fondoPension = fondoPension;
        this.tipoContrato=tipoContrato;
        this.horario=horario;
    }

    public Personal(String nombre, String apellido, int edad, String sexo, String fechaNacimiento, String dni, String direccActual, String direccSunat, String area, double sueldo, String cargo, String banco, String cuenta, String fondoPension,String tipoContrato,String horario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.direccActual = direccActual;
        this.direccSunat = direccSunat;
        this.area = area;
        this.sueldo = sueldo;
        this.cargo = cargo;
        this.banco = banco;
        this.cuenta = cuenta;
        this.fondoPension = fondoPension;
        this.tipoContrato=tipoContrato;
        this.horario=horario;
    }

    public Personal() {
    }

   

    public int getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(int idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getDireccActual() {
        return direccActual;
    }

    public void setDireccActual(String direccActual) {
        this.direccActual = direccActual;
    }

    public String getDireccSunat() {
        return direccSunat;
    }

    public void setDireccSunat(String direccSunat) {
        this.direccSunat = direccSunat;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public double getSueldo() {
        return sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getBanco() {
        return banco;
    }

    public void setBanco(String banco) {
        this.banco = banco;
    }

    public String getCuenta() {
        return cuenta;
    }

    public void setCuenta(String cuenta) {
        this.cuenta = cuenta;
    }

    public String getFondoPension() {
        return fondoPension;
    }

    public void setFondoPension(String fondoPension) {
        this.fondoPension = fondoPension;
    }

    public String getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(String fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getTipoContrato() {
        return tipoContrato;
    }

    public void setTipoContrato(String tipoContrato) {
        this.tipoContrato = tipoContrato;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }
    
    
}
