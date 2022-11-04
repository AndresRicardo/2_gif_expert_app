import { useState } from "react";

const Addcategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (event) => {
		if (inputValue.trim().length < 20) setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length < 1) return;
		if (inputValue.trim().length > 20) return;

		setInputValue("");
		onNewCategory(inputValue);
	};

	return (
		<form onSubmit={(event) => onSubmit(event)}>
			<input
				type="text"
				placeholder="Buscar gifs"
				value={inputValue}
				onChange={(event) => onInputChange(event)}
			/>
		</form>
	);
};

export default Addcategory;
