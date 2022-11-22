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
                    <h1>Equipos</h1>
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
                <button type="button" class="btn btn-primary mb-3 " id="myBtn"><img src="img/plus.svg">Nuevo Equipo</button>
                <input class="form-control mb-3" id="myInput" type="text" placeholder="Buscar...">
            </div>
            <!-- The Modal de Regsitro -->
            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Nuevo Equipo</h4>
                            <button type="button" class="close" data-dismiss="modal">×</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form id="form-regis-equipos" class="form-row needs-validation d-flex flex-column" novalidate >

                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-12 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="nombre">Nombre</label>
                                        <input type="text" id="nombre" name="nombre"  minlength="3" class="form-control "  required="true"  />
                                        <div class="invalid-feedback">Ingrese nombre valido</div>
                                    </div>

                                </div>
                                <div class="row mb-3 flex-fill" >
                                    
                                    <div class="col-sm-6 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="cantidad">Cantidad</label>
                                        <input type="number" id="cantidad" name="cantidad"  class="form-control "  required="true" />
                                        <div class="invalid-feedback">Ingrese una cantidad válida</div>
                                    </div>
                                    
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="estado">Estado</label>
                                        <select name="estado" id="estado" class=" custom-select form-control "  required="true" >
                                            <option selected></option>
                                            <option value="1">Activo</option>
                                            <option value="0">No disponible</option>
                                        </select>
                                        <div class="invalid-feedback">Seleccione una opción</div>
                                    </div>

                               
                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-12 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="description">Descripción</label>
                                        <textarea  id="description" name="description" minlength="3"  class="form-control "  required="true"  ></textarea>
                                        <div class="invalid-feedback">Ingrese una descripcion</div>
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
                            <h4 class="modal-title">Actualizar Equipo</h4>
                            <button type="button" class="close" data-dismiss="modal">×</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                             <form id="form-update-equipos" class="form-row needs-validation d-flex flex-column" novalidate >
                                 <input type="hidden" id="idEquipo" name="idEquipo" />
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-12 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="nombre">Nombre</label>
                                        <input type="text" id="nombre2" name="nombre"  minlength="3" class="form-control "  required="true"  />
                                        <div class="invalid-feedback">Ingrese nombre valido</div>
                                    </div>

                                </div>
                                <div class="row mb-3 flex-fill" >
                                    
                                    <div class="col-sm-6 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="cantidad">Cantidad</label>
                                        <input type="number" id="cantidad2" name="cantidad"  class="form-control "  required="true" />
                                        <div class="invalid-feedback">Ingrese una cantidad válida</div>
                                    </div>
                                    
                                    <div class="col-sm-6  d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="estado">Estado</label>
                                        <select name="estado" id="estado2" class=" custom-select form-control "  required="true" >
                                            <option selected></option>
                                            <option value="1">Activo</option>
                                            <option value="0">No disponible</option>
                                        </select>
                                        <div class="invalid-feedback">Seleccione una opción</div>
                                    </div>

                               
                                </div>
                                <div class="row mb-3 flex-fill" >
                                    <div class="col-sm-12 d-flex flex-wrap justify-content-between align-items-center" >
                                        <label class="label-input mr-1" for="description">Descripción</label>
                                        <textarea  id="description2" name="description" minlength="3"  class="form-control "  required="true"  ></textarea>
                                        <div class="invalid-feedback">Ingrese una descripcion</div>
                                    </div>
                                </div>


                                <button type="submit" class="btn btn-primary input-item mr-auto"  >Actualizar</button>

                            </form> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class=" col-sm-12 title-report table-responsive-sm  ">
                    <table class="table table-bordered table-hover table-light table-sm" id="datos_tabla">
                        <thead class="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                                <th>Estado</th>
                                <th >Opciones</th>
                            </tr>
                        </thead>
                        <tbody id="tabla-horario" >

                        <template id="template-horario">
                            <tr >
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                 <td ></td>
                                 <td class="estado" ><span class="badge badge-primary"></span></td>
                                <td> <button class="btn btn-primary update"  ><i class="fas fa-edit"></i></button>
                                <button class="btn btn-danger delete"  ><i class="far fa-trash-alt"></i></button> </td>


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

<script type="module" src="js/Dispositivo.js" ></script>



</html>