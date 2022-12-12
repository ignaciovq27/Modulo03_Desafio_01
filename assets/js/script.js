
promptPrecioProducto = prompt("Ingrese precio de notebook:");
spanPrecio.innerHTML = Number(promptPrecioProducto);

cardImgTop = document.querySelector(".card-img-top")
inputCantidad = document.querySelector('#cantidad-1')
inputColor = document.querySelector('#color-1')
precioProducto = document.querySelector('#spanPrecio')
precio = Number(precioProducto.innerHTML);
cardBorder1 = document.querySelector(".card");
cardBorder2 = document.querySelector(".card-2");



cantidadTotal = document.querySelector('#spanCantidadTotal')
circleColor = document.querySelector(".circle")
precioTotal = document.querySelector('#spanPrecioTotal')


btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", () => {

    cardImgTop.style.backgroundColor = inputColor.value;
    circleColor.style.backgroundColor = inputColor.value;
    cantidadTotal.innerHTML = inputCantidad.value;
    precioTotal.innerHTML = Number(inputCantidad.value) * Number(precio);
    cardBorder1.style.borderColor = inputColor.value;
    cardBorder2.style.borderColor = inputColor.value;

});

    // alert("( °)> Hey!");