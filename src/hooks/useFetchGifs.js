import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

export const useFetchGifs = (category) => {
	const [images, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const promise = getGifs(category); //como es funcion async, esta retorna una promesa
		promise.then((resp) => {
			setGifs(resp);
			setIsLoading(false);
		});
	}, []);

	return {
		images,
		isLoading,
	};
};
