function Alerta(estado, mensaje) {
    Command: toastr[estado](mensaje);
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}
function abrirModal() {
    $("#myBtn").click(function () {
        $("#form-regis-emp").trigger('reset');
        $("#myModal").modal();
    });
}
function abrirModalX(boton,mod) {
    $("#"+boton).click(function () {
        $("#form-regis-emp").trigger('reset');
        $("#"+mod).modal();
    });
}
function filtro(tabla) {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#"+tabla+" tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });

    });
}
//Validar Formularios
function validateForm() {
    (function () {

        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });

    })();
}
//Buscar y filtra personal
function ComboSearchPersonal(combo){
    $("#"+combo).select2({
        width: 'resolve' ,
          placeholder: 'Seleccione un empleado',
       allowClear: true
    });
}
//Lista elementos de comboSearchPersonal - parametro id del combo
function ListElementComboSearchPersonal(idPersonal){
        var list_personal = document.querySelector("#"+idPersonal);
         $.ajax({
        url: "listarComboPersonal.htm",
        type: 'GET',
        success: function (result) {
            var resp = JSON.parse(result);
            console.log(resp)
            var text = "";
            text += '<option selected></option>';
            $.each(resp, function (indice, lista) {
                text += '<option value=' + lista[0] + ' >'+lista[3]+" - " + lista[2].toUpperCase() +" "+lista[1].toUpperCase() + '</option>';

            });
            list_personal.innerHTML = text;


        }
    });
}
export {Alerta, abrirModal, filtro, validateForm,abrirModalX,ComboSearchPersonal,ListElementComboSearchPersonal};