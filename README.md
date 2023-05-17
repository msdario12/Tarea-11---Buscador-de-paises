# Buscador de países

## Consignas

Crear un pequeño proyecto HTML+JS en el cual ingresemos por prompt una cadena de texto y como resultado a lo que será una “búsqueda” la pagina HTML nos muestre una tabla o lista de los países del siguiente array que incluyan esa cadena en el nombre.

Opcional: como extra pueden programar que en caso de ingresar una sola letra, en lugar de mostrar los países que la incluyan en el nombre, solo mostrarán los países que empiecen con esa letra en el nombre.

## Presentación

Crear una rama nueva en el repositorio con el nombre desafío11, pusherlo al repositorio remoto y crear una pull request, presentar el link a la pull request. Pueden agregarme como colaborador si desean practicar como sería que alguien les supervise el pull y lo autorice a mergear o no dependiendo si esta correcto.

## Solucion

```JS
const copiaArray = [...paisesLatinoamericanos];

const mainTable = document.getElementById('mainTable');
const inputSearch = document.getElementById('mainSearch');

inputSearch.addEventListener('keyup', (e) => {
	const term = String(e.target.value).toLowerCase();
	if (term.length === 1) {
		filterFirstLetter(copiaArray, term);
		return;
	}
	filterTable(copiaArray, term);
});

function renderTable(array) {
	mainTable.children[1].innerHTML = '';
	array.forEach((pais, idx) => {
		mainTable.children[1].innerHTML += `
					<tr>
						<th scope="row">${idx}</th>
						<td>${pais.nombre}</td>
						<td>${pais.ubicacion}</td>
						<td>${pais.habitantes}</td>
						<td>${pais.capital}</td>
					</tr>
		`;
	});
}

function filterTable(array, term) {
	const filterArray = array.filter((pais) => {
		return pais.nombre.toLowerCase().includes(term);
	});
	renderTable(filterArray);
}

function filterFirstLetter(array, chr) {
	const filterArray = array.filter((pais) => {
		return pais.nombre.toLowerCase()[0] === chr;
	});
	renderTable(filterArray);
}

renderTable(paisesLatinoamericanos);

```
