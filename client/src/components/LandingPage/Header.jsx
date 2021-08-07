import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../image/Pokemon-Logo.png';
import bola from '../../image/bola.gif';

export default function Header(params) {
	return (
		<div className={style.body}>
			<div>
				<h1 className={style.title}>
					<span className={style.colorText}>
						P <span className={style.colorText2}>O </span> K <span className={style.colorText2}>E </span>M{' '}
						<span className={style.colorText2}>O </span>N{' '}
					</span>
				</h1>
			</div>

			<div>
				<Link to='/home' className={style.myButton}>
					<img src={logo} alt='no' height='100px' />
				</Link>
			</div>

			
				
		</div>
	);
}
