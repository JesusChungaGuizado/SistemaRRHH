
<input type="checkbox" name="" id="sidebar-toggle"/>
<div class="sidebar">
    <div class="sidebar-brand">
        <div class="brand-flex">
            <span class="logo">RRHH UNION</span>
            <div class="brand-icons">
                <span class="las la-bell" ></span>
                <span class="las la-user-circle" ></span>
            </div>
        </div>
    </div>

    <div class="sidebar-main">
        <div class="sidebar-user">
            <img  src="img/user.jpg" alt="">
            <%

                HttpSession sesion = request.getSession();
                if (sesion.getAttribute("admin") != null) {
                    Object[] fil2 = (Object[]) sesion.getAttribute("admin");
            %>
            <div>
                <h3><%= fil2[3]%> </h3>
                <span>DNI: <%= fil2[2]%></span>
            </div>

        </div>
        <%}%>
        <nav class="nav">
            <ul class="list">

                <li class="list__item menu-head">
                    <div class="list__button ">
                        <img src="img/inicio.svg"  class="list__img">   
                        <a href="home.htm" id="reporte" class="nav__link">Inicio</a>
                    </div>
                </li>
                <li class="list__item menu-head">
                    <div class="list__button">
                        <img src="img/users-solid.svg" class="list__img">
                        <a href="personal.htm" class="nav__link">Empleados</a>
                    </div>
                </li>
                <li class="list__item menu-head">
                    <div class="list__button">
                        <img src="img/icons8-genealogía-48.png" class="list__img">
                        <a href="cargo.htm" class="nav__link">Cargos</a>
                    </div>
                </li>

                <li class="list__item list__item--click ">
                    <div class="list__button list__button--click menu-head">
                        <img src="img/icons8-múltiples-dispositivos-50.png"  class="list__img">
                        <a href="#" class="nav__link">Equipos</a>
                        <img src="img/arrow.svg"  class="list__arrow">
                    </div>

                    <ul class="list__show ">
                        <li class="list__inside">
                            <a href="equipos.htm"  class="nav__link nav__link--inside">Equipos</a>
                        </li>
                        <li class="list__inside">
                            <a href="asignar.htm" class="nav__link nav__link--inside">Asignar</a>
                        </li>

                    </ul>


                </li>
                <li class="list__item menu-head">
                    <div class="list__button">
                        <img src="img/icons8-archivo.svg" style="color: #fff" class="list__img">
                        <a href="permisos.htm" class="nav__link">Permisos</a>
                    </div>
                </li>

                <li class="list__item list__item--click ">
                    <div class="list__button list__button--click menu-head">
                        <img src="img/icons8-clock.svg"  class="list__img">
                        <a href="#" class="nav__link">Horarios</a>
                        <img src="img/arrow.svg"  class="list__arrow">
                    </div>

                    <ul class="list__show ">
                        <li class="list__inside">
                            <a href="horario.htm"  class="nav__link nav__link--inside">Tipo Horarios</a>
                        </li>
                        <li class="list__inside">
                            <a href="asistencia.htm" class="nav__link nav__link--inside">Asistencias</a>
                        </li>
                        <li class="list__inside">
                            <a href="asistencia.htm" class="nav__link nav__link--inside">Faltas</a>
                        </li>
                    </ul>


                </li>




                <li class="list__item">
                    <div class="list__button menu-head">
                        <img src="img/sign-out-alt-solid.svg" class="list__img">
                        <a href="AdminControl?acc=LogOut" class="nav__link">Log Out</a>
                    </div>
                </li>
            </ul>
        </nav>


    </div>
</div>


<label for="sidebar-toggle" class="body-label"></label>

<div class="main-content">
    <div class="headerp">
        <div class="menu-toggle">
            <label for="sidebar-toggle">
                <span class="las la-bars"></span>
            </label>
        </div>
        <div class="header-icons">
            <span class="las la-search"></span>
            <span class="las la-bookmark"></span>
            <span class="las la-sms notification" id="noti">
                <span class="alerta" >1</span>
            </span>
        </div>
        <section id="mensaje">
            <a href="birthday.htm" ><span class="fas fa-birthday-cake mr-2"></span>Cumpleaños del mes</a>

        </section>
    </div>