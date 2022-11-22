import { Alerta,abrirModal,filtro,validateForm } from './Functions.js';
$(document).ready(function () {
    validateForm();
    abrirModal();
    ListarCargos();
    ListCombo("listArea.htm", "area");
    ListCombo("listTipoCargos.htm", "cargo");
    ListCombo("listArea.htm", "area2");
    ListCombo("listTipoCargos.htm", "cargo2");
    RegistrarCargo();
    UpdateCargo();
    filtro("tabla-cargos");
  
});
function ListCombo(url, idList) {
    $.ajax({
        url: url,
        type: 'GET',
        success: function (result) {
            var list_area = document.getElementById(idList);

            var resp = JSON.parse(result);
            console.log(resp)
            var text = "";
            text += '<option selected></option>';
            $.each(resp, function (indice, lista) {
                text += '<option value=' + lista[0] + ' class="idArea" >' + lista[1] + '</option>';

            });
            list_area.innerHTML = text;


        }
    });
}
function ListarCargos() {
    $.ajax({
        url: "listCargos.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            console.log(result)
            var tabla_cargo = document.querySelector("#tabla-cargos");
            var template = document.querySelector("#template-cargos").content;
            var fragment = document.createDocumentFragment();
            $.each(result, function (indice, lista) {
                template.querySelectorAll('td')[0].textContent = lista[1];
                template.querySelectorAll('td')[1].textContent = lista[2];
                template.querySelectorAll('td')[2].textContent = lista[3];
                template.querySelectorAll('td button')[0].value = lista[0];
                template.querySelectorAll('td button')[1].value = lista[0];
                var clone = template.cloneNode(true);
                fragment.appendChild(clone);
            });
            tabla_cargo.appendChild(fragment);
            deleteCargo();
            SearchCargo();
        }
    });
}
function RegistrarCargo() {
    $("#form-regis-cargo").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "registrarCargo.htm",
            type: 'POST',
            data: $("#form-regis-cargo").serialize(), // Al atributo data se le asigna el objeto FormData.
            success: function (resultado) {
                if (JSON.parse(resultado) == "Registro Exitoso") {
                    Swal.fire(
                            '¡Registrado!',
                            'Se agregó correctamente los datos',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "cargo.htm";
                        }
                    });
                } else {
                    Alerta("warning", JSON.parse(resultado))
                }

                console.log(JSON.parse(resultado));
            }
        });
    });
}
function deleteCargo() {
    var botones = document.querySelectorAll(".delete");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
            var dato = "id=" + lista.value;
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
                        url: "DeleteCargo.htm",
                        type: 'POST', // Siempre que se envíen ficheros, por POST, no por GET.
                        data: dato, // Al atributo data se le asigna el objeto FormData.
                        success: function (resultado) { //si se resive algun una respuesta
                            // $('#formulario').trigger('reset');
                            Swal.fire(
                                    '¡Eliminado!',
                                    'El campo seleccionado a sido eliminado',
                                    'success'
                                    ).then((result) => {
                                if (result.isConfirmed) {
                                    parent.location.href = "cargo.htm";
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
function SearchCargo() {
   
    var botones = document.querySelectorAll(".update");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
             $("#myModal2").modal();
            
            var dato = "id=" + lista.value;
             console.log(dato);
            $.ajax({
                url: "searchUpdateCargo.htm",
                type: 'POST',
                data: dato,
                success: function (resul) {

                    var resultado = JSON.parse(resul);
                    console.log(resultado);
                    $("#myModal2").modal();
                    document.getElementById("idCargo").value = resultado[0];
                     document.getElementById("nombre2").value =resultado[1];
                    document.getElementById("cargo2").value = resultado[2];
                    document.getElementById("area2").value = resultado[3];
                    document.getElementById("jefe2").value = resultado[4];
                    
                    
                }
            });
        });
    });
}
function UpdateCargo() {
    var btnRegistro = document.getElementById("btn-update");
    $("#form-update-cargo").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "updateCargo.htm",
            type: 'POST',
            data: $("#form-update-cargo").serialize(), // Al atributo data se le asigna el objeto FormData.
            success: function (resultado) {
                if (JSON.parse(resultado) == "Datos Actualizados") {
                    Swal.fire(
                            '¡Actualizado!',
                            'Los datos han sido actualizados correctamente',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "cargo.htm";
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