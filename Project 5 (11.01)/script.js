const URL = 'https://reqres.in/api/users';
const input = document.querySelector('input');
const btn = document.querySelector('button');

const getApi = () => {
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			const users = data.data;

			for (const data in users) {
				const objectUsers = users[data];
				const text = objectUsers.first_name + ' ' + objectUsers.last_name;
				const avatar = objectUsers.avatar;
				const box = document.createElement('div');
				const paragraph = document.createElement('p');
				const img = document.createElement('img');
				img.setAttribute('src', avatar);
				paragraph.textContent = text;
				document.body.appendChild(box);
				box.appendChild(paragraph);
				paragraph.appendChild(img);
			}
		});
};

getApi();

const addCustomer = (name) => {
	fetch(URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name }),
	}).then(() => {
		const box2 = document.createElement('div');
		const paragraph2 = document.createElement('p');
		document.body.append(box2);
		box2.appendChild(paragraph2);
		paragraph2.textContent = 'Loading';

		setTimeout(() => {
			const img = document.createElement('img');
			img.setAttribute('src', 'https://reqres.in/img/faces/1-image.jpg');
			paragraph2.textContent = name;
			paragraph2.appendChild(img);
		}, 5000);
        
        input.value = ''
	});
};

const checkInput = () => {
	if (input.value === '') {
		fetch(URL, {
			method: 'PSOT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name }),
		}).catch((err) => {
			console.log(err);
			alert('Należy podać nazwę użytkownika');
		});
	} else {
		const addName = input.value;
		addCustomer(addName);
	}
};

btn.addEventListener('click', (event) => {
	event.preventDefault();
	checkInput();
});
