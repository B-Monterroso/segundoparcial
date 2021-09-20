import { Roles } from '../models/Roles.js';
import { Users } from '../models/Users.js';
import { RolUsers } from '../models/RolUsers.js';
import { Products } from '../models/Products.js';


/*Valido si existe data inicial*/
var dataActual = JSON.parse(localStorage.getItem('dataInicial')) || false;

if(!dataActual.init){
    /* Inicializo los valores predeterminados en el sistema */
    var roles = [
        new Roles(1, 'admin', true),
        new Roles(3, 'empleado', true),
        new Roles(2, 'cliente', true)
    ]

    var users = [
        new Users(1, 'admin', 'Guatemala', 55555555, '12345', false),
        new Users(2, 'beverly', 'Guatemala', 55555555, '12345', false)
    ]

    var rolUsers = [
        new RolUsers(1, 'admin', 1),
        new RolUsers(2, 'cliente', 2),
    ]

    var products = [
        new Products(1, 'Anforas', '../images/anforas.pgn.jpg', 'Nombre de Anfora: Anfora estilo griego', 
            4190.00, 'productos.html', 1, 1),
        new Products(1, 'Anforas', '../images/anforatallada.jpg', 'Nombre de Anfora: Anfora estilo tallada', 
            3190.00, 'productos.html', 1, 1),
        new Products(1, 'Anforas', '../images/anforabarro.jpg', 'Nombre de Anfora: Anfora de barro', 
            2190.00, 'productos.html', 1, 1),
        
        new Products(1, 'Floreros', '../images/Florero.JPG', 'Florero de Ceramica | Tallado a mano, con material de ceramica', 
            1200.00, 'productos.html', 1, 2),
        new Products(1, 'Floreros', '../images/Florerobarro.jpg', 'Florrero de Barro | Florero calado liso, de material de barro', 
            2200.00, 'productos.html', 1, 2),  
              
    ]

    var compras = [
        {fecha: '2021-09-19', proveedor: "uno", codigo: 1, producto: 'Anforas', cantidad: 1, precio: 4190.00, total: 4190.00},
        {fecha: '2021-09-19', proveedor: "uno", codigo: 2, producto: 'Anforas', cantidad: 1, precio: 3190.00, total: 3190.00},
        {fecha: '2021-09-19', proveedor: "uno", codigo: 3, producto: 'Anforas', cantidad: 1, precio: 2190.00, total: 2190.00},

        {fecha: '2021-09-19', proveedor: "dos", codigo: 4, producto: 'Floreros', cantidad: 1, precio: 1200.00, total: 1200.00},
        {fecha: '2021-09-19', proveedor: "dos", codigo: 5, producto: 'Floreros', cantidad: 1, precio: 2200.00, total: 2200.00}
    ]

    var ventas = [
        {fecha: '2021-09-19', cliente: "beverly", codigo: 1, producto: 'Anforas', cantidad: 1, precio: 4190.00, total: 4190.00}
    ]

    var init = true;

    /*Creo en el localStorage como persistencia los datos*/

    var dataInicial = {
        roles,
        users,
        rolUsers,
        products,
        init,
        compras,
        ventas
    }

    localStorage.setItem('dataInicial', JSON.stringify(dataInicial));
}