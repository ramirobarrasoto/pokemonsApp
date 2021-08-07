import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cards from './components/pokemonCards/Cards.jsx';
import Header from './components/LandingPage/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx';
import Details from './components/Details/Details';


function App() {
	return (
		<BrowserRouter>
			
				<Route path='/' exact component={Header} />
				<Route path='/:another' component={NavBar} />
				<Route path='/home' component={Cards} />
				<Route path='/about' component={About} />
				{/* <Route path='/pokemon/:pokemonId' render ={({match})=><Details pokemon={}/>} /> */}
			
		</BrowserRouter>
	);
}

export default App;


