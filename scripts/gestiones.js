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


let select 
select = select || "ENTRADA"

var selectTipoMovimiento = document.getElementById('movimientos');
selectTipoMovimiento.addEventListener('change', event => {
    var titulo = 'Movimiento de ';
    var proveedorocliente = '';
    if (event.target.value == 'ENTRADA') {
        titulo += 'Entrada Compras'
        select = "ENTRADA";
        proveedorocliente = 'Proveedor';
        document.getElementById("divGestiones").style.display = 'none';
        document.getElementById("divexistencia").style.display = 'none';
    }else{
        if (event.target.value == 'SALIDA') {
            titulo += 'Salida Ventas'
            select = "SALIDA"
            proveedorocliente = 'Cliente';
            document.getElementById("divGestiones").style.display = 'none';
            document.getElementById("divexistencia").style.display = 'none';
        }
        if (event.target.value == "EXISTENCIA") {
            titulo = 'Existencia por Producto'
            select = "EXISTENCIA"
            proveedorocliente = 'Producto';
            document.getElementById("divGestiones").style.display = 'none';
            document.getElementById("divexistencia").style.display = 'block';
        } 
    }
    var tituloFormGestiones = document.getElementById('tituloFormGestiones');
    tituloFormGestiones.textContent = titulo;

    var tituloTablaGestiones = document.getElementById('tituloTablaGestiones');
    tituloTablaGestiones.textContent = titulo;

    var labelproveedorocliente = document.getElementById('proveedorocliente');
    labelproveedorocliente.textContent = proveedorocliente;
})



const comprasBusqueda = () => {
    var data = JSON.parse(localStorage.getItem('dataInicial')); //obtengo informacion
    var oData = new FormData(document.forms.namedItem("form_gestiones"));
    let proveedor = oData.get('proveedor');
    let fecha = oData.get('fecha');

    if(!proveedor || !fecha){      
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese los campos completos'
        });
    }else{
        if (select == "ENTRADA") {
            document.getElementById("divGestiones").style.display = 'block';
            document.getElementById('tablaGestiones').innerHTML = ''; 
            data.compras.forEach(element => {
                document.getElementById('tablaGestiones').innerHTML += 
                `<tr>
                        <td data-label="CODIGO">${element.codigo}</td>
                        <td data-label="PRODUCTO">${element.producto}</td>
                        <td data-label="CANTIDAD">${element.cantidad}</td>
                        <td data-label="PRECIO">${element.precio}</td>
                        <td data-label="TOTAL">${element.total}</td>
                </tr>`
            });
        }else{
            if (select == "SALIDA") {
                document.getElementById("divGestiones").style.display = 'block';
                document.getElementById('tablaGestiones').innerHTML = ''; 
                data.ventas.forEach(element => {
                    document.getElementById('tablaGestiones').innerHTML += 
                    `<tr>
                            <td data-label="CODIGO">${element.codigo}</td>
                            <td data-label="PRODUCTO">${element.producto}</td>
                            <td data-label="CANTIDAD">${element.cantidad}</td>
                            <td data-label="PRECIO">${element.precio}</td>
                            <td data-label="TOTAL">${element.total}</td>
                    </tr>`
                });
            }else{
                if (select == "EXISTENCIA") {
                    document.getElementById("divGestiones").style.display = 'none';
                    document.getElementById('tablaGestiones').innerHTML = ''; 
                    var index = 0;
                    data.products.forEach(element => {
                        if (element.name == proveedor) {
                            index++;
                        }
                    });
                    var existencia = document.getElementById("existenciaInput")
                    existencia.value = index;
                }
            }
           
        }
    }
}



document.getElementById("divGestiones").style.display = 'none';


document.getElementById("divexistencia").style.display = 'none';