import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

export default function Card({ name, image, type, id }) {
	// acá va tu código
	return (
		<div className={style.card}>
			<div>
				<p className={style.p}>{name}</p>
			</div>
			<Link to={`/pokemon/${id}`}>
				<div>
					<img src={image} className={style.img} alt='Not found' />
				</div>
			</Link>
			<div>{type ? type.map((types) => <p className={style.p1}>{types}</p>) : null}</div>
		</div>
	);
}
