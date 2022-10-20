import { Alerta, abrirModal, filtro, validateForm } from './Functions.js'
$(document).ready(function () {
    ListarHorarios();
    abrirModal();
    filtro("tabla-horario");
    validateForm();
    RegistrarHorario();
    UpdateHorario();
    
});


function ListarHorarios() {
    $.ajax({
        url: "listHorarios.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            console.log(result)
             
            var tabla_cargo = document.querySelector("#tabla-horario");
            var template = document.querySelector("#template-horario").content;
            var fragment = document.createDocumentFragment();
            $.each(result, function (indice, lista) {
               
                template.querySelectorAll('td')[0].textContent = lista[1];
                template.querySelectorAll('td')[1].textContent = lista[2];
                template.querySelectorAll('td')[2].textContent = lista[3];
                template.querySelectorAll('td')[3].lastElementChild.value = lista[0]
                template.querySelectorAll('td')[4].lastElementChild.value = lista[0]

                var clone = template.cloneNode(true);
                fragment.appendChild(clone);
            });
            tabla_cargo.appendChild(fragment);
            DeleteHorario();
            SearchHorario();

        }
    });
}
function RegistrarHorario() {
    
    $("#form-regis-horario").submit(function (e) {
        e.preventDefault();
        console.log($("#form-regis-horario").serialize());
        $.ajax({
            url: "registrarHorario.htm",
            type: 'POST',
            data: $("#form-regis-horario").serialize(), // Al atributo data se le asigna el objeto FormData.
            
            success: function (resultado) {
                if (JSON.parse(resultado) == "Registro Exitoso") {
                    Swal.fire(
                            'Succesfully!',
                            'Se registro correctamente',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "horario.htm";
                        }
                    });
                } else {
                    Alerta("error", resultado);
                }

                console.log(JSON.parse(resultado));
                
            }
        });
    });
}
function SearchHorario() {
   
    var botones = document.querySelectorAll(".update");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
           
            var dato = "id=" + lista.value;
            $.ajax({
                url: "buscarHorario.htm",
                type: 'POST',
                data: dato,
                success: function (resul) {

                    var resultado = JSON.parse(resul);
                    console.log(resultado);
                    $("#myModal2").modal();
                    document.getElementById("idHorario").value = resultado.idHorario;
                    document.getElementById("nombre2").value = resultado.nombreHorario;
                    document.getElementById("horaInicio2").value = resultado.horaInicio;
                    document.getElementById("horaFinal2").value = resultado.horaFin;
                    
                }
            });
        });
    });
}
function UpdateHorario() {
    var btnRegistro = document.getElementById("btn-update");
    $("#form-update-horario").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "updateHorario.htm",
            type: 'POST',
            data: $("#form-update-horario").serialize(), // Al atributo data se le asigna el objeto FormData.
            success: function (resultado) {
                if (JSON.parse(resultado) == "Datos Actualizados") {
                    Swal.fire(
                            'Succesfully!',
                            'Se actualizó correctamente',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "horario.htm";
                        }
                    });
                } else {
                    Alerta("error", resultado);
                }

                console.log(JSON.parse(resultado));
            }
        });
    });
}
function DeleteHorario() {
    var botones = document.querySelectorAll(".delete");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
            var dato = "id=" + lista.value;
            Swal.fire({
                title: 'Are you sure?',
                text: "Se eliminará el horario!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: "deleteHorario.htm",
                        type: 'POST', // Siempre que se envíen ficheros, por POST, no por GET.
                        data: dato, // Al atributo data se le asigna el objeto FormData.
                        success: function (resultado) { //si se resive algun una respuesta
                            // $('#formulario').trigger('reset');
                            Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                    ).then((result) => {
                                if (result.isConfirmed) {
                                    parent.location.href = "horario.htm";
                                }
                            });
//                            Alerta("success", resultado).then((result)=>{
//                                parent.location.href = "personal.htm";
//                            });


                        }
                    });

                } else {
                    Alerta("info", "Se canceló la operación")
                }
            });

        });
    });
}