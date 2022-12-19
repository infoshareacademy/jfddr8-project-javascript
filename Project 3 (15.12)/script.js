const button = document.querySelector('.generate-table');

button.addEventListener('click', createTable);

function createTable() {
	console.log('test');
	const rows = document.querySelector('.rows-number').value;

	const columns = document.querySelector('.columns-number').value;

	const table = document.querySelector('table');

	table.innerText = '';
	if (rows < 0) {
		alert('Only plus numbers');
	}

	for (let i = 0; i < rows; i++) {
		const r = table.insertRow(i);
		console.log(r);

		for (let c = 0; c < columns; c++) {
			const y = r.insertCell(c);
			y.innerText = 'Row-' + i + ' ' + 'Column-' + c;
			console.log(y);
		}
	}

	const td = document.querySelectorAll('td');
	console.log(td);
	const tdArray = [...td];

	tdArray.forEach((td) => {
		td.addEventListener('click', colorMe);
	});

	function colorMe(td) {
		td.target.classList.toggle('table-color');
	}
}
