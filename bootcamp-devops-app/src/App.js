// import logo from './logo.svg';
import iconkubernetes from './img/iconKubernetes.png';
import iconAzure from './img/iconazure.png';
import iconTerraform from './img/iconTerraform.png';
import iconApache from './img/iconApache.png';
import iconGCP from './img/iconGCP.png';
import iconAnsible from './img/iconAnsible.png';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* Navigation */}
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">BOOTCAMP DE DEVOPS ENGINEER</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#members">INTEGRANTES</a></li>
                        <li class="nav-item"><a class="nav-link" href="#topics">TEMAS</a></li>
                        <li class="nav-item"><a class="nav-link" href="#technologies">TECNOLOGÍAS</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Masthead */}
        <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">GRUPO Nº 03</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">Bienvenido a la App creada por el grupo Nº 03<br/> donde puede conocer detalles de los integrantes y las tecnologías que vamos a aprender en el bootcamp creado por Educación IT</p>
                        <a class="btn btn-primary btn-xl" href="#about">BIENVENIDOS</a>
                    </div>
                </div>
            </div>
        </header>
        {/* Group Members */}
        <section class="page-section bg-primary" id="members">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-black-75 mt-0">INTEGRANTES DEL GRUPO</h2>
                        <hr class="divider divider-dark" />
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-person-circle fs-1 text-black-75"></i></div>
                            <h3 class="text-black-75 h4 mb-2">Nicolas<br/> Barisci</h3>
                            <p class="mb-0">Soporte técnico</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-person-circle fs-1 text-black-75 "></i></div>
                            <h3 class="text-black-75 h4 mb-2">Franco Nicolás Carabelli</h3>
                            <p class="mb-0">Estudiante</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-person-circle fs-1 text-black-75 "></i></div>
                            <h3 class="text-black-75 h4 mb-2">Leandro Ezequiel Fretes</h3>
                            <p class="mb-0">Administración</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-person-circle fs-1 text-black-75 "></i></div>
                            <h3 class="text-black-75 h4 mb-2">Daniel Barrionuevo</h3>
                            <p class="mb-0">IT Desktop Tech</p>
                        </div>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-person-circle fs-1 text-black-75 "></i></div>
                            <h3 class="text-black-75 h4 mb-2">Johnny Sandoval</h3>
                            <p class="mb-0">Lider Tecnología</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-person-circle fs-1 text-black-75 "></i></div>
                            <h3 class="text-black-75 h4 mb-2">Rodrigo<br/>Riedel</h3>
                            <p class="mb-0">DevOps Engineer</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-person-circle fs-1 text-black-75 "></i></div>
                            <h3 class="text-black-75 h4 mb-2">Joaquín Mario Andrés Orue</h3>
                            <p class="mb-0">Cloud Engineer</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-person-circle fs-1 text-black-75 "></i></div>
                            <h3 class="text-black-75 h4 mb-2">Ariel<br/>Coronel</h3>
                            <p class="mb-0">PHP Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Topics */}
        <section class="page-section" id="topics">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">TEMAS TRATADOS EN BOOTCAMP</h2>
                <hr class="divider" />
                <p class="text-muted mb-0">El bootcamp se devide en 5 Fases</p>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">FASE 1<br/>SysAdmin</h3>
                            <p class="text-muted mb-0">Administra Linux y Windows Servers</p>
                            <p>Serás administrador de sistemas responsable de servidores, 
                            redes y seguridad de datos.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">FASE 2<br/>Cloud Computing</h3>
                            <p class="text-muted mb-0">Experto en la nube</p>
                            <p>Aprenderás a gestionar diferentes servicios de los principales proveedores de SaaS y PaaS.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">FASE 3<br/>DevOps</h3>
                            <p class="text-muted mb-0">Mindset y Automatizaciones</p>
                            <p>Aprenderás la filosofía de trabajo del DevOps, automatizando en la nube y la infraestructura como código.</p>
                        </div>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-6 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">FASE 4<br/>DevSecOps</h3>
                            <p class="text-muted mb-0">Seguridad + DevOps</p>
                            <p>Implementarás la seguridad de la compañía en la nube. Detectando y corrigiendo vulnerabilidades.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">FASE 5<br/>Empleabilidad</h3>
                            <p class="text-muted mb-0">Ingresando al mundo laboral</p>
                            <p>Al finalizar el entrenamiento, nuestro departamento de talento te asesorará para mejorar tu perfil profesional.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Technologies */}
        <section class="page-section bg-dark text-white" id="technologies">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mb-4 text-primary">TECNOLOGÍAS</h2>
                <p class="mb-4 text-primary-75">En este campus hemos aprnedido las siguientes tecnologías</p>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <i class="fa-brands fa-aws fa-2xl"></i>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <img src={iconGCP} class="text-primary"/>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <img src={iconAzure} class="text-primary"/>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <img src={iconApache} class="text-primary"/>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <i class="fa-brands fa-jenkins fa-2xl"></i>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <i class="fa-brands fa-github fa-2xl"></i>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <i class="fa-brands fa-docker fa-2xl"></i>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <img src={iconkubernetes} class="text-primary"/>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <img src={iconTerraform} class="text-primary"/>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <i class="fa-brands fa-linux fa-2xl"></i>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <i class="fa-brands fa-windows fa-2xl"></i>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 text-center">
                        <div class="mt-5 text-primary">
                            <img src={iconAnsible} class="text-primary"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Footer */}
        <footer class="bg-light py-5">
            <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2022 - Bootcamp de Educación IT</div></div>
        </footer>
    </div>
  );
}

export default App;
