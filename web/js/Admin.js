import { Alerta,abrirModal,filtro } from './Functions.js'
$(document).ready(function () {
    abrirModal();
    Login();
    VerDatos();
    ColaboradorXArea();
    filtro("tabla-cargos");
  
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
                    Alerta("error", "No tiene permisos para acceder");
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
