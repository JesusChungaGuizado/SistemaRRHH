import { Alerta, abrirModal, filtro, validateForm } from './Functions.js'
$(document).ready(function () {
    ListarEquipos();
    abrirModal();
    filtro("tabla-horario");
    validateForm();
    RegistrarEquipo();
    UpdateEquipo();
});
function ListarEquipos() {
    $.ajax({
        url: "listEquipos.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            var tabla_cargo = document.querySelector("#tabla-horario");
            var template = document.querySelector("#template-horario").content;
            var fragment = document.createDocumentFragment();
            $.each(result, function (indice, lista) {
                template.querySelectorAll('td')[0].textContent = lista[0];
                template.querySelectorAll('td')[1].textContent = lista[1];
                template.querySelectorAll('td')[2].textContent = lista[2];
                template.querySelectorAll('td')[3].textContent = lista[3];
                template.querySelectorAll('td span')[0].textContent = lista[4];
                template.querySelectorAll('td button')[0].value = lista[0];
                template.querySelectorAll('td button')[1].value = lista[0];
                var clone = template.cloneNode(true);
                fragment.appendChild(clone);
            });
            tabla_cargo.appendChild(fragment);
            badgeEstate();
            SearchEquipo();
            DeleteEquipo();


        }
    });
}
function badgeEstate(){
    var estado=document.getElementsByClassName("estado");
    var result=document.getElementsByClassName("badge");
    $.each(result, function (indice, lista) {
                if(lista.textContent==1){
                    estado[indice].innerHTML='<span class="badge badge-pill badge-primary">Activo</span>';
                }else{
                       estado[indice].innerHTML='<span class="badge badge-pill badge-warning">No disponible</span>';
                } 
    });
}
function RegistrarEquipo() {
    
    $("#form-regis-equipos").submit(function (e) {
        e.preventDefault();
        console.log($("#form-regis-equipos").serialize());
        $.ajax({
            url: "registrarEquipo.htm",
            type: 'POST',
            data: $("#form-regis-equipos").serialize(), // Al atributo data se le asigna el objeto FormData.
            
            success: function (resultado) {
                if (JSON.parse(resultado) == "Registro Exitoso") {
                    Swal.fire(
                            'Succesfully!',
                            'Se registro correctamente',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "equipos.htm";
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
function SearchEquipo() {
   
    var botones = document.querySelectorAll(".update");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
           
            var dato = "id=" + lista.value;
            $.ajax({
                url: "buscarEquipo.htm",
                type: 'POST',
                data: dato,
                success: function (resul) {

                    var resultado = JSON.parse(resul);
                    console.log(resultado);
                    $("#myModal2").modal();
                    document.getElementById("idEquipo").value = resultado.idDispositivo;
                    document.getElementById("nombre2").value = resultado.nombre;
                    document.getElementById("cantidad2").value = resultado.cantidad;
                    document.getElementById("estado2").value = resultado.estado;
                    document.getElementById("description2").value = resultado.description;
                    
                }
            });
        });
    });
}
function UpdateEquipo() {
    var btnRegistro = document.getElementById("btn-update");
    $("#form-update-equipos").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "updateEquipo.htm",
            type: 'POST',
            data: $("#form-update-equipos").serialize(), // Al atributo data se le asigna el objeto FormData.
            success: function (resultado) {
                if (JSON.parse(resultado) == "Datos Actualizados") {
                    Swal.fire(
                            'Succesfully!',
                            'Se actualizó correctamente',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "equipos.htm";
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
function DeleteEquipo() {
    var botones = document.querySelectorAll(".delete");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
            var dato = "id=" + lista.value;
            Swal.fire({
                title: 'Are you sure?',
                text: "Se eliminará el dispositivo!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: "deleteEquipo.htm",
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
                                    parent.location.href = "equipos.htm";
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