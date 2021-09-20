// Llenado de productos dinamicamente

var data = JSON.parse(localStorage.getItem('dataInicial'));
data.products.forEach(element => {
    if(element.Type == 2){
        var titulo = element.Details.split('|')[0]
        var detalles = element.Details.split('|')[1]
        document.getElementById('tablaFloreros').innerHTML += 
        `
        <div class="row">
            <h1 style="text-align: center;">${titulo}</h1>
            <img src="${element.PathPhoto}">
            <p>
                <strong> ${detalles}</strong>
                <br>
                <br>
                Con un precio de Q${element.Coste} 
                <br>
                <br>
                <td data-label="Comprar"><a href="${element.Link}"><strong>Comprar</strong></a></td>
            </p>
        </div>
        ` 
    }
})