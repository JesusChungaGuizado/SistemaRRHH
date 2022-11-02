import { Alerta, abrirModal, filtro, validateForm, abrirModalX, ComboSearchPersonal, ListElementComboSearchPersonal } from './Functions.js'
        $(document).ready(function () {
    ListAsistencia();
    abrirModalX("myBtn", "myModal");
    abrirModalX("myBtn2", "myModal2");
    abrirModalX("myBtnVerFaltas","myModalFaltas");
    filtro("tabla-horario");
    validateForm();
    ListElementComboSearchPersonal("buscador");
    ComboSearchPersonal("buscador");
    RegistrarAsistencia();
    UpdateAsistencia();
    filtrarByFecha();
    ListInasistencias();

});
function ListInasistencias() {
    $.ajax({
        url: "listInasistencias.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            var lista_Faltas = document.querySelector("#list-faltas");
            var txt="";
            $.each(result, function (indice, lista) {
                console.log(lista);
            txt+='<li class="list-group-item">'+lista[1]+" - "+lista[3].toUpperCase()+" "+lista[2].toUpperCase()+'</li>';
            });
           lista_Faltas.innerHTML=txt;
        }
    });
}
function ListAsistencia() {
    $.ajax({
        url: "listAsistencia.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            console.log(result);
            var tabla_cargo = document.querySelector("#tabla-horario");
            var template = document.querySelector("#template-horario").content;
            var fragment = document.createDocumentFragment();
            tabla_cargo.innerHTML = "";
            $.each(result, function (indice, lista) {
                //console.log(lista)
                template.querySelectorAll('td')[0].textContent = lista.fecha;
                template.querySelectorAll('td')[1].textContent = lista.apellido + " , " + lista.nombre;
                template.querySelectorAll('td')[2].textContent = lista.horaInicio + " - " + lista.horaFin;
                template.querySelectorAll('td')[3].textContent = lista.entrada;
                template.querySelectorAll('td')[4].textContent = lista.salida;
                template.querySelectorAll('td')[5].textContent = lista.horasTrabajadas + " h";
                template.querySelectorAll('td')[6].lastElementChild.value = lista.idAsistencia;
                template.querySelectorAll('td')[7].lastElementChild.value = lista.idAsistencia;
                var clone = template.cloneNode(true);
                fragment.appendChild(clone);
            });
            tabla_cargo.appendChild(fragment);
            SearchAsistencia();
            DeleteAsistencia();

        }
    });
}
function RegistrarAsistencia() {

    $("#form-regis-asistencia").submit(function (e) {
        e.preventDefault();
        console.log($("#form-regis-asistencia").serialize());
        $.ajax({
            url: "registrarAsistencia.htm",
            type: 'POST',
            data: $("#form-regis-asistencia").serialize(), // Al atributo data se le asigna el objeto FormData.

            success: function (resultado) {
                if (JSON.parse(resultado) == "Registro Exitoso") {
                    Swal.fire(
                            'Succesfully!',
                            'Se registro correctamente',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "asistencia.htm";
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
function SearchAsistencia() {

    var botones = document.querySelectorAll(".update");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {

            var dato = "id=" + lista.value;
            $.ajax({
                url: "buscarAsistencia.htm",
                type: 'POST',
                data: dato,
                success: function (resul) {

                    var resultado = JSON.parse(resul);
                    console.log(resultado);
                    $("#myModal2").modal();
                    document.getElementById("idAsistencia").value = resultado[4];
                    document.getElementById("personal2").value = resultado[7] + " - " + resultado[6].toUpperCase() + " " + resultado[5].toUpperCase();
                    document.getElementById("fecha2").value = resultado[1];
                    document.getElementById("horaInicio2").value = resultado[2];
                    document.getElementById("horaSalida2").value = resultado[3];

                }
            });
        });
    });
}
function UpdateAsistencia() {
    var btnRegistro = document.getElementById("btn-update");
    $("#form-update-asistencia").submit(function (e) {
        console.log($("#form-update-asistencia").serialize())
        e.preventDefault();
        $.ajax({
            url: "updateAsistencia.htm",
            type: 'POST',
            data: $("#form-update-asistencia").serialize(), // Al atributo data se le asigna el objeto FormData.
            success: function (resultado) {
                if (JSON.parse(resultado) == "Datos Actualizados") {
                    Swal.fire(
                            'Succesfully!',
                            'Se actualizó correctamente',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "asistencia.htm";
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
function DeleteAsistencia() {
    var botones = document.querySelectorAll(".delete");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
            var dato = "id=" + lista.value;
            Swal.fire({
                title: 'Are you sure?',
                text: "Se eliminará el registro!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: "deleteAsistencia.htm",
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
                                    parent.location.href = "asistencia.htm";
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
function filtrarByFecha() {

    var boton = document.querySelector("#btn-filtro");

    boton.addEventListener("click", (e) => {
        var input = document.querySelector("#filtrofecha");
        var dato = "fecha=" + input.value;
        $.ajax({
            url: "filtrarByFecha.htm",
            type: 'POST',
            data: dato,
            success: function (resul) {

                var result = JSON.parse(resul);
                console.log(result)
                if (result !== null) {
//                    console.log(result);
                    var tabla_cargo = document.querySelector("#tabla-horario");
                    var template = document.querySelector("#template-horario").content;
                    var fragment = document.createDocumentFragment();
                    tabla_cargo.innerHTML = "";
                    $.each(result, function (indice, lista) {
                        //console.log(lista)
                        template.querySelectorAll('td')[0].textContent = lista.fecha;
                        template.querySelectorAll('td')[1].textContent = lista.apellido + " , " + lista.nombre;
                        template.querySelectorAll('td')[2].textContent = lista.horaInicio + " - " + lista.horaFin;
                        template.querySelectorAll('td')[3].textContent = lista.entrada;
                        template.querySelectorAll('td')[4].textContent = lista.salida;
                        template.querySelectorAll('td')[5].textContent = lista.horasTrabajadas + " h";
                        template.querySelectorAll('td')[6].lastElementChild.value = lista.idAsistencia;
                        template.querySelectorAll('td')[7].lastElementChild.value = lista.idAsistencia;

                        var clone = template.cloneNode(true);

                        fragment.appendChild(clone);
                    });
                    tabla_cargo.appendChild(fragment);
                    SearchAsistencia();
                    DeleteAsistencia();
                } 
                if(result==null){
                    ListAsistencia();
                }
                if(result!==null && result.length==0 ){
                    Alerta("warning","No se encontraron resultados");
                }
                
                

            }
        });
    });

}
