// Llenado de productos dinamicamente

var data = JSON.parse(localStorage.getItem('dataInicial'));
data.products.forEach(element => {
    if(element.Type == 1){
        document.getElementById('tablaAnforas').innerHTML += 
        `<tr>
                <td data-label="Foto">
                <img style="max-height:100%; max-width:100%" src="${element.PathPhoto}">
                </td>
                <td data-label="Detalles">
                <strong>Nombre de Anfora: </strong>
                <br>
                <br>
                ${element.Details}
                </td>
                <td data-label="Precio">Q${element.Coste}</td>
                <td data-label="Comprar"><a href="${element.Link}"><strong>Comprar</strong></a></td>
            </tr>`
    }
});