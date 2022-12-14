import { useState } from 'react';
import { SearchInput } from './SearchInput';

export function Weather() {
	const [city, setCity] = useState('');
	const [data, setData] = useState(null);

	const handleChange = (event) => {
		setCity(event.target.value);
	};

	const loadDelay = () => {
		setIsLoaded(true);
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

	return (
		<main className='py-10'>
			<div className='container'>
				<div className='flex flex-col items-center justify-center'>
					{data ? (
						<div className='mb-10'>
							<h1 className='text-6xl mb-8 text-center'>
								{data.location.name}
							</h1>
							<h2 className='font-bold text-9xl text-center'>
								{data.current.temp_c}°C
							</h2>
							<div className='flex items-center justify-center'>
								<div className='max-w-[64px]'>
									<img
										className='w-full object-cover'
										src={data.current.condition.icon}
										alt={`${data.current.condition.text}`}
									/>
								</div>
								<span className='text-2xl'>{data.current.condition.text}</span>
							</div>
						</div>
					) : (
						''
					)}
					<SearchInput onChange={handleChange} value={city} />
					<button
						onClick={handleSearch}
						className='py-2 px-4  bg-stone-50 text-cyan-700 font-bold rounded-2xl duration-300 hover:-translate-y-1'
					>
						Pesquisar
					</button>
				</div>
			</div>
		</main>
	);
}
