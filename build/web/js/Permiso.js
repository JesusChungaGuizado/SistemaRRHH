import { Alerta, abrirModal, filtro, validateForm } from './Functions.js'
$(document).ready(function () {
     RegistrarPermiso();
    ListComboPersonal();
    ListarPermiso();
    abrirModal();
    filtro("tabla-permisos");
    validateForm();
});

//Gestion de Permisos
$("#idPersonal").select2({
   width: 'resolve' ,
     placeholder: 'Seleccione un empleado',
  allowClear: true
});

function ListComboPersonal(){
        var list_personal = document.querySelector("#idPersonal");
         $.ajax({
        url: "listarComboPersonal.htm",
        type: 'GET',
        success: function (result) {
            var resp = JSON.parse(result);
            console.log(resp)
            var text = "";
            text += '<option selected></option>';
            $.each(resp, function (indice, lista) {
                text += '<option value=' + lista[0] + ' >'+lista[3]+" - " + lista[2].toUpperCase() +" "+lista[1].toUpperCase() + '</option>';

            });
            list_personal.innerHTML = text;


        }
    });
}
function SearchPersonalPermiso() {
    
    var botones = document.querySelector("#btn-search");
    botones.addEventListener("click", (e) => {

        var dni = document.querySelector("#dni").value;
        var dato = "dni=" + dni;
        $.ajax({
            url: "buscar.htm",
            type: 'POST',
            data: dato,
            success: function (resul) {
                var resultado = JSON.parse(resul);
                if (resultado != null) {
                    console.log(resultado);
                    document.querySelector("#idPersonal").value = resultado.idEmpleado;
                    document.querySelector("#nombre").value = resultado.apellido + " " + resultado.nombre;
                } else {
                    document.querySelector("#nombre").value = "";
                    Alerta("warning", "Usuario no registrado");
                }
               
            }
        });
    })
}
function RegistrarPermiso() {
    $("#form-regis-permiso").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "registrarPermiso.htm",
            type: 'POST',
            data: $("#form-regis-permiso").serialize(), // Al atributo data se le asigna el objeto FormData.
            success: function (resultado) {
                if (JSON.parse(resultado) == "Registro Exitoso") {
                    Swal.fire(
                            'Succesfully!',
                            'Se registro correctamente',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "permisos.htm";
                        }
                    });
                } else {
                    Alerta("warning", JSON.parse(resultado));
                }

               
            }
        });
    });
}
function ListarPermiso() {
    $.ajax({
        url: "ListPermisos.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            console.log(result);
            var tabla_cargo = document.querySelector("#tabla-permisos");
            var template = document.querySelector("#template-permisos").content;
            var fragment = document.createDocumentFragment();
            $.each(result, function (indice, lista) {
                //console.log(lista)
                template.querySelectorAll('td')[0].textContent = lista[6];
                template.querySelectorAll('td')[1].textContent = lista[2] + " , " + lista[1];
                template.querySelectorAll('td')[2].textContent = lista[3];
                template.querySelectorAll('td')[3].textContent = lista[4];
                template.querySelectorAll('td')[4].textContent = lista[5];
                template.querySelectorAll('td')[5].lastElementChild.value = lista[0];
                var clone = template.cloneNode(true);
                fragment.appendChild(clone);
            });
            tabla_cargo.appendChild(fragment);
            deletePermiso();

        }
    });
}

function deletePermiso(){
   
    var botones = document.querySelectorAll(".delete");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
            var dato = "idPersonal=" + lista.value;
            console.log(dato);
            Swal.fire({
                title: 'Are you sure?',
                text: "Se eliminará elcargo seleccionado!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: " deletePermiso.htm",
                        type: 'POST', // Siempre que se envíen ficheros, por POST, no por GET.
                        data: dato, // Al atributo data se le asigna el objeto FormData.
                        success: function (resultado) { //si se resive algun una respuesta
                            console.log(resultado)
                            Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                    ).then((result) => {
                                if (result.isConfirmed) {
                                    parent.location.href = "permisos.htm";
                                }
                            });
                        }
                    });

                } else {
                    Alerta("info", "Se canceló la operación");
                }
            });

        });
    });
}