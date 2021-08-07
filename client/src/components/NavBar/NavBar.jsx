import React from 'react';
import { Link } from 'react-router-dom';
import bola from '../../image/bola.gif';
import Cards from '../pokemonCards/Cards';
import './Navbar.css';

export default function NavBar() {
	return (
		<>
			<header className='navbar'>
				<div>
					<img src={bola} alt='' height='40hv' />
				</div>
				<nav>
					<ul className='list'>
						<li className='list-item'>
							<Link to='/'>Landing</Link>
							<Link to='/about'>About</Link>
						</li>
					</ul>
				</nav>
				<div>
					<input type="text" placeholder= "Pokemon name ..."/>
					<button onClick={()=>{}}>Search</button>
				</div>
			</header> 
			
		</>
	);
}
<div>
				<Cards />
			</div>