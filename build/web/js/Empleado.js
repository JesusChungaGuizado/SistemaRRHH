import { Alerta, abrirModal, filtro, validateForm } from './Functions.js'
$(document).ready(function () {
    abrirModal();
    RegistrarEmpleado();
    ListarPersonal();
    ListarPersonalReporte();
    UpdateEmpleado();
    filtro("tabla-personal");
    ListArea("area");
    SearchByArea("area", "cargo");
    exportPdf();
    validateForm();

});

function exportExcel(data) {
    $("#dvjson").excelexportjs({
        containerid: "dvjson",
        datatype: 'json',
        dataset: data,
        columns: getColumns(data)
    });
}
function exportPdf() {
    $("#export-pdf").click(function () {
        print();
    }
    );
}
function ListArea(area) {
    $.ajax({
        url: "listArea.htm",
        type: 'GET',
        success: function (result) {
            var list_area = document.getElementById(area);

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
function SearchByArea(area, cargo) {
    var select = document.getElementById(area);

    select.addEventListener('change',
            function () {
                var selectedOption = this.options[select.selectedIndex];
                console.log(selectedOption.value + ': ' + selectedOption.text);

                var dato = "idArea=" + selectedOption.value;
                $.ajax({
                    url: "searchByArea.htm",
                    type: 'POST',
                    data: dato,
                    success: function (resultado) {
                        var list_cargo = document.getElementById(cargo);

                        var resp = JSON.parse(resultado);
                        var text = "";
                        text += '<option selected></option>';
                        $.each(resp, function (indice, lista) {
                            text += '<option value=' + lista[0] + '>' + lista[1] + '</option>';

                        });
                        list_cargo.innerHTML = text;

                    }});


            }
    )
}
function ListarPersonalReporte() {
    $("#export-excel").click(function () {
        $.ajax({
            url: "reporteExcel.htm",
            type: 'GET',
            success: function (result) {
                var resultado = JSON.parse(result);
                exportExcel(resultado);
                console.log(resultado);
                Alerta("success", "Se descargó el archivo excel");
            }
        });
    });

}
function ListarPersonal() {
    $.ajax({
        url: "listar.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            console.log(result)
            var tabla_cliente = document.querySelector("#tabla-personal");
            var template = document.querySelector("#template-personal").content;
            var fragment = document.createDocumentFragment();
            console.log(template);
            $.each(result, function (indice, lista) {
                //console.log(lista)
               
                template.querySelectorAll('td')[0].textContent = lista[2];
                template.querySelectorAll('td')[1].textContent = lista[1].toUpperCase()+" "+lista[0].toUpperCase();
                
                template.querySelectorAll('td')[2].textContent = lista[3];
                template.querySelectorAll('td')[3].textContent = lista[4];
                template.querySelectorAll('td')[4].textContent = lista[5];
                var clone = template.cloneNode(true);
                fragment.appendChild(clone);
            });
            tabla_cliente.appendChild(fragment);
            DeleteEmpleado();
            SearchEmpleado();

        }
    });
}
function RegistrarEmpleado() {
    var btnRegistro = document.getElementById("btn-empleado");
    $("#form-regis-emp").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "registrar.htm",
            type: 'POST',
            data: $("#form-regis-emp").serialize(), // Al atributo data se le asigna el objeto FormData.
            success: function (resultado) {
                if (JSON.parse(resultado) == "Registro Exitoso") {
                    Swal.fire(
                            '¡Registrado!',
                            'Se agregó correctamente los datos',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "personal.htm";
                        }
                    });
                } else {
                    Alerta("error", JSON.parse(resultado));
                }

                console.log(JSON.parse(resultado));
            }
        });
    });
}
function SearchEmpleado() {
    ListArea("area2");
    SearchByArea("area2", "cargo2");
    var botones = document.querySelectorAll(".update");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
            var id = document.querySelectorAll(".dni")[indice];
            var dato = "dni=" + id.innerHTML;
            $.ajax({
                url: "buscar.htm",
                type: 'POST',
                data: dato,
                success: function (resul) {

                    var resultado = JSON.parse(resul);
                    console.log(resultado);
                    $("#myModal2").modal();
                    document.getElementById("cod2").value = resultado.idEmpleado;
                    document.getElementById("nombre2").value = resultado.nombre;
                    document.getElementById("apellido2").value = resultado.apellido;
                    document.getElementById("sexo2").value = resultado.sexo;
                    document.getElementById("fechaNac2").value = resultado.fechaNacimiento;
                    document.getElementById("document2").value = resultado.dni;
                    document.getElementById("edad2").value = resultado.edad;
                    document.getElementById("dirActual2").value = resultado.direccActual;
                    document.getElementById("dirSunat2").value = resultado.direccSunat;
                    document.getElementById("contrato2").value = resultado.tipoContrato;
                    document.getElementById("horario2").value = resultado.horario;
                    document.getElementById("area2").value = resultado.area;

                    document.getElementById("pension2").value = resultado.fondoPension;
                    document.getElementById("sueldo2").value = resultado.sueldo;
                    document.getElementById("banco2").value = resultado.banco;
                    document.getElementById("cuenta2").value = parseInt(resultado.cuenta);
                    

                    var dato = "idArea=" + document.getElementById("area2").value;
                    $.ajax({
                        url: "searchByArea.htm",
                        type: 'POST',
                        data: dato,
                        success: function (resultado) {
                            var list_cargo = document.getElementById("cargo2");

                            var resp = JSON.parse(resultado);
                            var text = "";

                            $.each(resp, function (indice, lista) {
                                text += '<option value=' + lista[0] + '>' + lista[1] + '</option>';

                            });
                            list_cargo.innerHTML = text;

                        }});
                    document.getElementById("cargo2").value = resultado.cargo.toString();

//                    
                }
            });
        });
    });
}
function UpdateEmpleado() {
    var btnRegistro = document.getElementById("btn-update");
    $("#form-update-emp").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "update.htm",
            type: 'POST',
            data: $("#form-update-emp").serialize(), // Al atributo data se le asigna el objeto FormData.
            success: function (resultado) {
                if (JSON.parse(resultado) == "Datos Actualizados") {
                    Swal.fire(
                           '¡Actualizado!',
                            'Los datos han sido actualizados correctamente',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "personal.htm";
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
function DeleteEmpleado() {
    var botones = document.querySelectorAll(".delete");
    $.each(botones, function (indice, lista) {
        lista.addEventListener("click", (e) => {
            var id = document.querySelectorAll(".dni")[indice];
            var dato = "dni=" + id.innerHTML;
            //console.log(id.innerHTML);
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
                        url: "eliminar.htm",
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
                                    parent.location.href = "personal.htm";
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