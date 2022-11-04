import PropTypes from "prop-types";
import CardsContainer from "../CardsContainer/CardsContainer";
import styles from "./GifGrid.module.css";
import { useFetchGifs } from "../../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<section key={category} className={styles.gifGrid}>
			<h2>{`${category}`}</h2>

			{isLoading && <h4>Loading...</h4>}

			<CardsContainer gifs={images} />
		</section>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

export default GifGrid;
