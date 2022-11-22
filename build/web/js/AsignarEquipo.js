import { Alerta, abrirModal, filtro, validateForm,ComboSearchPersonal, ListElementComboSearchPersonal  } from './Functions.js';
$(document).ready(function () {
    abrirModal();
    filtro("tabla-horario");
    validateForm();
    ListElementComboSearchPersonal("buscador");
    ComboSearchPersonal("buscador");
    ComboSearchEquipo();
    ListElementComboSearchEquipos();
    ListarEquipos();
    AsignarEquipo();
    
});
function ComboSearchEquipo(){
    $("#buscador2").select2({
        width: 'resolve' ,
          placeholder: 'Seleccione un dispositivo',
       allowClear: true
    });
}
function ListElementComboSearchEquipos(){
        var list_equipo = document.querySelector("#buscador2");
         $.ajax({
        url: "listEquipos.htm",
        type: 'GET',
        success: function (result) {
            var resp = JSON.parse(result);
            console.log(resp)
            var text = "";
            text += '<option selected></option>';
            $.each(resp, function (indice, lista) {
                text += '<option value=' + lista[0] + ' >'+lista[0]+" - " + lista[1].toUpperCase() +" / "+lista[2].toUpperCase() + '</option>';

            });
            list_equipo.innerHTML = text;


        }
    });
}
function ListarEquipos() {
    $.ajax({
        url: "listPersonalEquipo.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            console.log(result)
            var tabla_cargo = document.querySelector("#tabla-horario");
            var template = document.querySelector("#template-horario").content;
            var fragment = document.createDocumentFragment();
            $.each(result, function (indice, lista) {
                 template.querySelectorAll('td')[0].textContent = lista[0];
                template.querySelectorAll('td')[1].textContent = lista[2].toUpperCase() + " , " +lista[1].toUpperCase()  ;
                template.querySelectorAll('td')[2].textContent = lista[3];
                template.querySelectorAll('td')[3].textContent = lista[4];
                template.querySelectorAll('td')[4].textContent = lista[5];
                var clone = template.cloneNode(true);
                fragment.appendChild(clone);
            });
            tabla_cargo.appendChild(fragment);
//            badgeEstate();
//            SearchEquipo();
//            DeleteEquipo();


        }
    });
}
function AsignarEquipo() {
    
    $("#form-asignar-equipo").submit(function (e) {
        e.preventDefault();
        console.log($("#form-asignar-equipo").serialize());
        $.ajax({
            url: "asignarEquipo.htm",
            type: 'POST',
            data: $("#form-asignar-equipo").serialize(), // Al atributo data se le asigna el objeto FormData.
            
            success: function (resultado) {
                if (JSON.parse(resultado) == "Registro Exitoso") {
                    Swal.fire(
                            '¡Registrado!',
                            'Se agregó correctamente los datos',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "asignar.htm";
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