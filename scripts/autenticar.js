//autentico usuarios

const login = () => {
    var data = JSON.parse(localStorage.getItem('dataInicial')); //obtengo informacion
    var oData = new FormData(document.forms.namedItem("form_login"));
    let email = oData.get('email');
    let clave = oData.get('password');

    if(!email || !clave){
        let msgTemp;
        if (!email) {
            msgTemp = 'Usuario invalido';
        }
        if (!clave) {
            msgTemp = msgTemp ? msgTemp + ' & clave invalida.' : 'Clave invalida';
        }
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: msgTemp
        });
    }else{
        var usuario = data.users.find(u => u.name === email);
        if (usuario) {
            var password = data.users.find(u => u.contrasena === clave && u.UserId === usuario.UserId);
            if (password) {
                Swal.fire(
                   {
                    title: 'Autenticacion Exitosa',
                    text:'Bienvenido!!!!',
                    icon: 'success',
                    timer: 3500,
                    showConfirmButton: false
                   }
                )

                var rol = data.rolUsers.find(r => r.IdUser === usuario.UserId) || '';


                data.users.forEach((element, index) => {
                    if (element.UserId == usuario.UserId) {
                        data.users[index].conectado = true;
                    }
                });

                localStorage.setItem('dataInicial', JSON.stringify(data));
                sessionStorage.setItem('UserId', usuario.UserId)

                if (rol.Type == "admin") {
                    location.href ="gestiones.html";
                } else {
                    if (rol.Type == "cliente") {
                        location.href ="../index.html";
                    }
                    location.href ="../index.html";
                }

            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No fue posible iniciar la sesion, intente mas tarde.'
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No fue posible iniciar la sesion, intente mas tarde.'
            });
        }
    }
}
