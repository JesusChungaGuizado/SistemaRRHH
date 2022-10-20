import { Alerta,abrirModal,filtro,validateForm } from './Functions.js';
$(document).ready(function () {
    validateForm();
    abrirModal();
    ListarCargos();
    ListCombo("listArea.htm", "area");
    ListCombo("listTipoCargos.htm", "cargo");
    RegistrarCargo();
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
                template.querySelectorAll('td')[3].lastElementChild.value = lista[0]

                var clone = template.cloneNode(true);
                fragment.appendChild(clone);
            });
            tabla_cargo.appendChild(fragment);
            deleteCargo();

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
                            'Succesfully!',
                            'Se registro correctamente',
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
                        url: "DeleteCargo.htm",
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