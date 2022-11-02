<%-- 
    Document   : Navegation
    Created on : 12-sep-2022, 12:49:10
    Author     : Jesus
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>RRHH</title>
        <link rel="stylesheet" href="styles/styleAdmin.css">
        <link rel="stylesheet" href="styles/toastr.css">
        <link
            rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
            />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="styles/toastr.css">
    </head>
    <body>
        <% if (session.getAttribute("admin") == null) {
                 response.sendRedirect("index.htm");
             }%>
        <!-- Menu navegacion -->
        <jsp:include page="MenuNavigation.jsp" />
        <main >
            <div class="page-header mb-3">
                <div>
                    <h1>PERSONAL</h1>
                </div>
                <div class="header-actions">
                    <button id="export-pdf">
                        <span  class="far fa-file-pdf" ></span>
                        Export PDF
                    </button>
                    <button id="export-excel">
                        <span  class="far fa-file-excel" ></span>
                        Export EXCEL
                    </button>
                </div>
            </div>
            <div class="botones-crud">
                <button type="button" class="btn btn-primary mb-3 " id="myBtn"><img src="img/plus.svg">Nuevo Personal</button>
                <input class="form-control mb-3" id="myInput" type="text" placeholder="Search..">
            </div>
            <!-- The Modal de Regsitro -->
            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Nuevo Personal</h4>
                            <button type="button" class="close" data-dismiss="modal">×</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form id="form-regis-emp" class="form-row needs-validation d-flex flex-column " novalidate >
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-6 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="nombre">Nombre</label>
                                        <input type="text" id="nombre" name="nombre" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese un nombre válido</div>
                                    </div>
                                    <div class="col-sm-6 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="apellido">Apellido</label>
                                        <input type="text" id="apellido" name="apellido" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese un apellido válido</div>
                                    </div>
                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="sexo">Sexo</label>
                                        <select name="sexo" class="custom-select" required="true">
                                            <option selected></option>
                                            <option value="M">Masculino</option>
                                            <option value="F">Mujer</option>
                                        </select>
                                        <div class="invalid-feedback">Seleccione una opción</div>
                                    </div>
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="fechaNac">Fecha de Nacimiento</label>
                                        <input type="date" id="fechaNac" name="fechaNac" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una fecha válida</div>
                                    </div>
                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="document">N° Documento</label>
                                        <input type="number" id="document" name="document" min="0" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese un dni correcto</div>
                                    </div>
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="edad">Edad</label>
                                        <input type="text" id="edad" name="edad" minlength="2" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una edad válida</div>
                                    </div>

                                </div>
                                <div class="row mb-3 flex-fill">
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center " >
                                        <label class="label-input mr-1" for="dirActual">Dirección Actual</label>
                                        <input type="text" id="dirActual" name="dirActual" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una dirección</div>
                                    </div>


                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="dirSunat">Dirección SUNAT</label>
                                        <input type="text" id="dirSunat" name="dirSunat" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una dirección</div>
                                    </div>
                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="contrato">Tipo de Contrato</label>
                                        <select name="contrato" class="custom-select" required="true" id="contrato">
                                            <option selected></option>
                                            <option value="1">Contrato temporal</option>
                                            <option value="2">Contrato extensible</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center"  >
                                        <label class="label-input mr-1" for="horario">Tipo Horario</label>
                                        <select name="horario" class="custom-select" required="true" id="horario">
                                            <option selected></option>
                                            <option value="1">Full-Time</option>
                                            <option value="2">Part-Time-M</option>
                                            <option value="3">Part-Time-T</option>
                                        </select>
                                    </div>

                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="area">Área</label>
                                        <select name="area" class="custom-select" required="true" id="area">

                                        </select>
                                    </div>
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center"  >
                                        <label class="label-input mr-1" for="cargo">Cargo</label>
                                        <select name="cargo" class="custom-select" required="true" id="cargo">

                                        </select>
                                    </div>
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="pension">Fondo de Pensión</label>
                                        <input type="text" id="pension" name="pension" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una AFP u ONP</div>
                                    </div>
                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="sueldo">Sueldo</label>
                                        <input type="number" id="sueldo" name="sueldo" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">El campo debe ser número</div>
                                    </div>
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="banco">Banco</label>
                                        <select name="banco" class="custom-select" required="true">
                                            <option selected></option>
                                            <option value="BCP">BCP</option>
                                            <option value="Interbank">Interbank</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="cuenta">Cuenta</label>
                                        <input type="number" id="cuenta" name="cuenta" minlength="3" class="form-control "  required="true"  >
                                    </div>
                                </div>



                                <button type="submit" class="btn btn-primary input-item mr-auto"  id="btn-empleado" >Registrar</button>


                            </form> 
                        </div>
                    </div>
                </div>
            </div>
            <!-- The Modal  de Actualizar-->
            <div class="modal fade" id="myModal2">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Actualizar Personal</h4>
                            <button type="button" class="close" data-dismiss="modal">×</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form id="form-update-emp"  class="form-row d-flex flex-column needs-validation " novalidate >
                                <input type="hidden" id="cod2" name="cod"  class="form-control mb-3" value="" >
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-6 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="nombre">Nombre</label>
                                        <input type="text" id="nombre2" name="nombre" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese un nombre válido</div>
                                    </div>
                                    <div class="col-sm-6 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="apellido">Apellido</label>
                                        <input type="text" id="apellido2" name="apellido" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese un apellido válido</div>
                                    </div>
                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="sexo">Sexo</label>
                                        <select id="sexo2" name="sexo" class="custom-select" required="true">
                                            <option selected></option>
                                            <option value="M">Hombre</option>
                                            <option value="F">Mujer</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="fechaNac">Fecha de Nacimiento</label>
                                        <input type="date" id="fechaNac2" name="fechaNac"  class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una fecha válida</div>
                                    </div>
                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="document">N° Documento</label>
                                        <input type="number" id="document2" name="document" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese un dni válido</div>
                                    </div>
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="edad">Edad</label>
                                        <input type="number" id="edad2" name="edad" min="0" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese un nombre válido</div>
                                    </div>

                                </div>
                                <div class="row mb-3 flex-fill">
                                <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center " >
                                    <label class="label-input mr-1" for="dirActual">Dirección Actual</label>
                                    <input type="text" id="dirActual2" name="dirActual" minlength="3" class="form-control "  required="true"  >
                                    <div class="invalid-feedback">Ingrese una dirección válida</div>
                                </div>


                                <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center " >
                                    <label class="label-input mr-1" for="dirSunat">Dirección SUNAT</label>
                                    <input type="text" id="dirSunat2" name="dirSunat" minlength="3" class="form-control "  required="true"  >
                                    <div class="invalid-feedback">Ingrese una dirección válida</div>
                                </div>
                                    </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="contrato">Tipo de Contrato</label>
                                        <select name="contrato" class="custom-select" required="true" id="contrato2">
                                            <option selected></option>
                                            <option value="1">Contrato temporal</option>
                                            <option value="2">Contrato extensible</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center"  >
                                        <label class="label-input mr-1" for="horario">Tipo Horario</label>
                                        <select name="horario" class="custom-select" required="true" id="horario2">
                                            <option selected></option>
                                            <option value="1">Full-Time</option>
                                            <option value="2">Part-Time-M</option>
                                            <option value="3">Part-Time-T</option>
                                        </select>
                                    </div>

                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="area">Área</label>
                                        <select id="area2" name="area" class="custom-select" required="true" >


                                        </select>
                                    </div>
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center"  >
                                        <label  class="label-input mr-1" for="cargo">Cargo</label>
                                        <select id="cargo2" name="cargo" class="custom-select" required="true">

                                        </select>
                                    </div>
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="pension">Fondo de Pensión</label>
                                        <input type="text" id="pension2" name="pension" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese AFP u ONP</div>
                                    </div>
                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="sueldo">Sueldo</label>
                                        <input type="number" id="sueldo2" name="sueldo" min="0" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una cantidad valida</div>
                                    </div>
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="banco">Banco</label>
                                        <select id="banco2" name="banco" class="custom-select" required="true">
                                            <option selected></option>
                                            <option value="BCP">BCP</option>
                                            <option value="Interbank">Interbank</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-4  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="cuenta">Cuenta</label>
                                        <input type="number" id="cuenta2" name="cuenta" minlength="3" class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una cuenta válida</div>
                                    </div>
                                </div>



                                <button type="submit" class="btn btn-primary input-item mr-auto"  id="btn-update" >Actualizar</button>


                            </form> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-sm-12 title-report">
                    <table class="table table-bordered table-hover table-light table-sm" id="datos_tabla">
                        <thead class="thead-dark" >
                            <tr>
                                <th>Doc. Identidad</th>
                                <th >Nombre</th>
                                <th>Cargo</th>
                                <th>Area</th>
                                <th>F.Ingreso</th>
                                <th colspan="2" class="operation">Operación</th>
                            </tr>
                        </thead>
                        <tbody id="tabla-personal" >

                        <template id="template-personal">
                            <tr >
                                <td class="dni"></td>
                                <td class="nombre"></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button type="button" class="btn btn-primary update" ><i class="fas fa-edit"></i></button></td>
                                <td><button type="button" class="btn btn-danger delete"><i class="far fa-trash-alt"></i></button></td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                    <div id="dvjson"></div>
                </div>
            </div>

        </main>
    </div>
</body>

<script src="js/efectoNavAdmin.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

<script src="js/toastr.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<script src="js/excelexportjs.js"></script>
<script type="module" src="js/Empleado.js"></script>

</html>
