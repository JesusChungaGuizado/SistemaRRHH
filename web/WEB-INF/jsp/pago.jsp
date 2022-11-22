<%-- 
    Document   : pago
    Created on : 07-nov-2022, 16:36:39
    Author     : Jesus
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>RRHH</title>
        <link rel="stylesheet" href="styles/styleAdmin.css">
        <link
            rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
            />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
             <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="styles/toastr.css">
        <link rel="stylesheet" href="styles/stylePago.css">
    </head>
    <body>
          <% if (session.getAttribute("admin") == null) {
                response.sendRedirect("index.htm");
            }%>
        <!-- Menu navegacion -->
        <jsp:include page="MenuNavigation.jsp" />
        <main>
            <div class="page-header mb-3">
                <div>
                    <h1>Pagos</h1>
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
            <div class="row">
                <div class="col-sm-6 mb-3">
                     <form id="form-pago" class="form-row needs-validation d-flex flex-column card p-3" novalidate >
                                
                                 <div class="row flex-fill" >
                                    <div class="col-sm-12 mb-3  d-flex flex-wrap justify-content-between align-items-center" >
                                        <select name="idPersonal" id="buscador" class=" custom-select form-control " style="width: 100%" required="true" >
                                        </select>
                                        <div class="invalid-feedback">Seleccione una opción</div>
                                    </div>
                                     <div class="col-sm-12 mb-3 d-flex flex-wrap justify-content-between align-items-center" >
                                        <select name="operacion" id="operacion" class=" custom-select form-control " style="width: 100%" required="true" >
                                            <option selected></option>
                                            <option value="1">Pago Total</option>
                                            <option value="2">Pago Feriado</option>
                                            <option value="3">Descuento</option>
                                        </select>
                                        <div class="invalid-feedback">Seleccione una operación</div>
                                    </div>

                                </div>
                               


                                <button type="submit" class="btn btn-primary input-item mr-auto"  >Calcular</button>

                            </form>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-header bg-dark text-white font-weight-bold">Resumen</div>
                        <div id="content-card" class="card-body d-flex flex-column">
                            <div><small class="font-weight-bold">NOMBRE: </small></div>
                            <div><small class="font-weight-bold">SUELDO: </small></div>
                            <div><small class="font-weight-bold">DÍAS TRABAJADOS: </small></div>
                            <div><small class="font-weight-bold">FALTAS: </small></div>
                            <div><small class="font-weight-bold">FONDO PENSIÓN: </small></div>
                        </div>
                        <div  id="content-footer" class="card-footer">
                           
                        </div>
                     </div>
                    
                    
                </div>
            </div>
        </main>
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
<script src="https://unpkg.com/jspdf-invoice-template@1.4.0/dist/index.js"></script>
<script type="module" src="js/pago.js" ></script>
<script type="module" src="js/reporte.js" ></script>
</html>
