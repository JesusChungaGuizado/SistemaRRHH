import { Alerta, abrirModal, filtro, validateForm } from './Functions.js'
$(document).ready(function () {
    ListarCandidatos();
    abrirModal();
    filtro("tabla-candidato");
    validateForm();
    RegistrarCandidato();
    
});
function ListarCandidatos() {
    $.ajax({
        url: "listarCandidato.htm",
        type: 'GET',
        success: function (resultado) {
            var result = JSON.parse(resultado);
            var tabla_cargo = document.querySelector("#tabla-candidato");
            var template = document.querySelector("#template-candidato").content;
            var fragment = document.createDocumentFragment();
            console.log(result)
            $.each(result, function (indice, lista) {
                template.querySelectorAll('td')[0].textContent = lista[2];
                template.querySelectorAll('td')[1].textContent = lista[1];
                template.querySelectorAll('td')[2].textContent = lista[3];
                template.querySelectorAll('td')[3].textContent = lista[4];
                template.querySelectorAll('td a')[0].href = lista[5];
                var clone = template.cloneNode(true);
                fragment.appendChild(clone);
            });
            tabla_cargo.appendChild(fragment);
           


        }
    });
}
function RegistrarCandidato() {
    
    $("#form-regis-candidatos").submit(function (e) {
        e.preventDefault();
        
        $.ajax({
            url: "registrarCandidato.htm",
            type: 'POST',
            data: $("#form-regis-candidatos").serialize(), // Al atributo data se le asigna el objeto FormData.
            
            success: function (result) {
               
                let resultado=JSON.parse(result);
                if (resultado === "Registro Exitoso") {
                   
                    Swal.fire(
                            '¡Registrado!',
                            'Se agregó correctamente los datos',
                            'success'
                            ).then((result) => {
                        if (result.isConfirmed) {
                            parent.location.href = "candidatos.htm";
                        }
                    });
                } else {
                    Alerta("warning", resultado);
                }

             console.log(result)
                
            }
        });
    });
}