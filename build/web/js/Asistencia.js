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
    document.getElementById("export-pdf").addEventListener("click",()=> {
        generarPDF();
        console.log("click")
    });

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
                             '¡Registrado!',
                            'Se agregó la asistencia correctamente',
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
                            '¡Actualizado!',
                            'Asistencia actualizada correctamente',
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
                        url: "deleteAsistencia.htm",
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
function generarPDF(){
    var pdfObject = jsPDFInvoiceTemplate.default(props);
    console.log(pdfObject)

}
    var today = new Date();
    var now = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
    console.log(now);
    
    var props = {
    outputType:jsPDFInvoiceTemplate.OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "Reporte_Inasistencias",
    orientationLandscape: false,
    compress: true,
    logo: {
       src: "./img/Logo-Union.png",
        type: 'PNG', //optional, when src= data:uri (nodejs case)
        width: 26.66, //aspect ratio = width/height
        height: 26.66,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
    },
    stamp: {
        inAllPages: true, //by default = false, just in the last page
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
        type: 'JPG', //optional, when src= data:uri (nodejs case)
        width: 20, //aspect ratio = width/height
        height: 20,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
       
      
    },
    business: {
        name: "Construcciones Metalicas Union S A",
        address: "Jr.Rodolfo Beltrán Nro 591, Lima 15079",
        phone: "(01) 4238338",
        email: "union@cmusa.com.pe",
        website: "www.union.com.pe",
    },
    contact: {
        label: "Reporte:",
        name: "Inasistencias del mes",
       
    },
    invoice: {
        invGenDate: "Fecha: "+now,
        headerBorder: false,
        tableBodyBorder: false,
        header: [
          {
            title: "Dni", 
            style: { 
              width: 20 ,

              
            } 
          }, 
          { 
            title: "Nombre",
            style: {
              width: 80,
              
            } 
          }, 
          { 
            title: "#faltas",
            style: {
              width: 20,
              
            } 
          },{ 
            title: "fecha",
            style: {
              width: 50,
             
            } 
          },  
          
        ],
        table: [
            ["86320231","ROSAS ESTEFANY",1,"10/11/2022"],
            ["10101010","MARTINEZ OSCAR",1,"10/11/2022"],
            ["72301542","GARCIA PEDRO",1,"10/11/2022"],
            ["96325841","PERALES MARIA",1,"10/11/2022"],
            ["74118030","GARCIA CELESTE",1,"10/11/2022"],
            ["79632615","RAMOS SARA",1,"10/11/2022"]
        ]
        
        },
    footer: {
        text: "The invoice is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
};
