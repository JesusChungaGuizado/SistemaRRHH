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
            <div>
                <h1>Análisis</h1>
                
            </div>
            <div class="cards">
                <div class="card-single">
                    <div class="card-flex">
                        <div class="card-info">
                            <div class="card-head">
                                <span>Personal </span>
                                <small>Registrados</small>
                            </div>
                            <h2 class="datosMenu"></h2>

                        </div>

                        <div class="card-chart success">
                            <span class="fal fa-user"></span>
                        </div>
                    </div>
                </div>    

                <div class="card-single">
                    <div class="card-flex">
                        <div class="card-info">
                            <div class="card-head">
                                <span>Personal</span>
                                <small>De Baja</small>
                            </div>
                            <h2 class="datosMenu"></h2>

                        </div>
                        <div class="card-chart danger">
                            <span class="fal fa-user-slash"></span>
                        </div>
                    </div>
                </div>

 <div class="card-single">
                    <div class="card-flex">
                        <div class="card-info">
                            <div class="card-head">
                                <span>Personal</span>
                                <small>Inasistencias</small>
                            </div>
                            <h2 class="datosMenu"></h2>

                        </div>
                        <div class="card-chart danger">
                            <span class="fal fa-calendar-exclamation"></span>
                        </div>
                    </div>
                </div>


            </div>
           <!-- <div id='myDiv' style="width: 400px;height: 400px ;margin-top: 1rem">

            </div>-->
           
          <!-- <iframe class="mt-3" title="PowerBIVentas" width="100%" height="900" src="https://app.powerbi.com/view?r=eyJrIjoiZTA2NjYzZDktODdlYy00MDZjLWI2MmYtYWZjZDczNWRiMDY3IiwidCI6ImM0YTY2YzM0LTJiYjctNDUxZi04YmUxLWIyYzI2YTQzMDE1OCIsImMiOjR9&pageName=ReportSectionc0a9f2104a102b43feb2" frameborder="0" allowFullScreen="false"></iframe>
            <iframe  class="mt-3" title="RRHH_Diagrama - Page 1" width="100%" height="900" src="https://app.powerbi.com/view?r=eyJrIjoiNzUzNjc2NGItNDkxYi00NjUxLTk4MGUtYzQ1YWJlYWZhMGNjIiwidCI6ImM0YTY2YzM0LTJiYjctNDUxZi04YmUxLWIyYzI2YTQzMDE1OCIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
            -->   
            <div class="row mt-3" style="height:250px;">
                   <canvas style="border: 1px solid #ced4da;border-radius: 3px;background: #FFF" class="col-sm-12 col-lg-4 " id="myChart"></canvas>
                    <canvas style="border: 1px solid #ced4da;border-radius: 3px;background: #FFF " class="col-sm-12 col-lg-3 m-auto " id="myChart2"></canvas>
               <canvas style="border: 1px solid #ced4da;border-radius: 3px;background: #FFF " class="col-sm-12 col-lg-5 " id="myChart3"></canvas>
               
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
<script type="module" src="js/Admin.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</html>
