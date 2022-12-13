import { useState } from 'react';

export function Weather() {
	const [city, setCity] = useState('');
	const [data, setData] = useState(null);

	const handleChange = (event) => {
		setCity(event.target.value);
	};

	const handleSearch = () => {
		/* Fetch retorna uma promise, então precisa ser tratado*/
		fetch(
			`http://api.weatherapi.com/v1/current.json?key=edfb7f1357c24eecbcd200402221212&q=${city}&lang=pt`
		)
			.then((response) => {
				/*O then é uma das formas de tratar a promise*/
				if (response.status == 200) {
					return response.json();
				}
			})
			.then((data) => {
				console.log(data);
				setData(data);
			});
	};

	return <main></main>;
}
