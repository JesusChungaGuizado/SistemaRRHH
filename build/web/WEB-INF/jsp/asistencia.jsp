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
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />

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
                    <h1>Asistencia</h1>
                </div>
                <!--  <div class="header-actions">
                      <button id="export-pdf">
                          <span  class="far fa-file-pdf" ></span>
                          Export PDF
                      </button>
                      <button id="export-excel">
                          <span  class="far fa-file-excel" ></span>
                          Export EXCEL
                      </button>
                  </div>-->
            </div>
            <div class="botones-crud">
                <div class="d-flex flex-wrap ">
                    <button type="button" class="btn btn-primary mb-3 " id="myBtn"><img src="img/plus.svg">Registrar Entrada</button>
                    <button type="button" class="btn btn-primary mb-3 ml-3" id="myBtn2"><img src="img/plus.svg">Registrar Salida</button>

                </div>
                <input class="form-control mb-3" id="myInput" type="text" placeholder="Search..">
            </div>
            <!-- The Modal de Regsitro -->
            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Nuevo Entrada</h4>
                            <button type="button" class="close" data-dismiss="modal">×</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                           
                            <form id="form-regis-horario" class="form-row needs-validation d-flex flex-column" novalidate >
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-12  d-flex flex-wrap justify-content-between align-items-center" >
                                        <select name="empleado" id="buscador" class=" custom-select form-control " style="width: 100%" required="true" >
                                            <option selected></option>
                                            <option value="M">74118013-CHUNGA GUIZADO JESUS ALBERTO</option>
                                            <option value="F">63112016-ROJAS MORALES LUIS GUSTAVO</option>
                                            <option value="M">74118013-CHUNGA GUIZADO MARIA</option>
                                        </select>
                                        <div class="invalid-feedback">Seleccione una opción</div>
                                    </div>
                                    
                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-6 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="horaInicio">Hora Inicio</label>
                                        <input type="datetime-local" id="horaInicio" name="horaInicio"  class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una hora de inicio</div>
                                    </div>
                                    <div class="col-sm-6 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="horaFinal">Hora Final</label>
                                        <input type="datetime-local" id="horaFinal" name="horaFinal"  class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una fecha de fin</div>
                                    </div>
                                </div>


                                <button type="submit" class="btn btn-primary input-item mr-auto"  >Registrar</button>

                            </form> 
                        </div>
                    </div>
                </div>
            </div>
            <!--Modal Actualizar-->
            
             <!-- The Modal de Regsitro -->
            <div class="modal fade" id="myModal2">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Nueva Salida</h4>
                            <button type="button" class="close" data-dismiss="modal">×</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form id="form-update-horario" class="form-row needs-validation d-flex flex-column" novalidate >
                                <input type="hidden" id="idHorario" name="idHorario"/>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-12 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="nombre">Nombre</label>
                                        <input type="text" id="nombre2" name="nombre"  minlength="3" class="form-control "  required="true"  />
                                        <div class="invalid-feedback">Ingrese nombre valido</div>
                                    </div>

                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-6 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="horaInicio">Hora Inicio</label>
                                        <input type="time" id="horaInicio2" name="horaInicio"  class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una hora de inicio</div>
                                    </div>
                                    <div class="col-sm-6 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="horaFinal">Hora Final</label>
                                        <input type="time" id="horaFinal2" name="horaFinal"  class="form-control "  required="true"  >
                                        <div class="invalid-feedback">Ingrese una fecha de fin</div>
                                    </div>
                                </div>


                                <button type="submit" class="btn btn-primary input-item mr-auto"  >Actualizar</button>

                            </form> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-sm-12 title-report">
                    <table class="table table-bordered table-hover table-light table-sm" id="datos_tabla">
                        <thead class="thead-dark">
                            <tr>
                                <th>Fecha</th>
                                <th>Empleado</th>
                                <th>Horario</th>
                                <th>Entrada</th>
                                <th>Horario</th>
                                <th>Tiempo registado</th>
                                <th colspan="2">Operaciones</th>
                            </tr>
                        </thead>
                        <tbody id="tabla-horario" >
                            <tr >
                                <td >17/10/2022</td>
                                <td >Jesus Chunga</td>
                                <td >08:00 AM - 05:00 PM</td>
                                <td >22:32</td>
                                <td >23:30</td>
                                <td >1h 1min</td>
                                <td> <button class="btn btn-primary update"  ><i class="fas fa-edit"></i></button></td>
                                <td> <button class="btn btn-danger delete"  ><i class="far fa-trash-alt"></i></button> </td>


                            </tr>

                        <template id="template-horario">
                            <tr >
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td> <button class="btn btn-primary update"  ><i class="fas fa-edit"></i></button></td>
                                <td> <button class="btn btn-danger delete"  ><i class="far fa-trash-alt"></i></button> </td>


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
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script type="module" src="js/Asistencia.js" ></script>



</html>