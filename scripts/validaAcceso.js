//autentico usuarios con acceso a gestiones

var dataSesion = sessionStorage.getItem('UserId'); //obtengo la sesion valida
var data = JSON.parse(localStorage.getItem('dataInicial')); //obtengo informacion


var usuario = data.users.find(u => u.UserId == dataSesion) || false;
if (!usuario.conectado) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No tiene una sesion activa, inicie sesion nuevamente.',
        showDenyButton: true,
        confirmButtonText: 'Ir a Login',
        denyButtonText: `Ir a Inicio`,
      }).then((result) => {
        if (result.isConfirmed) {
            location.href ="login.html";
        } else if (result.isDenied) {
            location.href ="../index.html";
        }
      })
}else{
    var rol = data.rolUsers.find(r => r.IdUser == usuario.UserId);
    if (rol.Type == "admin") {
        Swal.fire({
            icon: 'info',
            title: `Bienvenido al modulo gestiones <strong>${usuario.name}</strong>`,
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario autenticado no tiene permisos para este modulo.',
            showDenyButton: true,
            confirmButtonText: 'Ir a Login',
            denyButtonText: `Ir a Inicio`,
          }).then((result) => {
            if (result.isConfirmed) {
                location.href ="login.html";
            } else if (result.isDenied) {
                location.href ="../index.html";
            }
          })
    }
}


var cerrarSesion = document.getElementById('cerrarSesion');

cerrarSesion.addEventListener("click", (event) => {
    console.log(event)
    Swal.fire({
        icon: 'info',
        title: 'Quieres cerrar la sesion?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`
      }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.removeItem('UserId');
            location.href ="../index.html";
        } else if (result.isDenied) {
          
        }
      })
});