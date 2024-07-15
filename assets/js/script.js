precio = 300000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;


function incrementar() {
    let cantidadSpan = document.querySelector("#cantidad");
    let cuenta = Number(cantidadSpan.innerHTML);
    cuenta += 1;
    cantidadSpan.innerHTML = cuenta;
    actualizarTotal();
}

function disminuir() {
    let cantidadSpan = document.querySelector("#cantidad");
    let cuenta = Number(cantidadSpan.innerHTML);
    if (cuenta > 0) {
        cuenta -= 1;
    }
    cantidadSpan.innerHTML = cuenta;
    actualizarTotal();
}

function actualizarTotal() {
    let cantidad = Number(document.querySelector("#cantidad").innerHTML);
    let total = precio * cantidad;
    document.querySelector(".valor-total").innerHTML = total;
}