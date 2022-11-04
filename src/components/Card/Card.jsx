import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ url, title }) => {
	return (
		<div className={styles.card}>
			<div className={styles.imgContainer}>
				<img src={url} alt={`Gif de ${title}`} />
			</div>
			<p className={styles.description}>{`${title}`}</p>
		</div>
	);
};

Card.propTypes = {};

export default Card;
