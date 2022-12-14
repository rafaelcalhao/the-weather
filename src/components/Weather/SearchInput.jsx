export function SearchInput(props) {
	return (
		<input
			className='text-slate-900 text-xl
       rounded-full px-6 py-4 border-2 border-transparent outline-none transition-all duration-300 focus:scale-105 mb-8'
			type='text'
			placeholder='Digite uma cidade'
			value={props.value}
			onChange={props.onChange}
		/>
	);
}
