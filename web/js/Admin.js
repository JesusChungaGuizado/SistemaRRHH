import { Alerta,abrirModal,filtro } from './Functions.js'
$(document).ready(function () {
    abrirModal();
    Login();
    VerDatos();
    ColaboradorXArea();
    filtro("tabla-cargos");
    ListBirthay();
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
                            label: 'Personal By Area',
                            data: y,
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.7)',
                            ],

                            // this dataset is drawn below
                            borderWidth: 1
                        }, {
                            type: 'line',
                            label: 'Line Dataset',
                            data: [10],
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

    const mostrarValores = (areas) => {

    };





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
                if (lista[6].toString() !== "M"){
                    text+=' <div class="card  ">';
                  text+='  <div class="card-header bg-info text-white font-weight-bold d-flex  border-bottom-0">';
                       text+=' <span>'+lista[5]+'</span>';
                       text+=' <img class="ml-auto" src="img/icons8-pin-15.png" />';
                   text+=' </div>';
                  text+='    <div style="height: 30px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-13.82,-10.34 C101.30,141.63 275.11,-38.95 500.27,38.00 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #17a2b8;"></path></svg></div>';
                  text+='  <div class="card-body pt-0">';
                    text+='    <div class="media border p-3">';
                       text+='     <img src="img/mujer.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">';
                       text+='     <div class="media-body">';
                        text+='        <h6>'+lista[0]+" "+lista[1]+' </h6>';
                         text+='       <div class="d-flex " >';
                          text+='         <small class="font-weight-bold mr-2"> DNI: </small>';
                           text+='          <small>'+lista[2]+'</small>';
                           text+='     </div>';
                            text+='    <div class="d-flex " >';
                            text+='       <small class="font-weight-bold mr-2"> ÁREA: </small>';
                            text+='         <small>'+lista[3]+'</small>';
                           text+='     </div>';
                           text+='     <div class="d-flex " >';
                            text+='       <small class="font-weight-bold mr-2"> FEC.NAC.: </small>';
                             text+='        <small>'+lista[4]+'</small>';
                             text+='   </div>';
                          text+='  </div>';
                      text+='  </div>';
                       
                        
                   text+='  </div>';

                text+=' </div>';
                }else{
                    text+=' <div class="card  ">';
                  text+='  <div class="card-header bg-primary text-white font-weight-bold d-flex border-bottom-0">';
                       text+=' <span>'+lista[5]+'</span>';
                       text+=' <img class="ml-auto" src="img/icons8-pin-15.png" />';
                   text+=' </div>';
                     text+='    <div style="height: 30px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-13.82,-10.34 C101.30,141.63 275.11,-38.95 500.27,38.00 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #007bff;"></path></svg></div>';
                 
                  text+='  <div class="card-body pt-0">';
                    text+='    <div class="media border p-3">';
                       text+='     <img src="img/varon.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">';
                       text+='     <div class="media-body">';
                        text+='        <h6>'+lista[0]+" "+lista[1]+' </h6>';
                         text+='       <div class="d-flex " >';
                          text+='         <small class="font-weight-bold mr-2"> DNI: </small>';
                           text+='          <small>'+lista[2]+'</small>';
                           text+='     </div>';
                            text+='    <div class="d-flex " >';
                            text+='       <small class="font-weight-bold mr-2"> ÁREA: </small>';
                            text+='         <small>'+lista[3]+'</small>';
                           text+='     </div>';
                           text+='     <div class="d-flex " >';
                            text+='       <small class="font-weight-bold mr-2"> FEC.NAC.: </small>';
                             text+='        <small>'+lista[4]+'</small>';
                             text+='   </div>';
                          text+='  </div>';
                      text+='  </div>';
                       
                        
                   text+='  </div>';

                text+=' </div>';
                }
                      
            });
            list_cumple.innerHTML=text;

        }
    });
}