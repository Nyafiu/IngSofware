let total_element = document.getElementById('total'); // obtenemos el elemento

function sumar () {
  let total_value = parseInt(total_element.innerHTML);
  total_element.innerHTML = total_value + 1;
}


function restar () {
  let total_value = parseInt(total_element.innerHTML);
  if (total_value == 0) return; // validamos que el valor no sea menor a 0
  total_element.innerHTML = total_value - 1;
}

// asignamos funcion click a cada Div
document.getElementById('sumar').addEventListener('click', sumar);

document.getElementById('restar').addEventListener('click', restar);

let total_element2 = document.getElementById('total2'); // obtenemos el elemento

function sumar2 () {
  let total_value = parseInt(total_element2.innerHTML);
  total_element2.innerHTML = total_value + 1;
}


function restar2 () {
  let total_value = parseInt(total_element2.innerHTML);
  if (total_value == 0) return; // validamos que el valor no sea menor a 0
  total_element2.innerHTML = total_value - 1;
}

// asignamos funcion click a cada Div
document.getElementById('sumar2').addEventListener('click', sumar2);

document.getElementById('restar2').addEventListener('click', restar2);


function agregar(){
  var seleccionado = [];
  var combo = document.getElementById("categoria");
  var selected = combo.options[combo.selectedIndex].text;

  if(selected != 1){
    seleccionado.push(selected)
  }

  document.getElementById("total_categoria").innerHTML = seleccionado

}