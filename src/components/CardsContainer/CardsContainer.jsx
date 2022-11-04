import Card from "../Card/Card";
import PropTypes from "prop-types";
import React from "react";
import styles from "./CardsContainer.module.css";

const CardsContainer = ({ gifs }) => {
	return (
		<div className={styles.cardsContainer}>
			{gifs.map((gifItem) => (
				<Card key={gifItem.id} {...gifItem} /> //esta manera de psar props, pasa todas las propiedades el objeto/array como props individuales.
			))}
		</div>
	);
};

CardsContainer.propTypes = {
	gifs: PropTypes.array,
};

export default CardsContainer;
