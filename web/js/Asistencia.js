import { Alerta, abrirModal, filtro, validateForm,abrirModalX } from './Functions.js'
$(document).ready(function () {
    //ListarHorarios();
    abrirModalX("myBtn","myModal");
    abrirModalX("myBtn2","myModal2");
    //filtro("tabla-horario");
    validateForm();
    //RegistrarHorario();
    //UpdateHorario();
    
});

$("#buscador").select2({
   width: 'resolve' ,
     placeholder: 'Seleccione un empleado',
  allowClear: true
});
