import { Alerta, abrirModal, filtro } from './Functions.js'
        $(document).ready(function () {
    abrirModal();
    Login();
    VerDatos();
    ColaboradorXArea();
    filtro("tabla-cargos");
    ListBirthay();
    ListRenovacion();
    SexoPersonal();
    PersonalInaistencias();
});


function Login() {

    $("#form-login").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "Login.htm",
            type: 'POST',
            data: $("#form-login").serialize(), // Al atributo data se le asigna el objeto FormData.
            success: function (resultado) {
                console.log(JSON.parse(resultado));

                if (JSON.parse(resultado) == null) {
                    Alerta("warning", "No tiene permisos para acceder");
                } else {
                    parent.location.href = "home.htm";
                }

            }
        });
    });


}


function VerDatos() {
    $.ajax({
        url: "VerDatos.htm",
        type: 'GET',
        success: function (result) {
            var list_cards = document.querySelectorAll(".datosMenu");
            var resp = JSON.parse(result);
            console.log(resp);
            var text = "";
            $.each(list_cards, function (indice, lista) {
                lista.innerHTML = resp[indice];
            });
        }
    });
}

function  ColaboradorXArea() {
    var ctx = document.getElementById("myChart")
    var x = [];
    var y = [];
    $.ajax({
        url: "CountPersonalByArea.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            console.log(result);
            result.forEach(lista => {
                x.push(lista[0]);
                y.push(lista[1]);

            });
            const myChart = new Chart(ctx, {
                type: 'scatter',
                data: {
                    labels: x,
                    datasets: [{
                            type: 'bar',
                            label: 'Personal por Área',
                            data: y,
                             backgroundColor: [
                            
                              'rgba(1, 184, 170, 0.5)'
                            ],
                             borderColor: [
                           
                                'rgba(1, 184, 170, 0.5)'
                            ],

                            // this dataset is drawn below
                            borderWidth: 1
                        }]

                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });






        }
    });
}
function  SexoPersonal() {
    var ctx = document.getElementById("myChart2")
    var x = [];
    var y = [];
    $.ajax({
        url: "CountPersonalByArea.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            console.log(result);
            result.forEach(lista => {
                x.push(lista[0]);
                y.push(lista[1]);

            });
            const myChart = new Chart(ctx, {
                  type: 'doughnut',
                data: {
                    labels: ["Masculino","Femenino"],
                    datasets: [{
                         
                            data: [12,5],
                            backgroundColor: [
                                'rgba(1, 184, 170, 0.5)',
                                'rgba(55, 70, 73, 0.5'
                            ],
                             borderColor: [
                                'rgba(1, 184, 170, 0.5)',
                                'rgba(55, 70, 73, 0.5)'
                            ],
                            hoverOffset: 4
                        }]

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    

                },
                options: {
                      responsive: true,
                     plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Sexo'
                        }
                    }
                }
            });






        }
    });
}
function  PersonalInaistencias() {
    var ctx = document.getElementById("myChart3")
    var x = [];
    var y = [];
    $.ajax({
        url: "CountPersonalByArea.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            console.log(result);
            result.forEach(lista => {
                x.push(lista[0]);
                y.push(lista[1]);

            });
           
            const myChart = new Chart(ctx, {
                  type: 'line',
                data: {
                    labels: ["labels","labels","labels","labels","labels","labels","labels"],
                    datasets: [{
                           label: 'Inasistencias',
                            data: [65, 59, 80, 81, 56, 55, 40],
                            fill:false,
                            borderColor: 'rgba(1, 184, 170, 0.5)',
                            tension: 0.1,
                        }]

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    

                },
                options: {
                      responsive: true,
                     plugins: {
                        legend: {
                            position: 'top',
                        },
                        
                    }
                }
            });






        }
    });
}
function ListBirthay() {
    $.ajax({
        url: "listBirtahys.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            console.log(result);
            var list_cumple = document.querySelector("#list-cumple");
            var text = "";
            $.each(result, function (indice, lista) {
                console.log(lista)
                if (lista[6].toString() !== "M") {
                    text += ' <div class="card  ">';
                    text += '  <div class="card-header bg-info text-white font-weight-bold d-flex  border-bottom-0">';
                    text += ' <span>' + lista[5] + '</span>';
                    text += ' <img class="ml-auto" src="img/icons8-pin-15.png" />';
                    text += ' </div>';
                    text += '    <div style="height: 30px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-13.82,-10.34 C101.30,141.63 275.11,-38.95 500.27,38.00 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #17a2b8;"></path></svg></div>';
                    text += '  <div class="card-body pt-0">';
                    text += '    <div class="media border p-3">';
                    text += '     <img src="img/mujer.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">';
                    text += '     <div class="media-body">';
                    text += '        <h6>' + lista[0] + " " + lista[1] + ' </h6>';
                    text += '       <div class="d-flex " >';
                    text += '         <small class="font-weight-bold mr-2"> DNI: </small>';
                    text += '          <small>' + lista[2] + '</small>';
                    text += '     </div>';
                    text += '    <div class="d-flex " >';
                    text += '       <small class="font-weight-bold mr-2"> ÁREA: </small>';
                    text += '         <small>' + lista[3] + '</small>';
                    text += '     </div>';
                    text += '     <div class="d-flex " >';
                    text += '       <small class="font-weight-bold mr-2"> FEC.NAC.: </small>';
                    text += '        <small>' + lista[4] + '</small>';
                    text += '   </div>';
                    text += '  </div>';
                    text += '  </div>';


                    text += '  </div>';

                    text += ' </div>';
                } else {
                    text += ' <div class="card  ">';
                    text += '  <div class="card-header bg-primary text-white font-weight-bold d-flex border-bottom-0">';
                    text += ' <span>' + lista[5] + '</span>';
                    text += ' <img class="ml-auto" src="img/icons8-pin-15.png" />';
                    text += ' </div>';
                    text += '    <div style="height: 30px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-13.82,-10.34 C101.30,141.63 275.11,-38.95 500.27,38.00 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #007bff;"></path></svg></div>';

                    text += '  <div class="card-body pt-0">';
                    text += '    <div class="media border p-3">';
                    text += '     <img src="img/varon.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">';
                    text += '     <div class="media-body">';
                    text += '        <h6>' + lista[0] + " " + lista[1] + ' </h6>';
                    text += '       <div class="d-flex " >';
                    text += '         <small class="font-weight-bold mr-2"> DNI: </small>';
                    text += '          <small>' + lista[2] + '</small>';
                    text += '     </div>';
                    text += '    <div class="d-flex " >';
                    text += '       <small class="font-weight-bold mr-2"> ÁREA: </small>';
                    text += '         <small>' + lista[3] + '</small>';
                    text += '     </div>';
                    text += '     <div class="d-flex " >';
                    text += '       <small class="font-weight-bold mr-2"> FEC.NAC.: </small>';
                    text += '        <small>' + lista[4] + '</small>';
                    text += '   </div>';
                    text += '  </div>';
                    text += '  </div>';


                    text += '  </div>';

                    text += ' </div>';
                }

            });
            list_cumple.innerHTML = text;

        }
    });
}
function ListRenovacion() {
    $.ajax({
        url: "listRenovacion.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            console.log(result);
            var list_renovar = document.querySelector("#list-renovacion");
            var text = "";
            $.each(result, function (indice, lista) {
                console.log(lista)
                if (lista[5].toString() !== "M") {
                    text += ' <div class="col-sm-5  mb-3 list_card ">';
                    text += '    <div class="card">';
                    text += '      <div class="card-body d-flex">';
                    text += '  <img src="img/mujer.png" alt="John Doe" class="mr-3 mt-3  rounded-circle media border" style="width:60px;"/>';
                    text += '  <div class="d-flex flex-column justify-content-center">';
                    text += '      <h6>' + lista[0] + " " + lista[1] + '</h6>';
                    text += '      <div class="d-flex">';
                    text += '          <small class="font-weight-bold mr-2"> DNI: </small>';
                    text += '          <small>' + lista[2] + '</small>';
                    text += '      </div>';
                    text += '      <div class="d-flex">';
                    text += '          <small class="font-weight-bold mr-2"> Area: </small>';
                    text += '          <small>' + lista[3] + '</small>';
                    text += '      </div>';
                    text += '      <div class="d-flex">';
                    text += '          <small class="font-weight-bold mr-2"> Fin de Contrato: </small>';
                    text += '          <small>' + lista[4] + '</small>';

                    text += '      </div>';
                    text += '  </div>';
                    text += '</div>';
                    text += '</div>';
                    text += '  </div>';
                } else {
                    text += ' <div class="col-sm-5  mb-3 list_card ">';
                    text += '    <div class="card">';
                    text += '      <div class="card-body d-flex">';
                    text += '  <img src="img/varon.png" alt="John Doe" class="mr-3 mt-3  rounded-circle media border" style="width:60px;"/>';
                    text += '  <div class="d-flex flex-column justify-content-center">';
                    text += '      <h6>' + lista[0] + " " + lista[1] + '</h6>';
                    text += '      <div class="d-flex">';
                    text += '          <small class="font-weight-bold mr-2"> DNI: </small>';
                    text += '          <small>' + lista[2] + '</small>';
                    text += '      </div>';
                    text += '      <div class="d-flex">';
                    text += '          <small class="font-weight-bold mr-2"> Area: </small>';
                    text += '          <small>' + lista[3] + '</small>';
                    text += '      </div>';
                    text += '      <div class="d-flex">';
                    text += '          <small class="font-weight-bold mr-2"> Fin de Contrato: </small>';
                    text += '          <small>' + lista[4] + '</small>';
                    text += '      </div>';
                    text += '  </div>';
                    text += '</div>';
                    text += '</div>';
                    text += '  </div>';
                }
            });
            list_renovar.innerHTML = text;

        }
    });
}