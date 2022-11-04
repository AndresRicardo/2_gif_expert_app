const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=ymFQh2P00NJdWhZW2zgEsZkdWEXOo3bq&limit=10&q=${category}`;
	const resp = await fetch(url);
	if (resp.status >= 400) return;

	const { data = [] } = await resp.json();

	const gifList = data.map((item) => {
		return {
			id: item.id,
			title: item.title,
			url: item.images.downsized_medium.url,
		};
	});

	return gifList;
};

export default getGifs;
