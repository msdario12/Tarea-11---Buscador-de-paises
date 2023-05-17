const paisesLatinoamericanos = [
	{
		nombre: 'Argentina',
		ubicacion: 'Sudamérica',
		habitantes: 44938712,
		capital: 'Buenos Aires',
	},
	{
		nombre: 'Brasil',
		ubicacion: 'Sudamérica',
		habitantes: 213918000,
		capital: 'Brasilia',
	},
	{
		nombre: 'Chile',
		ubicacion: 'Sudamérica',
		habitantes: 19296289,
		capital: 'Santiago',
	},
	{
		nombre: 'Colombia',
		ubicacion: 'Sudamérica',
		habitantes: 50372424,
		capital: 'Bogotá',
	},
	{
		nombre: 'Costa Rica',
		ubicacion: 'Centroamérica',
		habitantes: 5127582,
		capital: 'San José',
	},
	{
		nombre: 'Cuba',
		ubicacion: 'Caribe',
		habitantes: 11333483,
		capital: 'La Habana',
	},
	{
		nombre: 'Ecuador',
		ubicacion: 'Sudamérica',
		habitantes: 17643054,
		capital: 'Quito',
	},
	{
		nombre: 'El Salvador',
		ubicacion: 'Centroamérica',
		habitantes: 6486201,
		capital: 'San Salvador',
	},
	{
		nombre: 'Guatemala',
		ubicacion: 'Centroamérica',
		habitantes: 18249339,
		capital: 'Ciudad de Guatemala',
	},
	{
		nombre: 'Honduras',
		ubicacion: 'Centroamérica',
		habitantes: 9757654,
		capital: 'Tegucigalpa',
	},
	{
		nombre: 'México',
		ubicacion: 'Norteamérica',
		habitantes: 126190788,
		capital: 'Ciudad de México',
	},
	{
		nombre: 'Nicaragua',
		ubicacion: 'Centroamérica',
		habitantes: 6624554,
		capital: 'Managua',
	},
	{
		nombre: 'Panamá',
		ubicacion: 'Centroamérica',
		habitantes: 4314768,
		capital: 'Ciudad de Panamá',
	},
	{
		nombre: 'Paraguay',
		ubicacion: 'Sudamérica',
		habitantes: 7132530,
		capital: 'Asunción',
	},
	{
		nombre: 'Perú',
		ubicacion: 'Sudamérica',
		habitantes: 33172813,
		capital: 'Lima',
	},
	{
		nombre: 'Puerto Rico',
		ubicacion: 'Caribe',
		habitantes: 3193694,
		capital: 'San Juan',
	},
	{
		nombre: 'República Dominicana',
		ubicacion: 'Caribe',
		habitantes: 10847904,
		capital: 'Santo Domingo',
	},
	{
		nombre: 'Uruguay',
		ubicacion: 'Sudamérica',
		habitantes: 3477000,
		capital: 'Montevideo',
	},
	{
		nombre: 'Venezuela',
		ubicacion: 'Sudamérica',
		habitantes: 28435943,
		capital: 'Caracas',
	},
];

// {
// 	nombre: 'Argentina',
// 	ubicacion: 'Sudamérica',
// 	habitantes: 44938712,
// 	capital: 'Buenos Aires',
// },

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
