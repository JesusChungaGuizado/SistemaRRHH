import { Alerta, abrirModal, filtro, validateForm,ComboSearchPersonal,abrirModalX,ListElementComboSearchPersonal } from './Functions.js'
$(document).ready(function () {
     RegistrarPermiso();
    ListElementComboSearchPersonal("idPersonal");
    ListarPermiso();
    abrirModal();
    filtro("tabla-permisos");
    validateForm();
    ComboSearchPersonal("idPersonal");
    UpdatePermiso();
    abrirModalX("myBtn2", "myModal2");
});
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
    });
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
                            '¡Registrado!',
                            'Se agregó correctamente los datos',
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
                template.querySelectorAll('td')[1].textContent = lista[2].toUpperCase() + " , " + lista[1].toUpperCase();
                template.querySelectorAll('td')[2].textContent = lista[3];
                template.querySelectorAll('td')[3].textContent = lista[4];
                template.querySelectorAll('td')[4].textContent = lista[5];
                template.querySelectorAll('td button')[0].value = lista[7];
                template.querySelectorAll('td button')[1].value = lista[7];
                var clone = template.cloneNode(true);
                fragment.appendChild(clone);
            });
            tabla_cargo.appendChild(fragment);
            SearchPermiso();
            deletePermiso();

        }
    });
}
function UpdatePermiso() {
    var btnRegistro = document.getElementById("btn-update");
    $("#form-update-permiso").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "updatePermiso.htm",
            type: 'POST',
            data: $("#form-update-permiso").serialize(), // Al atributo data se le asigna el objeto FormData.
            success: function (resultado) {
                if (JSON.parse(resultado) == "Datos Actualizados") {
                    Swal.fire(
                             '¡Actualizado!',
                            'Los datos han sido actualizados correctamente',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "permisos.htm";
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
function deletePermiso(){
   
    var botones = document.querySelectorAll(".delete");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
            var dato = "idPersonal=" + lista.value;
            console.log(dato);
            Swal.fire({
                 title: 'Estás seguro(a)?',
                text: "Se eliminará el campo seleccionado!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar ',
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: " deletePermiso.htm",
                        type: 'POST', // Siempre que se envíen ficheros, por POST, no por GET.
                        data: dato, // Al atributo data se le asigna el objeto FormData.
                        success: function (resultado) { //si se resive algun una respuesta
                            console.log(resultado)
                            Swal.fire(
                                    '¡Eliminado!',
                                    'El campo seleccionado a sido eliminado',
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
function SearchPermiso() {
   
    var botones = document.querySelectorAll(".update");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
             $("#myModal2").modal();
            
            var dato = "id=" + lista.value;
             console.log(dato);
            $.ajax({
                url: "searchPermiso.htm",
                type: 'POST',
                data: dato,
                success: function (resul) {

                    var resultado = JSON.parse(resul);
                    console.log(resultado);
                    $("#myModal2").modal();
                    document.getElementById("idPermiso").value = resultado[0];
                     document.getElementById("namePersonal").value =resultado[7]+" - "+resultado[3].toUpperCase() +" "+resultado[2].toUpperCase();
                    document.getElementById("fechaInicio2").value = resultado[4];
                    document.getElementById("fechaFinal2").value = resultado[5];
                    document.getElementById("descripcion2").value = resultado[6];
                    
                    
                }
            });
        });
    });
}