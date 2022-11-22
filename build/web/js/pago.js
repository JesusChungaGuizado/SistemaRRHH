import { Alerta, abrirModal, filtro, validateForm, abrirModalX, ComboSearchPersonal, ListElementComboSearchPersonal } from './Functions.js'
        $(document).ready(function () {
    filtro("tabla-horario");
    validateForm();
    ListElementComboSearchPersonal("buscador");
    ComboSearchPersonal("buscador");
    calcularPago();
   

});
function calcularPago() {
    let content_card = document.getElementById("content-card");
    let content_footer= document.getElementById("content-footer");
    $("#form-pago").submit(function (e) {
        e.preventDefault();
        console.log($("#form-pago").serialize());
        $.ajax({
            url: "calcularPago.htm",
            type: 'POST',
            data: $("#form-pago").serialize(), // Al atributo data se le asigna el objeto FormData.

            success: function (resultado) {
                let result = JSON.parse(resultado);
                let text = "";
                content_card.innerHTML = text;
                if (result !== null) {
                    $.each(result, function (indice, lista) {
                        if (indice===0){
                            text += ' <div><small class="font-weight-bold">NOMBRE: </small>' + lista[1].toUpperCase() +" "+ lista[2].toUpperCase()+ '</div>';
                            text += '       <div><small class="font-weight-bold">SUELDO: </small>S/ '+lista[3]+'</div>';
                            text += '      <div><small class="font-weight-bold">DÍAS TRABAJADOS: </small>30</div>';
                            text += '    <div><small class="font-weight-bold">FALTAS: </small>0</div>';
                            text += '    <div><small class="font-weight-bold">FONDO PENSIÓN: </small>'+lista[4]+'</div>';
                        }else{
                            if (lista[0]=="1"){
                               content_footer.innerHTML=' <div><small class="font-weight-bold">PAGO TOTAL: </small>S/ '+lista[1]+'</div>'; 
                               
                            }else if(lista[0]=="2"){
                                content_footer.innerHTML=' <div><small class="font-weight-bold">PAGO FERIADO: </small>S/ '+lista[1]+'</div>'; 
                           
                            }else{
                                content_footer.innerHTML=' <div><small class="font-weight-bold">DESCUENTOS: </small>S/ '+lista[1]+'</div>'; 
                           
                            }
                            
                        }
                    });

                    content_card.innerHTML =text;
                  
                } else {
                    Alerta("error", "Ocurrio un error inesperado");
                }



            }
        });
    });
}
