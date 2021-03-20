import React, { useState } from "react";

const Search = ({ search }) => {
	const [value, setValue] = useState("");

	const handleSearchInputChanges = e => {
		setValue(e.target.value);
	};

	const resetInputField = () => {
		setValue("");
	};

	const callSearch = e => {
		e.preventDefault();
		search(value);
		resetInputField();
	};

	return (
		<form className="search">
			<input
				value={value}
				onChange={handleSearchInputChanges}
				type="text"
			/>
			<input value="BUSCAR" onClick={callSearch} type="submit" />
		</form>
	);
};

export default Search;
