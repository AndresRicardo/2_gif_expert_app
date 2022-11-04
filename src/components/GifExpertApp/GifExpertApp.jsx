import { useState } from "react";
import AddCategory from "../Addcategory/Addcategory";
import GifGrid from "../GifGrid/GifGrid";
import styles from "./GiftExpertApp.module.css";

const GiftExpertApp = () => {
	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCat) => {
		if (categories.includes(newCat)) return;

		setCategories([newCat, ...categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory onNewCategory={onAddCategory} />

			<div className={styles.gifGridContainer}>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</div>
		</>
	);
};

export default GiftExpertApp;
